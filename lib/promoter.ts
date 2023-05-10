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

  try{
    await prisma.$disconnect()
  }
  catch (e) {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }
    
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

    try{
        await prisma.$disconnect()
      }
      catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
      }

    return data
  }