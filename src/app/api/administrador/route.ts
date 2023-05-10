import { NextResponse } from "next/server";
import { getAdministradores, inserirAdministrador } from "../../../../lib/administrador";


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

/* Versão beta do codigo de POST, sofrera mudanças em breve. */
export async function POST(request:Request) {
    const dados = await request.json()
    try {
        const nome = dados.nome
        const email = dados.email
        const senha = dados.senha
        const cpf = dados.cpf
        const superAdm = dados.superAdm

        const adm = await inserirAdministrador(nome, email, senha, cpf, superAdm)

        if (adm === null) {
            console.log("Dados de ADM invalidos.")
        } else {
            console.log("Dados criados.");
        }
    } catch (e) {
        console.log("Não deu.")
    }

}