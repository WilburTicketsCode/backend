'use client'
import { data } from '@/data/eventsData/data';
import { useState } from 'react';
import EventCard from '@/components/home/eventCard';

export default function EventsHome() {
    const [eventos, setEventos] = useState(data);
    return (
        <>
        {eventos.map((evento, index) =>(
            <div key={index}>
                <EventCard id= {index} imagem={evento.banner} data={evento.data} local={`${evento.cidade} - ${evento.estado}`}>
                    {evento.nome}
                </EventCard>
            </div>
        ))}
        </>
    )
}
