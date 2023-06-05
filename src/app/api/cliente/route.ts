import { NextResponse } from "next/server";
import { Cliente, edicaoCliente, edicaoClienteTipo, getClientes, inserirCliente } from "../../../../lib/cliente";
import { cpfDuplicado, emailDuplicado } from "../../../../lib/erros";



/* Banco pessoal
mysql://root:(SENHA)@localhost:3306/(NOME DO BANCO) 
*/

/* Banco PlanetScale (Com erro)
mysql://nh7ntf3fxeucxnnj0c6s:pscale_pw_Xy42bmYPRmC8byFrTK6SzV7jv4OABObnuFmuSZogCrY@aws.connect.psdb.cloud/bd_wilticket?sslaccept=strict
*/

export async function GET(request: Request) {
    const data = await getClientes()
    return NextResponse.json(data)
}

export async function POST(request:Request) {
    const dados: Cliente = await request.json()
    if (dados !== null){
        try {
            const cliente = await inserirCliente(dados)
    
            if (cliente === null) {
                return NextResponse.json("ERROR 00")
            } else {
                console.log("Dados criados.\n", cliente);
                return NextResponse.json(cliente)
            }

        } catch (e) {
            if (e instanceof cpfDuplicado){
                return NextResponse.json("ERROR 01")
            } else if (e instanceof emailDuplicado){
                return NextResponse.json("ERROR 02")
            }
        }
        
       
    } 

}

export async function PUT(request:Request) {
    const dados: edicaoClienteTipo = await request.json()
    if (dados !== null) {
        const clienteAlterado = edicaoCliente(dados.tipo, dados.novoDado, dados.cpfDoUsuario)
        if (clienteAlterado !== null){
            console.log("SENHA ALTERADA")
            return NextResponse.json(clienteAlterado)
        } else {   
            console.log("DEU UM ERRO")
            return NextResponse.json({error: "ERROR 00"})
        }
    }

}