import { NextResponse } from "next/server";
import { Administrador, getAdministradores, inserirAdministrador } from "../../../../lib/administrador";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { cpfDuplicado, emailDuplicado } from "../../../../lib/erros";


/* Banco pessoal
mysql://root:(SENHA)@localhost:3306/(NOME DO BANCO) 
*/

/* Banco PlanetScale (Com erro)
mysql://nh7ntf3fxeucxnnj0c6s:pscale_pw_Xy42bmYPRmC8byFrTK6SzV7jv4OABObnuFmuSZogCrY@aws.connect.psdb.cloud/bd_wilticket?sslaccept=strict
*/

export async function GET(request: Request) {
    const data = await getAdministradores()
    
    return NextResponse.json(data)
}

export async function POST(request:Request) {
    const dados: Administrador = await request.json()
    if (dados !== null){
        try {

            const adm = await inserirAdministrador(dados)
    
            if (adm === null) {
                console.log("Dados de ADM invalidos.")
            } else {
                console.log("Dados criados.\n", adm);
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