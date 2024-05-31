import multipart from '@fastify/multipart';
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateClientController } from "./controllers/Client/CreateClientController";
import { ListenClientController } from "./controllers/Client/ListenClientController";
import { LoginClientController } from "./controllers/Client/LoginClientController";
import { CreateProductsController } from "./controllers/Products/CreateProdutcsController";
import { listenProductsController } from "./controllers/Products/ListenProductsController";
const multer = require('multer')


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {
            ok: true
        }
    })

    fastify.post("/Client", async (request: FastifyRequest, reply: FastifyReply) => {

        return new CreateClientController().handle(request, reply);
    })
    fastify.post("/Client/Login", async (request: FastifyRequest, reply: FastifyReply) => {

        return new LoginClientController().handle(request, reply);
    })

    fastify.get("/Client", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListenClientController().handle(request, reply)
    })



    fastify.register(multipart)
    fastify.post("/Products", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductsController().handle(request, reply)
    })

    fastify.get("/Products", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listenProductsController().handle()
    })

}