import prismaClient from "../../prisma";
const bcrypt = require('bcrypt');

interface CreateClientProps {
    nome: string,
    cpf: string,
    email: string,
    senha: string
}


class CreateClientService {
    async execute({ nome, cpf, email, senha }: CreateClientProps) {
        if (!nome || !cpf || !email || !senha) {
            return { msg: "Por favor, preencha todos os campos!!!" }
        }
        const checkEmail = await prismaClient.client.findUnique({ where: { email: email } })
        if (checkEmail) {
            return { msg: 'Erro,email já está cadastrado' }
        }
        const checkCpf = await prismaClient.client.findUnique({ where: { cpf: cpf } })
        if (checkCpf) {
            return { msg: 'Erro, cpf já está cadastrado' }
        }
        const salt = 1
        const senhaHash = await bcrypt.hash(senha, salt)
        const client = await prismaClient.client.create({
            data: {
                nome,
                cpf,
                email,
                senha: senhaHash
            }
        })
        return client

    }
}

export { CreateClientService }