import { FastifyPluginCallback } from "fastify";
import RegistrarFilmeDTO_Req from "../models/DTOs/RegistrarFilmeDTO_Req";
import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { prismaClient } from "../server";
import { MD5 } from "crypto-js";
import Auth from "../middlewares/Auth";

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

    // instance.post("RegistrarFilme", async (req, res) => {
    //     // const { video } = req.body as RegistrarFilmeDTO_Req;
    //     var f = await req.files();
    //     var body = req.body;
    //     console.log(body)
    //     console.log({ f })
    //     var s3 = new S3({
    //         credentials: {
    //             accessKeyId: process.env.asdsa!,
    //             secretAccessKey: process.env.sssss!
    //         },
    //         region: process.env.sssssss,
    //         apiVersion: "v4",

    //     });


    // })

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

        if(filme === null)
            return res.badRequest("filme não encontrado.")

        await ss3.send(
            new PutObjectCommand({
              Bucket: 'moviein-bucket',
              Key: `detailImage/${filme.referencia}/${file?.filename}`,
              Body: fileBuffer,
            })
          )
    })

    done();
};

export default FilmeController;