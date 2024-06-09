import { FastifyPluginCallback } from "fastify";
import RegistrarFilmeDTO_Req from "../models/DTOs/RegistrarFilmeDTO_Req";
import { S3 } from '@aws-sdk/client-s3';  


const FilmeController: FastifyPluginCallback = (instance, opts, done) => {

    instance.post("RegistrarFilme", async (req, res) => {
        // const { video } = req.body as RegistrarFilmeDTO_Req;
        var f = await req.files();
        var body = req.body;
        console.log(body)
        console.log({f})
        var s3 = new S3({
            credentials: {
                accessKeyId: process.env.asdsa!,
                secretAccessKey: process.env.sssss!
            },
            region: process.env.sssssss,
            apiVersion: "v4",

        });

        const teste = s3.
    })

    done();
};

export default FilmeController;