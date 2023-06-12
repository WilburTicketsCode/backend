import { NextResponse } from "next/server";
import { PromoterEdicao, getPromoter, novaEdicaoPromoter } from "../../../../../lib/promoter";
import { usuarioNaoEncontrado } from "../../../../../lib/erros";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { cpfORcnpj: string };
  }
) {
  const cpfORcnpj = params.cpfORcnpj;
  try {
    const data = await getPromoter(cpfORcnpj);
    return NextResponse.json(data);
  } catch (e) {
    if (e instanceof usuarioNaoEncontrado) {
      return NextResponse.json(JSON.stringify('ERROR 03'));
    }
  }

}

export async function PUT(request: Request,
  {
    params,
  }: {
    params: { cpfORcnpj: string };
  }
) {
  const cpfORcnpj = params.cpfORcnpj;
  const dados: PromoterEdicao = await request.json()
  if (dados !== null) {
    try {
      const promoterAlterado = await novaEdicaoPromoter(dados, cpfORcnpj)
      if (promoterAlterado !== null) {
        console.log("PROMOTER NA API: ", promoterAlterado)
        return NextResponse.json(JSON.stringify({ message: "O Pormoter foi alterado com sucesso" }), { status: 200, headers: { "Content-Type": "application/json" } })
      } else {
        console.log("DEU UM ERRO")
        return new Response(JSON.stringify({ message: "Erro na atualização" }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    } catch (e) {
      if (e instanceof usuarioNaoEncontrado) {
        return new Response(JSON.stringify({ message: "Usuário não encontrado" }), { status: 404, headers: { "Content-Type": "application/json" } });
      }
      else {
        return new Response(JSON.stringify({ message: "Erro no servidor" }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    }
  }

}