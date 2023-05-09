import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Companies = Prisma.PromiseReturnType<typeof getClientes>;
export type Company = Prisma.PromiseReturnType<typeof getCliente>;

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
  
    return data;
  }