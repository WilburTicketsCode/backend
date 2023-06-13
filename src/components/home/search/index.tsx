'use client'
import EventsHome from '@/components/home/eventsHome';
import { useSearchParams } from 'next/navigation';

export default function SearchComponent(){
    const searchParams = useSearchParams();
    const pesquisa = searchParams.get('query');
    console.log(pesquisa)
    return(
        <EventsHome nome={pesquisa}/>
    )
}