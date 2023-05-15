import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type Lotacoes = Prisma.PromiseReturnType<typeof getLotacoes>;

export async function getLotacoes(idEvento: number) {
    const data = await prisma.lotacao.findMany({
        where: {
            id_evento: idEvento,
        },
        include: {
            setor: true,
            perfil: true
        },
    });

    try {
        await prisma.$disconnect()
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }

    return data;
}