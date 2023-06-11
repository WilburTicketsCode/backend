import {Card, CardHeader, CardBody, Typography, CardFooter} from "@/components/ClientSide";
import Link from "next/link";

type Props = {
    email: string,
    telefone: string,
    nome: string,
    identificacao: string,
    eventos: number,
    id: number,
    setTest: () => void
}
 
export default function CardPromotersSuspensos({email, telefone, nome, identificacao, eventos, id, setTest}: Props) {
  return (
    <Card className="mt-3 w-[295px] h-[210px] shadow-black/40 col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3"> 
      <CardBody className="p-5 pt-4 pb-2">
      <Typography color="blue-gray" className="mb-1 truncate font-semibold text-sm text-center">
          {nome} {/* nome */} 
        </Typography>
        <Typography className="text-xs">
          CPF/CNPJ: {identificacao}  {/* identidade */} 
        </Typography>
        <Typography className="text-xs">
          E-mail: {email} {/* email */}
        </Typography>
        <Typography className="text-xs">
          Telefone: {telefone}
        </Typography>
        <Typography className="text-xs">
          Número de eventos: {eventos}  {/* número de eventos */} 
        </Typography>
      </CardBody>
      <CardFooter className="flex flex-col object-center items-center py-3 text-center">
        <button className="border-2 border-roxo-wil text-center object-center rounded-full w-[102.5px] h-[36.5px] hover:bg-roxo-wil text-roxo-wil hover:text-white" onClick={setTest}>Revogar</button> {/*bg-green-500 */}
      </CardFooter>
    </Card>
  );
}