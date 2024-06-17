import { FastifyPluginCallback } from "fastify";
import Auth from "../middlewares/Auth";
import { prismaClient } from "../server";
import RegistroAssinaturaDTO_Req from "../models/DTOs/RegistroAssinaturaDTO_Req";
import AsaasService from "../services/AsaasService/AsaasService";


const AssinaturaController: FastifyPluginCallback = (instance, opts, done) => {

    instance.post("Registrar", { preHandler: Auth }, async (req, res) => {
        const { email } = req.user;
        const { assinatura, periodo } = req.body as RegistroAssinaturaDTO_Req;

        const user = await prismaClient.usuario.findFirst({
            include: {
                assinatura: true,
                usuarioInformacao: true
            },
            where: {
                email: email
            }
        });

        if (user === null || user === undefined)
            return res.badRequest("Usuário não encontrado");


        //em seguida, criar um cliente do usuário ao asaas.
        if (user.usuarioInformacao?.cpf === undefined)
            return res.badRequest("É necessário preencher o CPF para concluir a assinatura.")

        try {

            var asaasClientId = await AsaasService.RegistrarCliente({
                name: user.nome!,
                cpfCnpj: user.usuarioInformacao?.cpf,
                email: user.email
            });


            await prismaClient.usuario.update({
                where: {
                    email: email
                },
                data: {
                    asaasClienteId: asaasClientId,
                    funcao: assinatura
                }
            })

            //Criar uma assinatura
            const nextDueDate = new Date();
            nextDueDate.setDate(nextDueDate.getDate() + 2);

            var data = {
                customer: asaasClientId!,
                billingType: "UNDEFINED",
                cycle: periodo,
                value: 10,
                nextDueDate: nextDueDate
            }


            var asaasAssinaturaId = await AsaasService.RegistrarAssinatura(data);


            //Cadastrar nova assinatura
            var novaAssinatura = await prismaClient.assinatura.create({
                data: {
                    preco: 10,
                    tipo: periodo,
                    asaasAssinaturaId: asaasAssinaturaId?.id!,
                    usuarioId: user.id,
                    assinatura: assinatura
                }
            });

            var payments = await AsaasService.ColetarPagamento({
                subscription: asaasAssinaturaId?.id!
            });

            return res.ok(payments?.data[0].invoiceUrl);

        } catch (error) {
            var e = error as string;
            return res.badRequest(e.toString().replace("Error: ", ""));
        }
    })


    done();
};

export default AssinaturaController;