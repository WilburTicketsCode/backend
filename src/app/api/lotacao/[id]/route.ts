import { NextResponse } from "next/server";
import { getLotacoes } from "../../../../../lib/lotacao";

export async function GET(request: Request,
  {
    params
  }: {
    params: { id: number }
  }
) {
  const idEvento = Number(params.id);
  const data = await getLotacoes(idEvento);

  return NextResponse.json(data);
}