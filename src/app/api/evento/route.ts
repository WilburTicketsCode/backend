import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";


/* Banco pessoal
mysql://root:(SENHA)@localhost:3306/(NOME DO BANCO) 
*/

/* Banco PlanetScale (Com erro)
mysql://nh7ntf3fxeucxnnj0c6s:pscale_pw_Xy42bmYPRmC8byFrTK6SzV7jv4OABObnuFmuSZogCrY@aws.connect.psdb.cloud/bd_wilticket?sslaccept=strict
*/

export async function GET(request: Request) {
    const prisma = new PrismaClient();
    const data = await prisma.evento.findMany({
        include: {
            endereco: true,
            promoter: true
        },
        orderBy: [{
            id: "desc"
          }
        ],
    })
    return NextResponse.json(data)
}