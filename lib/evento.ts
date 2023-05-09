import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Companies = Prisma.PromiseReturnType<typeof getEventos>;
export type Company = Prisma.PromiseReturnType<typeof getEvento>;

export async function getEventos() {
    const data = await prisma.evento.findMany({
        include: {
            endereco: true,
            promoter: true,
        },
        orderBy: [{
            id: "desc"
          }
        ],
    })
    return data
}

export async function getEvento(id: number) {
    const data = await prisma.evento.findUnique({
      where: {
        id: id,
      },
      include: {
        endereco: true,
        promoter: true
      },
    });
  
    return data;
  }