import { FastifyRequest, FastifyReply } from "fastify";
import { ListenClientService } from "../../services/Clients/ListenClientService"


class ListenClientController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listenClient = new ListenClientService()
        const client = await listenClient.execute()
        reply.send(client)

    }
}
export { ListenClientController }