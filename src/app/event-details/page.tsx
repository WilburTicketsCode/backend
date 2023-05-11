import { MdOutlineShare, MdCalendarMonth, MdLocationOn } from "react-icons/md";
import { ImClock } from "react-icons/im";
import Tickets from '@/components/event/Tickets';


export default function Event() {
    return (
        <div className="mx-auto w-full h-full">
            <div className='flex justify-center lg:h-[70%] md:h-1/2 sm:h-1/2 mb-1 mt-2'>
                <img 
                    className='w-[95%] m-5 items-center rounded-2xl'
                    src="/img/event-banner/show_djavan.jpeg"
                    alt='Imagem do evento'
                />
            </div>

            <div className='shadow-2xl mr-8 ml-8 relative flex-row rounded-lg bg-gray-100 p-10'>
                <div>
                    <div className='flex flex-col items-center'>
                        <p className="text-2xl font-bold m-6 ">
                            Djavan Turne A 2023
                        </p>
                        <button className="shadow-xl text-gray-100 font-bold bg-deep-purple-400 flex items-center gap-3 rounded-full p-2">
                            <MdOutlineShare size={'1rem'}/>
                            Compartilhar
                        </button>
                    </div>

                    <div className="flex flex-wrap mt-8">
                        <MdCalendarMonth color={'#6a1b9a'} size={'1.5rem'}/>
                        <p className="font-semibold ml-2 mr-5 text-blue-gray-900">Domingo, 02/04/2023</p>
                        
                        <ImClock color={'#6a1b9a'} size={'1.5rem'}/>
                        <p className="font-semibold ml-2 mr-5 text-blue-gray-900">21:00 - 00:00</p>
                    </div>

                    <div className="flex w-full mt-5">
                        <MdLocationOn color={'#6a1b9a'} size={'1.5rem'}/>
                        <p className="font-semibold ml-2 mr-5 text-blue-gray-900">CLASSIC HALL - Av. Gov Agamenon Magalhães S/N, Recife - Pernambuco</p>
                    </div>

                    <p className='font-bold mt-5 text-blue-gray-900'>Descrição</p>
                    <div className='lg:flex md:flex mt-2 text-justify justify-between'>
                        <div className='md:w-[50%] lg:w-[50%] mb-10'>
                            <p className='text-blue-gray-900'> O cantor Djavan, que encerrou a turnê Vesúvio no palco do Classic Hall, volta à casa de shows em Olinda, no dia 2 de abril, com sua mais nova turnê, "D". Além das canções do álbum de inéditas, ele traz um repertório recheado de grandes sucessos da sua carreira. As vendas dos ingressos terão início no dia 6 de dezembro na bilheteria do Classic Hall e online através do site Sympla. 
                                O novo trabalho de Djavan conta com 12 faixas inéditas, incluindo a parceria com Milton Nascimento em Beleza Destruída. O disco está disponível nas plataformas digitais pela Sony Music, via Luanda Records. Djavan também reuniu sua família na faixa Iluminado, com as participações de Flávia Viana, Max Viana, João Viana, Sofia Viana, Inácio Viana, Thomas Boljover & Lui Viana.
                            </p> 
                        </div>

                        <div className='lg:grid bg-gray-200 rounded-lg'>
                            <Tickets/>
                            <Tickets/>
                            <Tickets/>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

