import { FastifyRequest, FastifyReply } from "fastify";
import { CreateClientService } from "../../services/Clients/CreateClientService"

class CreateClientController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { nome, cpf, email, senha } = request.body as { nome: string, cpf: string, email: string, senha: string }
        const clientServices = new CreateClientService

        const client = await clientServices.execute({ nome, cpf, email, senha })

        reply.send(client)
    }



}

export { CreateClientController }