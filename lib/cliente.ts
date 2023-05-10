import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Clientes = Prisma.PromiseReturnType<typeof getClientes>;
export type Cliente = Prisma.PromiseReturnType<typeof getCliente>;

export async function getClientes() {
    const data = await prisma.cliente.findMany({
        include: {
            endereco: true,
            usuario: true,
            cartao: true,
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

export async function getCliente(cpf: string) {
    const data = await prisma.cliente.findUnique({
      where: {
        cpf: cpf,
      },
      include: {
        endereco: true,
        usuario: true,
        cartao: true,
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