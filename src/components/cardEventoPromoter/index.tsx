import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button, 
} from "../ClientSide";

import Link from "next/link";
 

type Props = {
  imagem: string,
  nome: string,
  data: string,
  local: string,
  evento: number
  status: string,
} 


export default function CardEventoPromoter({imagem, nome, data, local, evento, status}: Props ) {
  return (
    <Card className="mt-0 w-[320px] h-[288px] shadow-black/40 col-span-12 md:col-span-6 xl:col-span-4"> 
      <CardHeader floated={false} color="blue-gray" className="relative h-60 mx-0 mt-0">
      <img src={imagem} alt="imagem-do-evento" className={`object-fill h-full w-full ${status === "suspenso" ? " brightness-[.25]" : ""}`} />
        {status === "suspenso" && <span className="!absolute top-1/3 right-1/3 text-white px-1 text-center">Suspenso</span>}
      </CardHeader>
      <CardBody className="p-5 pt-4 pb-2">
        <Typography variant="h5" color="blue-gray" className="mb-1 truncate font-semibold text-base">
          {nome} {/* nomeEvento */} 
        </Typography>
        <Typography className="text-xs">
            {data} {/* dataEvento */}
        </Typography>
        <Typography className="text-xs">
          {local}  {/* localEvento */} 
        </Typography>     
        <Link href={`/promoter/eventos/vendas/${evento}`}>
          <Button className="bg-roxo-wil font-sans h-[40px] w-[130px] mt-auto p-0 ml-2">
            Detalhes 
          </Button>
        </Link>
        
      </CardBody>
    </Card>
  );
}

