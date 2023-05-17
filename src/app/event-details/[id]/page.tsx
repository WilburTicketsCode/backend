import { 
    MdOutlineShare,
    MdCalendarMonth,
    MdLocationOn 
} from "react-icons/md";

import { ImClock } from "react-icons/im";
import Tickets from '@/components/event/Tickets';
import { Button } from '@/components/ClientSide';
import moment from 'moment';


async function loadEvent(id: Number) {
    const res = await fetch(`http://localhost:3000/api/evento/${id}`);
    return res.json();
}

async function loadLotacoes(id: Number) {
    const res = await fetch(`http://localhost:3000/api/lotacao/${id}`);
    return res.json();
}

export default async function Event({params} : any) {

   const evento = await loadEvent(params.id)
   const lotacoes = await loadLotacoes(params.id)

    return (
        
        <div className="bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200">
            <div className='flex justify-center'>
                <img 
                    className='w-[95%] lg:h-[500px] m-5 items-center max-w-full h-auto object-fit rounded-2xl'
                    src="/img/event-banner/show_djavan.jpeg"
                    alt='Imagem do evento'
                />
            </div>

            <div className='shadow-2xl mr-6 ml-6 flex-row rounded-lg bg-gray-100 p-10'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-2xl font-bold m-6">
                        {evento.nome}
                    </h1>
                    <Button color="purple" size="md" className="flex items-center gap-3 rounded-full">
                        <MdOutlineShare size={'1rem'}/>
                        Compartilhar
                    </Button>
                </div>

                <div className="flex flex-shrink mt-8 text-sm">
                    <div className="flex flex-wrap"><MdCalendarMonth color={'#6a1b9a'} size={'1rem'}/></div>
                    <h3 className="font-semibold ml-2 mr-16 text-blue-gray-900">
                        {moment(evento.horaInicio).format("DD/MM/YYYY")}
                    </h3>
                    
                    <div className="flex flex-wrap"><ImClock color={'#6a1b9a'} size={'1rem'}/></div>
                    <h3 className="font-semibold ml-2 mr-5 text-blue-gray-900">
                        {moment(evento.horaInicio).format("HH:mm")} - {moment(evento.horaFim).format("HH:mm")}
                    </h3>
                </div>

                <div className="flex flex-shrink mt-5 text-sm">
                    <div className="flex flex-wrap"><MdLocationOn color={'#6a1b9a'} size={'1.5rem'}/></div>
                    <h3 className="font-semibold ml-2 mr-5 text-blue-gray-900">
                        {`${evento.endereco.rua}, ${evento.endereco.numero}, ${evento.endereco.bairro}, ${evento.endereco.cidade} - ${evento.endereco.estado}`}
                    </h3>
                </div>

                <h2 className='font-bold mt-16 text-blue-gray-900'>Descrição</h2>
                <div className='lg:flex lg:gap-10 grid mt-2 text-justify justify-between'>

                    <div className='lg:w-[50%] mb-10'>
                        <h3 className='text-blue-gray-900 text-sm'> 
                            {evento.descricao}
                        </h3> 
                    </div>

                    <div className='shadow-2xl text-center gap-20 grid-cols-3 bg-gray-300 rounded-lg p-3'>

                        {lotacoes.map((lotacao : any) => (
                            <Tickets key={lotacao.id}
                                setor={lotacao.setor.nome}
                                perfil={lotacao.perfil.nome}
                                valor={lotacao.valorTotal}
                            />
                        ))}

                        <p className="mb-5">Subtotal: R$ 0,00</p>
                        <Button color="purple" type="submit" className="m-auto flex gap-3 rounded-full p-2">
                            Adicionar ao carrinho
                        </Button> 

                    </div>

                </div>
            </div>

        </div>
    )
}