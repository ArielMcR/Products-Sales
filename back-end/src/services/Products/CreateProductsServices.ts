import prismaClient from "../../prisma";



interface CreateProductsProps {
    nome: string,
    categoria: string,
    cor: string,
    tamanho: string,
    sexo: string,
    preco: number,
    nomesImagens: string[]
}

class CreateProductsService {
    async execute({ nome, categoria, cor, tamanho, sexo, preco, nomesImagens }: CreateProductsProps) {
        if ([nome, categoria, cor, tamanho, sexo, preco].some(field => !field)) {
            return { msg: "Por favor, preencha todos os campos!!!" };
        }

        const product = await prismaClient.produtos.create({
            data: {
                nome,
                categoria,
                cor,
                tamanho,
                sexo,
                preco,
                img: {
                    create: nomesImagens.map(filename => ({ filename }))
                }
            }
        });

        return product;

    }
}
export { CreateProductsService } 