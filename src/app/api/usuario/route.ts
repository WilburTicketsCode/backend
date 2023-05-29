import { NextResponse } from "next/server"
import { getUsuarios } from "../../../../lib/usuario"


export async function GET(request: Request) {
    const data = await getUsuarios()
    
    return NextResponse.json(data)
}