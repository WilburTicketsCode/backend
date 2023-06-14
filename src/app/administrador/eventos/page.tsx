"use client";
import React, { useState, useEffect} from "react";
import CardEventoAdm from "@/components/Admin/Eventos";


export default function AdmHome() {

    interface IEndereco {
        rua: string;
        bairro: string;
        cidade: string;
    }
    
    const [numOfElement, setNumOfElement] = useState(6);
    const [events, setEvents] = useState<any[]>([]);
    const [isVisible, setIsVisible] = useState(true);
    const [refreshEvents, setRefreshEvents] = useState(false);

     //------ Consulta a API
    const fetchEvents = async () => {
        const reponse = await fetch("/api/evento");
        const data = await reponse.json();
        setEvents(data);
    }

    useEffect(() => {
        fetchEvents();
    }, [refreshEvents]);
    // ----- Fim Consulta a API
    
    useEffect(() =>{                            // Ativar/desativar o botão de carregar mais
        if (numOfElement >= events.length){     // Caso todos os eventos já estejam visiveis na tela 
            setIsVisible(false)                 // Desativa o botão de carregar mais
        }else {                                 // Caso todos os eventos ainda não estejam na tela
            setIsVisible(true)                  // Ativa o botão para carregar mais
        }
    }, [events, numOfElement])                  // Verifica se o botão deve ter alteração, caso ocorra alguma alteração na lista de eventos ou no número de eventos visiveis na tela
    
    const slice = events.slice(0, numOfElement);

    function formatDate(date: string): string {
        const fullDate = date.slice(0,16).replaceAll('-', '/').replaceAll('T', '-').split('-');   
        const dateymdA = fullDate[0].split('/').reverse();                  // Obtém o ano, mês e dia para ordenar como -> dia/mês/ano
        const dateymdS = `${dateymdA[0]}/${dateymdA[1]}/${dateymdA[2]}`;    // Formata a data para ser exibida corretamente
        return `${dateymdS} - ${fullDate[1]}`
    }

    function formatLocalEvento(endereco: IEndereco): string {
        return endereco.rua + ", " + endereco.bairro + ", " + endereco.cidade
    }

    const loadMore = () => {
        setNumOfElement(numOfElement + numOfElement)
    }

    return (
        <div className="flex flex-col h-full items-center justify-center mt-4 pt-20 bg-transparent">
            <div className="grid grid-cols-12 md:col-span-6 xl:col-span-4 h-full xl:gap-x-14 md:gap-8 gap-y-8 mt-4 mb-4">
                {slice.map((item, index) => {
                    return (<CardEventoAdm key={item.id} imagemEvento={item.banner} nomeEvento={item.nome} dataEvento={formatDate(item.horaInicio)} localEvento={formatLocalEvento(item.endereco)} evento={item.id} status={item.status} refreshEvents={refreshEvents} setRefreshEvents={setRefreshEvents}/>)
                })}
                <div className="object-center text-center col-span-12 mt-10 mb-3">
                    {isVisible ? 
                    <button className="bg-roxo-wil h-[36px] w-[230px] text-white font-sans text-sm font-semibold text-center object-center rounded-full shadow-md shadow-black/40" onClick={() => loadMore()}> 
                        MAIS EVENTOS 
                    </button> 
                    : null}
                </div>
            </div>
        </div>
    )
}