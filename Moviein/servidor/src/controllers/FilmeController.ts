import { FastifyPluginCallback } from "fastify";
import RegistrarFilmeDTO_Req from "../models/DTOs/RegistrarFilmeDTO_Req";
import { GetObjectAclCommand, GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { prismaClient } from "../server";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { MD5 } from "crypto-js";
import Auth from "../middlewares/Auth";
import FilmeItemDTO_Res from "../models/DTOs/FilmeItemDTO_Res";
import FilmeDTO_Res from "../models/DTOs/FilmeDTO_Res";
import DetalheFilmeDTO_Res from "../models/DTOs/DetalheFilmeDTO_Res";

if (!process.env.AWS_REGION || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error('As variáveis de ambiente AWS_REGION, AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY devem estar definidas.');
}

const ss3 = new S3({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

const FilmeController: FastifyPluginCallback = (instance, opts, done) => {

    instance.post("RegistroConteudo", { preHandler: Auth }, async (req, res) => {
        const { email } = req.user;
        const { nome, descricao, classificacao, thumbnail, categoria } = req.body as RegistrarFilmeDTO_req;
        const usuario = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })
        if (usuario == null)
            return res.badRequest("usuário não encontrado.");

        const filme = await prismaClient.filme.findFirst({
            where: {
                nome: nome,
            }
        })

        if (filme != null)
            return res.badRequest("filme com esse nome já existente.");

        //Registrando o filme no banco
        var reference = MD5(usuario.nome + "|" + nome).toString();

        var novoFilme = await prismaClient.filme.create({
            include: {
                InformacaoFilme: true
            },
            data: {
                nome: nome,
                categoria: categoria,
                imagemThumb: thumbnail,
                referencia: reference,
                autorId: usuario.id,
                classificacao: classificacao,
                publicadoEm: new Date,
                InformacaoFilme: {
                    create: {
                        descricao: descricao,
                        imagemCaminho: ""
                    }
                }
            }
        })

        return res.ok({
            filmeId: novoFilme.id
        });
    })


    instance.post("RegistroImagem", { preHandler: Auth }, async (req, res) => {
        const { filmeId } = req.query as { filmeId: string };

        var file = await req.file();
        var fileBuffer = await file?.toBuffer();

        const filme = await prismaClient.filme.findFirst({
            where: {
                id: parseInt(filmeId)
            }
        });

        if (filme === null)
            return res.badRequest("filme não encontrado.")

        var caminho = `detailImage/${filme.referencia}/${file?.filename}`;

        await ss3.send(
            new PutObjectCommand({
                Bucket: 'moviein-bucket',
                Key: caminho,
                Body: fileBuffer,
            })
        )

        await prismaClient.informacaoFilme.update({
            where: {
                filmeId: parseInt(filmeId)
            },
            data: {
                imagemCaminho: caminho
            }
        });
    })

    instance.get("VisualizarFilme", async (req, res) => {
        const { filmeId } = req.query as { filmeId: string }

        const filme = await prismaClient.filme.findFirst({
            include: {
                InformacaoFilme: true
            },
            where: {
                id: parseInt(filmeId)
            }
        });

        if (filme === null)
            return res.badRequest("Não encontrado.");

        var l = new GetObjectCommand({
            Bucket: "moviein-bucket",
            Key: filme.InformacaoFilme?.imagemCaminho
        })

        var url = await getSignedUrl(ss3, l, { expiresIn: 3000 });
        return res.ok({
            url: url
        })
    });

    instance.get("NovoFilme", { preHandler: Auth }, async (req, res) => {

        var filme = await prismaClient.filme.findFirst({
            include: {
                ClienteFilme: true,
                InformacaoFilme: true
            },
            orderBy: {
                publicadoEm: "desc"
            }
        });

        var l = new GetObjectCommand({
            Bucket: "moviein-bucket",
            Key: filme?.InformacaoFilme?.imagemCaminho
        })

        var url = await getSignedUrl(ss3, l, { expiresIn: 3000 });

        res.ok({
            imagem: url,
            nome: filme?.nome,
            filmeId: filme?.id
        })
    })

    instance.post("RegistroFilme", { preHandler: Auth }, async (req, res) => {
        const { filmeId } = req.query as { filmeId: string }

        var file = await req.file();
        var fileBuffer = await file?.toBuffer();

        const filme = await prismaClient.filme.findFirst({
            where: {
                id: parseInt(filmeId)
            }
        });

        console.log({ "file": file });

        await ss3.send(
            new PutObjectCommand({
                Bucket: 'moviein-bucket',
                Key: `movie/${filme?.referencia}/${file?.filename}`,
                Body: fileBuffer,
            })
        )

    })


    instance.get("Meusvideos", { preHandler: Auth }, async (req, res) => {
        const { email } = req.user;

        const usuario = await prismaClient.usuario.findFirst({
            where: {
                email
            }
        })

        if (usuario == null)
            return res.badRequest("Usuário não encontrado.");

        const filmes = await prismaClient.filme.findMany({
            where: {
                autorId: usuario.id
            }
        })

        const response: MeusvideoItemDTO_Res[] = filmes.map(e => ({
            classificacaoAssinantes: 0,
            nome: e.nome,
            id: e.id,
            thumb: e.imagemThumb
        }))

        return res.ok(response);

    })



    instance.get("ListarFilmes", { preHandler: Auth }, async (req, res) => {
        const { email } = req.user;

        var filmes = await prismaClient.filme.findMany();

        // Extrair categorias únicas
        const categoriasSet = new Set<string>();
        filmes.forEach(f => categoriasSet.add(f.categoria));

        const categorias = Array.from(categoriasSet);

        var response: FilmeDTO_Res[] = categorias.map((c) => ({
            categoria: c,
            filmes: filmes.filter(f => f.categoria === c).map(f => ({
                id: f.id,
                thumb: f.imagemThumb
            }))
        }))

        return res.ok(response);
    })

    instance.get("DetalheFilme", { preHandler: Auth }, async (req, res) => {
        const { FilmeId } = req.query as { FilmeId: string };

        var filme = await prismaClient.filme.findFirst({
            include: {
                InformacaoFilme: true
            },
            where: {
                id: parseInt(FilmeId)
            }
        });

        if (filme === null)
            return res.badRequest("Filme não encontrado.");

        var l = new GetObjectCommand({
            Bucket: "moviein-bucket",
            Key: filme?.InformacaoFilme?.imagemCaminho
        })

        var url = await getSignedUrl(ss3, l, { expiresIn: 3000 });
        var response: DetalheFilmeDTO_Res = {
            caminhoImagem: url,
            classificacao: filme.classificacao,
            descricao: filme.InformacaoFilme!.descricao,
            id: filme.id,
            titulo: filme.nome
        }

        return res.ok(response);
    })

    done();
};

export default FilmeController;