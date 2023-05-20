'use client'

import { useState } from 'react';
import EventCard from '@/components/home/eventCard';
import { data } from '@/data/eventsData/data';
import { useRouter } from 'next/router';



export default function Search() {
    const [eventos, setEventos] = useState(data);

    return (
    <div className='flex flex-col justify-center pt-[150px] items-center bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200'>

        <div className= "flex justify-center lg:w-[60vw] w-[95vw] min-h-[8rem] flex-col bg-gray-300 rounded-xl">
            {eventos.map((evento, index) =>(
                <div>
                    <EventCard id= {index} imagem={evento.banner} data={evento.data} local={`${evento.cidade} - ${evento.estado}`}>
                        {evento.nome}
                    </EventCard>
                </div>
            ))}
        </div>
            <h1 className='flex justify-center text-white text-[14px] lg:text-[18px] my-2 '>Esses são todos os eventos correspondentes</h1>
    </div>
  );
}