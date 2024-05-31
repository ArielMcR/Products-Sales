import prismaClient from "../../prisma";
import { FastifyRequest, FastifyReply } from "fastify"


class ListenProductsServices {
    async execute() {
        const listenProducts = await prismaClient.produtos.findMany(
            {
                include: {
                    img: true
                }
            }
        )


        return listenProducts

    }
}

export { ListenProductsServices }
