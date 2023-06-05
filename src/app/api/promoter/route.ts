import { NextResponse } from "next/server";
import { Promoter, getPromoters, inserirPromoter } from "../../../../lib/promoter";
import { cpfDuplicado, emailDuplicado } from "../../../../lib/erros";

export async function GET(request: Request) {
    const data = await getPromoters()
    
    return NextResponse.json(data)
}

export async function POST(request:Request) {
    const dados: Promoter = await request.json()
    if (dados !== null){
        try {

            const promoter = await inserirPromoter(dados)
    
            if (promoter === null) {
                console.log("Dados de PROMOTER invalidos.")
                return NextResponse.json("ERROR 00")
            } else {
                console.log("Dados criados.\n", promoter);
                
                return NextResponse.json(promoter)
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