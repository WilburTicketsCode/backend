import { NextResponse } from "next/server";
import { Promoter, getPromoters, inserirPromoter } from "../../../../lib/promoter";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { cpfDuplicado, emailDuplicado } from "../../../../lib/erros";


/* Banco pessoal
mysql://root:(SENHA)@localhost:3306/(NOME DO BANCO) 
*/

/* Banco PlanetScale (Com erro)
mysql://nh7ntf3fxeucxnnj0c6s:pscale_pw_Xy42bmYPRmC8byFrTK6SzV7jv4OABObnuFmuSZogCrY@aws.connect.psdb.cloud/bd_wilticket?sslaccept=strict
*/

export async function GET(request: Request) {
    const data = await getPromoters()
    
    return NextResponse.json(data)
}

export async function POST(request:Request) {
    const dados: Promoter = await request.json()
    if (dados !== null){
        try {

            const promoter = await inserirPromoter(dados)
    
            if (promoter === null) {
                console.log("Dados de PROMOTER invalidos.")
            } else {
                console.log("Dados criados.\n", promoter);
            }

        } catch (e) {
            if (e instanceof  PrismaClientKnownRequestError) {

                if (e.code === 'P2002'){

                    if (e.message.split(' ')[8] === '`Usuario_email_key`'){

                    throw new emailDuplicado("esté email já existe nos registros.")

                  } else if (e.message.split(' ')[8] === '`Administrador_cpf_key`') {

                    throw new cpfDuplicado("esté cpf já existe nos registros.")

                  }
                }
            }
        }
    
    } 

}