import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Companies = Prisma.PromiseReturnType<typeof getAdministradores>;
export type Company = Prisma.PromiseReturnType<typeof getAdministrador>;

export async function getAdministradores() {
    const data = await prisma.administrador.findMany({
        include: {
            usuario: true,
        },
        orderBy: [{
            id: "desc"
          }
        ],
    })
    return data
}

export async function getAdministrador(cpf: string) {
    const data = await prisma.administrador.findUnique({
      where: {
        cpf: cpf,
      },
      include: {
        usuario: true
      },
    });

    try{
      await prisma.$disconnect()
    }
    catch (e) {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    }
  
    return data;
  }