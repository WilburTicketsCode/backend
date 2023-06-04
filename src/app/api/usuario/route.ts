import { NextResponse } from "next/server"
import { edicaoUsuario, edicaoUsuarioTipo, getUsuarios } from "../../../../lib/usuario"


export async function GET(request: Request) {
    const data = await getUsuarios()
    
    return NextResponse.json(data)
}

export async function PUT(request:Request) {
    const dados: edicaoUsuarioTipo = await request.json()
    if (dados !== null) {
        const clienteAlterado = await edicaoUsuario(dados.tipo, dados.novoDado, dados.emailDoUsuario)
        if (clienteAlterado !== null){
            return NextResponse.json(clienteAlterado)
        } else {   
            console.log("DEU UM ERRO")
            return NextResponse.json({error: "ERROR 00"})
        }
    }

}