import { FastifyRequest, FastifyReply } from "fastify"
import { ListenProductsServices } from "../../services/Products/ListenProductsService"

class listenProductsController {
    async handle() {
        const listenProducts = new ListenProductsServices
        const products = await listenProducts.execute()
        return products
    }
}

export { listenProductsController }