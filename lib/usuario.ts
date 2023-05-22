import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Usuario = Prisma.PromiseReturnType<typeof getUsuario>;

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