import { NextResponse } from "next/server";
import { getCliente } from "../../../../../lib/cliente";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { cpf: string };
  }
) {
  const cpf = params.cpf;
  const data = await getCliente(cpf);

  return NextResponse.json(data);
}