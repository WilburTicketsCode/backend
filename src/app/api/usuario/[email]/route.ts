import { NextResponse } from "next/server";
import { getUsuario } from "../../../../../lib/usuario";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { email: string };
  }
) {
  const email = params.email;
  const data = await getUsuario(email);

  return NextResponse.json(data);
}