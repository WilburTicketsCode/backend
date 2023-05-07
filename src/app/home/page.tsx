import {Carousel, Typography, Button, ThemeProvider, Rating } from '@/components/home/carrossel'
import '../../styles/globals.css'
import Caro from './theme';
import EventCard from '@/components/home/eventCards';

export default function Example() {
    return (
    <div className = 'grid grid-cols-[1fr_1060px_1fr] bg-gradient-to-r from-[#334166] to-[#BFA8C7]'>
        
        <div className= 'bg-cyan-500'>
            {/* Linha superior Coluna esquerda*/}

        </div>

        <div>
            {/* Linha superior Coluna do meio*/}
            <div className={`
            flex justify-center items-center h-[86px] w-full bg-cyan-500 text-black 
            `}>Barra superior</div>
        </div>

        <div className= 'bg-cyan-500'>
            {/* Linha superior Coluna direita*/}
        </div>

        <div>
            {/* Linha média superior Coluna esquerda*/}

        </div>

        <div>
            {/* Linha média superior Coluna do meio*/}
            <h1 className='flex m-[15px] text-white text-5xl'>Encontre seu próximo evento</h1>

            <div className='flex justify-center mb-[50px]'>
                <div className='h-[230px] w-[1000px]'>
                    <Caro/>
                </div>
            </div>

        </div>

        <div>
            {/* Linha média superior Coluna direita*/}

        </div>

        <div>
            {/* Linha média inferior Coluna esquerda*/}
        </div>

        <div>
            {/* Linha média inferior Coluna do meio*/}
        </div>

        <div>
            {/* Linha média inferior Coluna direita*/}
        </div>

        <div>
            {/* Linha inferior Coluna esquerda */}
        </div>

        <div>
            {/* Linha inferior Coluna do meio */}
            <div className="flex justify-center flex-wrap ">
                <EventCard>Djavan Turnê D 2023</EventCard>
                <EventCard>Djavan Turnê D 2023</EventCard>
                <EventCard>Djavan Turnê D 2023</EventCard>
                <EventCard>Djavan Turnê D 2023</EventCard>
            </div>
        </div>

        <div>
            {/* Linha inferior Coluna direita */}
        </div>
        
    </div>
  );
}