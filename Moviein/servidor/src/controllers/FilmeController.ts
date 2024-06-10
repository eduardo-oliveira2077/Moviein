import { FastifyPluginCallback } from "fastify";
import RegistrarFilmeDTO_Req from "../models/DTOs/RegistrarFilmeDTO_Req";
import { S3 } from '@aws-sdk/client-s3';
import { prismaClient } from "../server";
import { MD5 } from "crypto-js";


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

    instance.post("RegistroConteudo", async (req, res) => {
        const { email } = req.user;
        const { nome, descricao, classificacao, thumbnail, imageDetail } = req.body as RegistrarFilmeDTO_req;
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


        var reference = MD5(usuario.nome + "|" + nome).toString();

        var novoFilme = await prismaClient.filme.create({
            include: {
                InformacaoFilme: true
            },
            data: {
                nome: nome,
                categoria: "Terror",
                imagemThumb: thumbnail,
                referencia: reference,
                autorId: usuario.id,
                InformacaoFilme: {
                    create: {
                        descricao: descricao,
                        imagemCaminho: ""
                    }
                }
            }
        })


        return res.ok("filme criado com sucesso.");
    })

    done();
};

export default FilmeController;