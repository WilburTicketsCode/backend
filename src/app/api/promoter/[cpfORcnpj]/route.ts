import { NextResponse } from "next/server";
import { getPromoter } from "../../../../../lib/promoter";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { cpfORcnpj: string };
  }
) {
  const cpfORcnpj = params.cpfORcnpj;
  const data = await getPromoter(cpfORcnpj);
    
  return NextResponse.json(data);
}