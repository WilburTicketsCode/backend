import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Promoters = Prisma.PromiseReturnType<typeof getPromoters>;
export type Promoter = Prisma.PromiseReturnType<typeof getPromoter>;

export async function getPromoters() {
    const data = await prisma.promoter.findMany({
        include: {
            usuario: true,
            eventos: true,
            endereco: true,
        },
        orderBy: [{
            id: "desc"
          }
        ],
    })
    
    return data
}

export async function getPromoter(cpfORcnpj: string) {
    const data = await prisma.promoter.findMany({
        where: {
            OR: [
                {cpf: cpfORcnpj},
                {cnpj: cpfORcnpj}
              ]
        },
        include: {
            usuario: true,
            eventos: true,
            endereco: true,
        },
        orderBy: [{
            id: "desc"
          }
        ],
    })

    return data[0]
  }

export async function inserirPromoter(promoter: Promoter) {

    if (promoter === null) {
        return null
    } else {

        const promoterDATA = await prisma.promoter.create({
            data: {
                usuario: {
                    create: {
                        nome: promoter.usuario.nome,
                        email: promoter.usuario.email,
                        senha: promoter.usuario.senha
                    }
                },
                cpf: promoter.cpf,
                cnpj: promoter.cnpj,
                status: promoter.status,
                data_nasc: promoter.data_nasc,
                telefone: promoter.telefone,
                endereco: {
                    create: {
                        rua: promoter.endereco.rua,
                        numero: promoter.endereco.numero,
                        bairro: promoter.endereco.bairro,
                        cidade: promoter.endereco.cidade,
                        estado: promoter.endereco.estado,
                        cep: promoter.endereco.cep,
                        complemento: promoter.endereco.complemento
                    }
                }
            }
        })
        return promoterDATA

    }
}