
import {Carousel} from "../../ClientSide";
import { data } from '@/data/eventsData/data';
import { useState } from 'react';

export default function Carrossel(props: any){
    const [eventosCarrossel, setEventosCarrossel] = useState(data.slice(0, 4));

    return(
        <Carousel className="rounded-xl">

          {eventosCarrossel.map((evento, index) =>(
            <div key={index} className="h-full">
              <img src={evento.banner} alt={evento.nome} className="h-full w-full object-cover lg:px-[150px]"/>
            </div>
          ))}
      </Carousel>
    )
}