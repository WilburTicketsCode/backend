import { NextResponse } from "next/server";
import { alterarSenha, alterarSenhaType } from "../../../../../lib/usuario";
import { usuarioNaoEncontrado } from "../../../../../lib/erros";


export async function PUT(request: Request) {
    const dados: alterarSenhaType = await request.json()
    if (dados !== null) {
        try {
            const usuarioAlterado = await alterarSenha(dados.senhaAntiga, dados.senhaNova, dados.email)
            if (usuarioAlterado !== undefined){
                const {senha, ...usuarioSemSenha} = usuarioAlterado
                return NextResponse.json(JSON.stringify(usuarioSemSenha))
            }

        } catch (e) {
            if (e instanceof usuarioNaoEncontrado) {
                return NextResponse.json(JSON.stringify("ERROR 03"))
            }
        }
    }

}