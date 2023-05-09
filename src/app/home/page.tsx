import {Carousel, Typography, Button, ThemeProvider, Rating } from '@/components/home/carrossel'
import '../../styles/globals.css'
import Caro from './theme';
import EventCard from '@/components/home/eventCards';

export default function Example() {
    return (
    <div className = 'grid grid-cols-[1fr_1060px_1fr] bg-gradient-to-r from-[#334166] to-[#BFA8C7]'>
        
        <div className="bg-cyan-500">
            {/* Linha superior Coluna esquerda*/}

        </div>

        <div>
            {/* Linha superior Coluna do meio*/}
            <div className={`
            flex justify-center items-center h-[86px] w-full bg-cyan-500 text-black 
            `}>Barra superior</div>
        </div>

        <div className="bg-cyan-500">
            {/* Linha superior Coluna direita*/}
        </div>

        <div>
            {/* Linha média superior Coluna esquerda*/}

        </div>

        <div>
            {/* Linha média superior Coluna do meio*/}
            <h1 className='flex justify-center m-[15px] text-white text-5xl'>Encontre seu próximo evento</h1>

            <div className='flex justify-center mb-[50px]'>
                <div className='h-[230px] w-[1000px] flex justify-center'>
                    <Caro imagem1 = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        imagem2 = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        imagem3 = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
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
            <div className="flex justify-center flex-wrap ">
                <EventCard imagem = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                data="05/04" local="Recife - PE">Djavan Turnê A 2023</EventCard>

                <EventCard imagem = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                data="06/05" local="Salvador - BA">Djavan Turnê B 2023</EventCard>

                <EventCard imagem = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                data="07/06" local="Cachoeira - BA">Djavan Turnê C 2023</EventCard>

                <EventCard imagem = "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                data="08/07" local="Feira de Santana - BA">Djavan Turnê D 2023</EventCard>
            </div>
        </div>

        <div>
            {/* Linha média inferior Coluna direita*/}
        </div>

        <div>
            {/* Linha inferior Coluna esquerda */}
        </div>

        <div className="col-start-1 col-end-4">
            {/* Linha inferior Coluna do meio */}
            <div className="flex justify-center h-[200px] bg-cyan-300">
                Footer
            </div>
        </div>

        <div>
            {/* Linha inferior Coluna direita */}
        </div>
        
    </div>
  );
}