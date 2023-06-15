import { NextResponse } from "next/server";
import { deletarEvento, getEvento } from "../../../../../lib/evento";


/* Banco pessoal
mysql://root:(SENHA)@localhost:3306/(NOME DO BANCO) 
*/

/* Banco PlanetScale (Com erro)
mysql://nh7ntf3fxeucxnnj0c6s:pscale_pw_Xy42bmYPRmC8byFrTK6SzV7jv4OABObnuFmuSZogCrY@aws.connect.psdb.cloud/bd_wilticket?sslaccept=strict
*/

export async function GET(request: Request, {params}: {
    params: { id: number }
  })
{
    const data = await getEvento(Number(params.id))
    return NextResponse.json(data)
}

export async function DELETE(request: Request, {params}: {
  params: { id: number }
})
{
  const data = await deletarEvento(Number(params.id))

  if (data === true){
    return new Response(JSON.stringify({ message: "Evento deletado com sucesso"}), { status: 200, headers: { "Content-Type": "application/json" } });
  }
  else {
    return new Response(JSON.stringify({ message: "Ouve um erro ao deletar o evento"}), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
