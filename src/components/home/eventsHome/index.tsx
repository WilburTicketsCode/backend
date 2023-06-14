'use client'
import { data } from '@/data/eventsData/data';
import { useState, useEffect } from 'react';
import EventCard from '@/components/home/eventCard';
import { Eventos } from '../../../../lib/evento';

interface Evento {
  id: number,
  nome: string,
  horaInicio: string,
  horaFim: string,
  descricao: string,
  banner: string,
  id_endereco: number,
  id_promoter: string,
  status: string,
  endereco: {
    bairro: string,
    cep: string,
    cidade: string,
    estado: string,
    numero: number,
    rua: string,
    complemento: string
  }
  lotacoes: [
    lotacao: {
      id_perfil: number,
      id_setor: number,
      quantidade: number,
      valorTotal: number
    }
  ]
}

function dataDaHora(hora: string){
  const horammdd = hora.slice(0, 10);
  const horaddmm = horammdd.slice(8, 10) + "/" + horammdd.slice(5, 7) + "/" + horammdd.slice(0, 4);
  return horaddmm;
}

export default function EventsHome(props: any) {
    const [eventos, setEventos] = useState<Evento[]>([]);
    
    const fetchEvents = async () => {
        const reponse = await fetch(`/api/evento`);
        const  data = await reponse.json();
        setEventos(data);
    }

    let eventosListados: Evento[] = eventos;

    function filtrarDisponiveis(){
      return eventos.reduce((resultado: Evento[], evento) =>{
        if(evento.status!=="suspenso"){
          resultado.push(evento)
        }
        return resultado;
      }, [])
    }
    function ordenarPorData(lista: Evento[]) {
      const sortedList = lista.sort((a:Evento, b:Evento) => {
        const dateA = new Date(a.horaInicio).getTime();
        const dateB = new Date(b.horaInicio).getTime();
        return dateA - dateB;
      });
    
      return sortedList;
    }
    
    const eventosDisp = ordenarPorData(filtrarDisponiveis());

    function determinarEventos(){
      if (props.nome === ""){
        eventosListados = eventosDisp;
      } else{
        eventosListados = eventosDisp.reduce((resultado: Evento[], evento) =>{
          if (evento.nome.toUpperCase().includes(props.nome.toUpperCase())){
            resultado.push(evento)
          }
          return resultado;
        }, [])
      }
    }


    useEffect(() => {
        fetchEvents();
    }, []);
    
    determinarEventos();
    return (
        <div className="text-center">
          {eventosListados.length==0?"Não há eventos correspondentes":""}
          {
            eventosListados?.map((evento, index)=>(
                <EventCard key={index} id= {evento.id} imagem={evento.banner} data={dataDaHora(evento.horaInicio)} local={`${evento.endereco.cidade} - ${evento.endereco.estado}`}>
                    {evento.nome}
                </EventCard>
            ))
          }
        </div>
    )
}
