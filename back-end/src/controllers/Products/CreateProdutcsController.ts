import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductsService } from "../../services/Products/CreateProductsServices"
import fs from 'fs';
import path from 'path';



class CreateProductsController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const data = request.parts()


        let nome: string = '', categoria: string = '', cor: string = '', tamanho: string = '', sexo: string = '', preco: number = 0.0
        const nomesImagens = [];
        const uploadDir = path.join(path.resolve(__dirname, '../../'), 'uploads');
        const dia = new Date()
        const BaseDirDayUploads = path.join(uploadDir, `${dia.getDate() + '-' + (dia.getMonth() + 1)}`)
        if (!fs.existsSync(BaseDirDayUploads)) {
            fs.mkdirSync(BaseDirDayUploads, { recursive: true });
        }

        for await (const part of data) {
            if (part.type === 'file') {
                const nomeArquivo = `${`${Date.now()}-${dia.getDate() + '-' + (dia.getMonth() + 1)}`}${path.extname(part.filename)}`;
                const caminhoArquivo = path.join(BaseDirDayUploads, nomeArquivo);

                // Salve o arquivo no disco
                await fs.promises.writeFile(caminhoArquivo, await part.toBuffer());

                // Adicione o nome do arquivo ao array
                nomesImagens.push(nomeArquivo);
            }
            else {
                switch (part.fieldname) {
                    case 'nome':
                        nome = part.value as string;
                        break;
                    case 'categoria':
                        categoria = part.value as string;
                        break;
                    case 'cor':
                        cor = part.value as string;
                        break;
                    case 'tamanho':
                        tamanho = part.value as string;
                        break;
                    case 'sexo':
                        sexo = part.value as string;
                        break;
                    case 'preco':
                        preco = Number(part.value) as number;
                        break;
                }
            }
        }

        const productsServices = new CreateProductsService

        const products = await productsServices.execute({ nome, categoria, cor, tamanho, sexo, preco, nomesImagens })
        reply.send(products)

    }

}

export { CreateProductsController }



