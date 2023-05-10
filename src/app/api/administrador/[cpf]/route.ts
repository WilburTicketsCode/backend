import { NextResponse } from "next/server";
import { getAdministrador } from "../../../../../lib/administrador";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { cpf: string };
  }
) {
  const cpf = params.cpf;
  const data = await getAdministrador(cpf);

  return NextResponse.json(data);
}