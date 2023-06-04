import {Card, CardHeader, CardBody, Typography, CardFooter} from "@/components/ClientSide";
import Link from "next/link";

type Props = {
    email: string,
    nome: string,
    status: string,
    eventos: number,
    id: number
}
 
export default function CardPromotersAdm({email, nome, status, eventos, id}: Props) {
  return (
    <Card className="mt-3 w-[295px] h-[190px] shadow-black/40 col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3"> 
      <CardBody className="p-5 pt-4 pb-2">
        <Typography color="blue-gray" className="mb-1 truncate font-semibold text-sm">
            E-mail: {email} {/* email */} 
        </Typography>
        <Typography className="text-xs">
          Nome: {nome} {/* nome */}
        </Typography>
        <Typography className="text-xs">
          Status: {status}  {/* status */} 
        </Typography>
        <Typography className="text-xs">
          Número de eventos: {eventos}  {/* número de eventos */} 
        </Typography>
      </CardBody>
      <CardFooter className="grid grid-cols-2 py-3 gap-x-6 text-center">
        <button className="border-2 border-roxo-wil text-center object-center rounded-full">Negar</button>                         {/*border-red-500 */}
        <button className=" bg-roxo-wil text-white font-sans text-sm text-center object-center rounded-full">Aprovar</button> {/*bg-green-500 */}
      </CardFooter>
    </Card>
  );
}