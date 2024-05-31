import { FastifyRequest, FastifyReply } from "fastify";
import { LoginClientService } from "../../services/Clients/LoginClientService"

class LoginClientController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { email, senha } = request.body as { email: string, senha: string }
        const clientServices = new LoginClientService

        const client = await clientServices.execute({ email, senha })

        reply.send(client)
    }



}

export { LoginClientController }