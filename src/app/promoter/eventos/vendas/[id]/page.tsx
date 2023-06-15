"use client"
import { MdCalendarMonth } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImClock } from "react-icons/im";
import Footer from "@/components/Footer";
import moment from "moment";
import 'moment/locale/pt-br';
import CartButton from "@/components/EventDetails/CartButton";
import Vendas from "@/components/Promoter/Detalhes";
import { useEffect, useState } from "react";
import ShareButtonPromoter from "@/components/Promoter/Detalhes/ShareButton";


interface iLotacao {
    setor: {
        id: number,
        nome: string
    },
    id_perfil: number,
    id_setor: number,
    quantidade: number,
    valorTotal: number,
    ingressos: iIngresso[],
    perfil: {
        id: number,
        nome: string
    },
}

interface iIngresso {
    id: number,
    valor_pago: number,
    id_lotacao: number,
    id_compra: number 
}

moment.locale('pt-br')

export default function Event({params}: {params: { id: number }}) {

    const [event, setEvent] = useState<any>();
    const [total, setTotal] = useState(0);
    const [lotacao, setLotacao] = useState<iLotacao[]>([])
    const [qtdTotal, setQtdTotal] = useState(0);

    const fetchEvents = async () => {
        const reponse = await fetch(`/api/evento/${params.id}`);
        const data = await reponse.json();
        setEvent(data);
        setLotacao(data.lotacao);
    }

    useEffect(() => {
        fetchEvents();
    }, []);


    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <img 
                    className='mt-32 w-[95%] lg:h-[500px] m-5 items-center max-w-full h-auto object-fit rounded-lg'
                    src= {event?.banner}
                    alt='Imagem do evento'
                    />  
                </div>

                <div className='mb-10 shadow-2xl mr-6 ml-6 flex-row rounded-lg bg-gray-100 p-10'>
                    <div className='flex flex-col items-center'>
                        <h1 className="text-2xl font-bold m-6">
                        {event?.nome}
                        </h1>
                        {event?.status === "disponivel" && <ShareButtonPromoter id={params.id}/>}
                    </div>
                    
                    <div className="items-center text-sm">
                        <div className="flex flex-wrap mt-8"><MdCalendarMonth className="fill-roxo-wil" size={'1rem'}/>
                        <h3 className="font-semibold ml-2 mr-16 text-blue-gray-900">
                        {`${moment(event?.horaInicio).format("dddd").charAt(0).toUpperCase() + moment(event?.horaInicio).format("dddd").slice(1)}, ${moment(event?.horaInicio).format("L")}`}
                        </h3>
                        </div>
                        <div className="flex flex-wrap mt-5"><ImClock className="fill-roxo-wil" size={'1rem'}/>
                        <h3 className="font-semibold ml-2 mr-5 text-blue-gray-900">
                            {`${moment(event?.horaInicio).format("HH:mm")} - ${moment(event?.horaFim).format("HH:mm")}`}
                        </h3>
                        </div>
                    </div>

                    <div className="flex flex-shrink mt-5 text-sm">
                        <div className="flex flex-wrap"><FaMapMarkerAlt className="fill-roxo-wil" size={'1.2rem'}/></div>
                        <h3 className="font-semibold ml-2 mr-5 text-blue-gray-900">
                            {`${event?.endereco.rua}, ${event?.endereco.numero}, ${event?.endereco.bairro}, ${event?.endereco.cidade} - ${event?.endereco.estado}`}
                        </h3>
                    </div>

                    <h2 className='font-bold mt-16 text-blue-gray-900'>Descrição</h2>
                    <div className='lg:flex lg:gap-10 grid mt-2 text-justify justify-between'>

                        <div className='lg:w-[50%] mb-10'>
                            <h3 className='text-blue-gray-900 text-sm'>
                            {event?.descricao}
                            </h3> 
                        </div>

                        <div className='shadow-2xl text-center gap-20 grid-cols-3 bg-gray-300 rounded-lg p-3'>
                            {
                               lotacao?.map(({ ingressos, setor, perfil }) => (
                                    <Vendas
                                    ingressos={ingressos}
                                    setor={setor}
                                    perfil={perfil}
                                    setTotal={setTotal}
                                    total={total}
                                    setQtdTotal={setQtdTotal}
                                    qtdTotal={qtdTotal}
                                />
                                ))
                            }
                            <h2>{`Total vendido: R$ ${total}`}</h2>
                            <h2>{`Quantidade total: ${qtdTotal}`}</h2>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}