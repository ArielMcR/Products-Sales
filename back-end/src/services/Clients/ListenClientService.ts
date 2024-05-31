import prismaClient from "../../prisma";


class ListenClientService {
    async execute() {
        const client = await prismaClient.client.findMany()

        return client

    }

}

export { ListenClientService }