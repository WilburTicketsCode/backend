import { NextResponse } from "next/server";
import { adicionarCompra, getCliente } from "../../../../../lib/cliente";
import { Compra } from "../../../../../lib/cliente";

export async function POST(request:Request) {
    const dados: Compra = await request.json()
    if (dados !== null){
        const compra = await adicionarCompra(dados.ingressos, dados.cpfCliente)
        if (compra !== null){
            return new Response(JSON.stringify({ message: "Compra feita com sucesso!"}), { status: 200, headers: { "Content-Type": "application/json" } });
        }else {
            return new Response(JSON.stringify({ message: "Ouve um erro na hora de realizar a compra!"}), { status: 500, headers: { "Content-Type": "application/json" } });
          
        }
    }
}