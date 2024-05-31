import prismaClient from "../../prisma";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


interface LoginClientProp {
    email: string,
    senha: string
}

class LoginClientService {
    async execute({ email, senha }: LoginClientProp) {
        const client = await prismaClient.client.findUnique({ where: { email: email } })
        if (!client) {
            return { msg: "Email not found" }
        }

        // Comparar a senha fornecida com o hash armazenado
        const senhaCorreta = await bcrypt.compare(senha, client.senha);
        if (!senhaCorreta) {
            return { msg: "Incorrect password" };
        }

        const key = process.env.SECRET_KEY
        // Geração do token JWT
        const token = jwt.sign({ email: client.email, id: client.id, nome: client.nome }, key);

        return { client, token };
    }
}

export { LoginClientService }
