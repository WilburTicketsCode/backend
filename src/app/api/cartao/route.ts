import { Cartao, inserirCartao } from "../../../../lib/cartao";
import { NextResponse } from "next/server";


export async function POST(request:Request) {
    const dados: Cartao = await request.json()
    if (dados !== null) {
        const cartao = inserirCartao(dados)
        if (cartao !== null){
            return NextResponse.json("EBA")
        } else {
            return NextResponse.json("UUU")
        }
    }
}