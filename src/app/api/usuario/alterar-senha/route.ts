import { NextResponse } from "next/server";
import { alterarSenha, alterarSenhaType, updatePass } from "../../../../../lib/usuario";
import { usuarioNaoEncontrado } from "../../../../../lib/erros";


// export async function PUT(request: Request) {
//     const dados: alterarSenhaType = await request.json()
//     if (dados !== null) {
//         try {
//             const usuarioAlterado = await alterarSenha(dados.senhaAntiga, dados.senhaNova, dados.email)
//             if (usuarioAlterado !== undefined){
//                 const {senha, ...usuarioSemSenha} = usuarioAlterado
//                 return NextResponse.json(JSON.stringify(usuarioSemSenha))
//             }

//         } catch (e) {
//             if (e instanceof usuarioNaoEncontrado) {
//                 return NextResponse.json(JSON.stringify("ERROR 03"))
//             }
//         }
//     }
// }

export async function PUT(request: Request) {
    // Transforma os dados para um objeto json
    const dados: alterarSenhaType = await request.json()
    try {
        const res = await updatePass(dados.senhaAntiga, dados.senhaNova, dados.email)
        // Se achar o user e conseguir atualizar
        return new Response(JSON.stringify({ message: "A senha foi alterada com sucesso"}), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        // Se não achar o user
        if (error instanceof usuarioNaoEncontrado) {
            return new Response(JSON.stringify({ message: "Usuário não encontrado"}), { status: 404, headers: { "Content-Type": "application/json" } });
        }
        // Se der qualquer outro erro 
        else{
            return new Response(JSON.stringify({ message: "Erro no servidor"}), { status: 500, headers: { "Content-Type": "application/json" } });
        }
    }
    
    // Se o retorno null, a response é 404
    // Se tiver alterado, mensagem de sucesso

}