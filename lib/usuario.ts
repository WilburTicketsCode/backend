import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Usuario = Prisma.PromiseReturnType<typeof getUsuario>;

export async function getUsuario(email: string) {
    const data = await prisma.usuario.findUnique({
      where: {
        email: email,
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