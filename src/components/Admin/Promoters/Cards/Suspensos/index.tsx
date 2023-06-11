import {Card, CardBody, Typography, CardFooter} from "@/components/ClientSide";

type Props = {
  email: string,
  telefone: string,
  nome: string,
  identificacao: string,
  eventos: number,
  setStatus: Function
}
 
export default function CardPromotersSuspensos(props: Props) {
  return (
    <Card className="mt-3 w-[295px] h-[210px] shadow-black/40 col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3"> 
      <CardBody className="p-5 pt-4 pb-2">
        <Typography color="blue-gray" className="mb-1 truncate font-semibold text-sm text-center">
          {props.nome} 
        </Typography>
        <Typography className="text-xs">
          CPF/CNPJ: {props.identificacao}
        </Typography>
        <Typography className="text-xs">
          E-mail: {props.email}
        </Typography>
        <Typography className="text-xs">
          Telefone: {props.telefone}
        </Typography>
        <Typography className="text-xs">
          Número de eventos: {props.eventos}
        </Typography>
      </CardBody>
      <CardFooter className="flex flex-col object-center items-center py-3 text-center">
        <button className="border-2 border-roxo-wil text-center object-center rounded-full w-[102.5px] h-[36.5px] hover:bg-roxo-wil text-roxo-wil hover:text-white" onClick={() => props.setStatus(props.identificacao, 'aprovado')}>Revogar</button>
      </CardFooter>
    </Card>
  );
}