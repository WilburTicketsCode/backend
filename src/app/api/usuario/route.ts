import { NextResponse } from "next/server"
import { edicaoUsuario, edicaoUsuarioTipo } from "../../../../lib/usuario"


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