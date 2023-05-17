import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Eventos = Prisma.PromiseReturnType<typeof getEventos>;
export type Evento = Prisma.PromiseReturnType<typeof getEvento>;

export async function getEventos() {
    const data = await prisma.evento.findMany({
        include: {
            endereco: true,
            promoter: true,
            lotacao: true,
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
