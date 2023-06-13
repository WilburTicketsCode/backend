import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Usuario = Prisma.PromiseReturnType<typeof getUsuario>;

export async function getUsuarios() {
  const data = await prisma.usuario.findMany({
    include:{
      promoter: true,
      adm: true,
      cliente: true
    },
    orderBy: [{
      id: "desc"
    }
  ],
  })

  return data
}

export async function getUsuario(email: string) {
    const data = await prisma.usuario.findUnique({
      where: {
        email: email,
      },
      include: {
        adm: true,
        promoter: true,
        cliente: true
      }
    });
  
    return data;
}