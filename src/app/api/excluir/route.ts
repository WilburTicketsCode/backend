import { excluirCartao } from "../../../../lib/cartao";
import { NextResponse } from "next/server";


export async function POST(request:Request) {
    const cpf: {cpf:string} = await request.json()
    if (cpf !== null) {
        const cartao = excluirCartao(cpf);
        if (!cartao){
            return NextResponse.json("EBA")
        } else {
            return NextResponse.json("UUU")
        }
    }
}