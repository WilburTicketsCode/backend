import {Card, CardHeader, CardBody, Typography, Button, IconButton} from "@/components/ClientSide";

type Props = {
    imagemEvento: string,
    nomeEvento: string,
    dataEvento: string,
    localEvento: string,
    evento: number,
    status: string,
    refreshEvents: boolean,
    setRefreshEvents: Function
}


const EditarStatusEv = {
  tipo: 'trocar status',
  novoDado: 'suspenso',
  idDoEvento: 1
}


export default function CardEventoAdm({imagemEvento, nomeEvento, dataEvento, localEvento, evento, status, refreshEvents, setRefreshEvents}: Props) {
  async function CallChangeStats(){
    const jaison = JSON.stringify({
    tipo: EditarStatusEv.tipo,
    novoDado: EditarStatusEv.novoDado,
    idDoEvento: evento
    })
    
    const res = await fetch("/api/evento", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: jaison
    })
    
    if (res.ok) {
        const data = await res.json()
        console.log(JSON.stringify(data)) 
        console.log("AQUII:", res)

        setRefreshEvents(!refreshEvents)
    } else {
        alert("Não foi possível suspender o evento!")    //Mostra que não foi possível alterar o status
      }
      }

  async function CallExclude(){
    const jaison = JSON.stringify({
      id: evento
      })
      
      const res = await fetch(`/api/evento/${evento}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
      body: jaison
      })
      
      if (res.ok) {
          const data = await res.json()
          console.log(JSON.stringify(data)) 
          console.log("AQUII:", res)
  
          setRefreshEvents(!refreshEvents)
      } else {
          alert("Não foi possível Excluir o evento!")    //Mostra que não foi possível excluir
        }
      }
    

  return (

    <Card className="mt-0 w-[320px] h-[288px] shadow-black/40 col-span-12 md:col-span-6 xl:col-span-4"> 
      <CardHeader floated={false} color="blue-gray" className="relative h-60 mx-0 mt-0">
        <img src={imagemEvento} alt="imagem-do-evento" className={`object-fill h-full w-full ${status === "suspenso" ? " brightness-[.25]" : ""}`} />
        {status === "suspenso" && <span className="!absolute top-1/3 right-1/3 text-white px-1 text-center">Suspenso</span>}
      </CardHeader>
      <CardBody className="p-5 pt-4 pb-2">
        <Typography variant="h5" color="blue-gray" className="mb-1 truncate font-semibold text-base">
          {nomeEvento} {/* nomeEvento */} 
        </Typography>
        <Typography className="text-xs">
            {dataEvento} {/* dataEvento */}
        </Typography>
        <Typography className="text-xs">
          {localEvento}  {/* localEvento */} 
        </Typography>
        <hr className="my-1 border-blue-gray-50" />
        <div className="flex flex-row gap-2">
        {status !== "suspenso" && <Button type='submit' className="bg-roxo-wil m-auto flex gap-y-4 rounded-full p-2" onClick={CallChangeStats}>
          Suspender Evento
        </Button>}
        <Button type="submit"  className="bg-roxo-wil m-auto flex gap-y-4 rounded-full p-2" onClick={CallExclude}>
          Excluir Evento
        </Button> 
        </div>
      </CardBody>
    </Card>
    
  );
}

