"use client";
import React, { useEffect, useState } from "react";
import CardEventoAdm from "@/components/Admin/EventsAdmin";

export default function AdmHome() {

    const data = {
        eventData: [{
            id: 1,
            imagemEvento: "https://mundoconectado.com.br/uploads/chamadas/capa_145.jpg",
            nomeEvento: "Evento 1",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 2,
            imagemEvento: "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg",
            nomeEvento: "Evento 2",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 3,
            imagemEvento: "https://www.paxbahia.com.br/images/bl/festas-juninas-na-bahia-programacao.jpg",
            nomeEvento: "Evento 3",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 4,
            imagemEvento: "https://lesdemoiselles.com.br/wp-content/uploads/2022/04/pexels-javon-swaby-3279692-1024x683.jpg",
            nomeEvento: "Evento 4",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 5,
            imagemEvento: "https://mundoconectado.com.br/uploads/chamadas/capa_145.jpg",
            nomeEvento: "Evento 5",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 6,
            imagemEvento: "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg",
            nomeEvento: "Evento 6",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 7,
            imagemEvento: "https://www.paxbahia.com.br/images/bl/festas-juninas-na-bahia-programacao.jpg",
            nomeEvento: "Evento 7",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 8,
            imagemEvento: "https://lesdemoiselles.com.br/wp-content/uploads/2022/04/pexels-javon-swaby-3279692-1024x683.jpg",
            nomeEvento: "Evento 8",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 11,
            imagemEvento: "https://mundoconectado.com.br/uploads/chamadas/capa_145.jpg",
            nomeEvento: "Evento 11",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 21,
            imagemEvento: "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg",
            nomeEvento: "Evento 21",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 31,
            imagemEvento: "https://www.paxbahia.com.br/images/bl/festas-juninas-na-bahia-programacao.jpg",
            nomeEvento: "Evento 31",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 41,
            imagemEvento: "https://lesdemoiselles.com.br/wp-content/uploads/2022/04/pexels-javon-swaby-3279692-1024x683.jpg",
            nomeEvento: "Evento 41",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 51,
            imagemEvento: "https://mundoconectado.com.br/uploads/chamadas/capa_145.jpg",
            nomeEvento: "Evento 51",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 61,
            imagemEvento: "https://alphaconvites.com.br/wp-content/uploads/2023/01/festa-antes-formatura-scaled-1-2048x1367.jpg",
            nomeEvento: "Evento 61",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 71,
            imagemEvento: "https://www.paxbahia.com.br/images/bl/festas-juninas-na-bahia-programacao.jpg",
            nomeEvento: "Evento 71",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        },
        {
            id: 81,
            imagemEvento: "https://lesdemoiselles.com.br/wp-content/uploads/2022/04/pexels-javon-swaby-3279692-1024x683.jpg",
            nomeEvento: "Evento 81",
            dataEvento: "06/06/2023 - 20:00",
            localEvento: "Hall do auditório central"
        }
        ]
    }

    const [numOfElement, setNumOfElement] = useState(6);
    const slice = data.eventData.slice(0, numOfElement);

    const loadMore = () => {
        setNumOfElement(numOfElement + numOfElement)
    }

    //const [items, setItems] = useState([]);
    //const [visible, setVisible] = useState([3]);

    //useEffect(() => {
    //    fetch("https://jsonplaceholder.typicode.com/posts")
    //        .then((res) => res.json())
    //        .then((data) => setItems(data));
    //}, [])

    return (
        <div className="flex flex-col h-full items-center justify-center mt-4">
            <div className="grid grid-cols-12 md:col-span-6 xl:col-span-4 h-full xl:gap-x-14 md:gap-8 gap-y-8 mt-4 mb-4">  {/*Layout para essa página*/}
                {slice.map((item, index) => {
                    return (<CardEventoAdm imagemEvento={item.imagemEvento} nomeEvento={item.nomeEvento} dataEvento={item.dataEvento} localEvento={item.localEvento} evento="#" />)
                })}
                <div className="object-center text-center col-span-12 mt-10 mb-3">
                    <button className="bg-roxo-wil h-[36px] w-[230px] text-white font-sans text-sm font-semibold text-center object-center rounded-full shadow-md shadow-black/40" onClick={() => loadMore()}>
                        MAIS EVENTOS
                    </button>
                </div>
            </div>
        </div>


    )
}