import {Card, CardBody, Typography, CardFooter} from "@/components/ClientSide";

type tEndereco = {
  id: number, 
  rua: string,
  numero: string, 
  bairro: string, 
  cidade: string,
  estado: string, 
  cep: string, 
  complemento: string
}


type Props = {
  email: string,
  telefone: string
  nome: string,
  identificacao: string,
  endereco: tEndereco,
  setStatus: Function
}

function fromatCpfCnpj(identificador: string): string{
  if (identificador.length > 11){ //CNPJ
    var cnpj = identificador.slice(0,2)+'.'+identificador.slice(2,5)+'.'+identificador.slice(5,8)+'/'+identificador.slice(8,12)+'-'+identificador.slice(12,14)
    return cnpj
  } else{
    var cpf = identificador.slice(0,3)+'.'+identificador.slice(3,6)+'.'+identificador.slice(6,9)+'-'+identificador.slice(9,11)
    return cpf
  }
}
 
export default function CardPromotersPendentes(props: Props) {
  return (
    <Card className="mt-3 w-[295px] h-[210px] shadow-black/40 col-span-12 md:col-span-6 xl:col-span-4"> 
      <CardBody className="p-5 pt-4 pb-2">
        <Typography color="blue-gray" className="mb-1 truncate font-semibold text-sm text-center">
          {props.nome}
        </Typography>
        <Typography className="text-xs">
          CPF/CNPJ: {fromatCpfCnpj(props.identificacao)} 
        </Typography>
        <Typography className="text-xs">
          E-mail: {props.email}
        </Typography>
        <Typography className="text-xs">
          Telefone: {props.telefone}
        </Typography>
        <Typography className="text-xs">
          Endereço: {props.endereco.cidade + ", " + props.endereco.estado}
        </Typography>
      </CardBody>
      <CardFooter className="grid grid-cols-2 py-3 gap-x-6 text-center">
        <button className="border-2 border-roxo-wil/90 text-center object-center rounded-full hover:border-roxo-wil text-roxo-wil/90 hover:text-roxo-wil" onClick={() => props.setStatus(props.identificacao, 'suspenso')}>Recusar</button>
        <button className=" bg-roxo-wil/95 text-white font-sans text-sm text-center object-center rounded-full hover:bg-roxo-wil"  onClick={() => props.setStatus(props.identificacao, 'aprovado')}>Aprovar</button>
      </CardFooter>
    </Card>
  );
}