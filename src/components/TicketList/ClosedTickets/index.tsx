"use client";
import React, { useEffect, useState } from "react";
import CardEventoAdm from "@/components/TicketList/Card";

export default function ClosedTickets() {
  const [numOfElement, setNumOfElement] = useState(6);
  const [events, setEvents] = useState<any[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/evento");
      const data = await response.json();
      if (Array.isArray(data)) {
        const currentDate = new Date(); // Obter a data atual
        const closedEvents = data.filter((event) => {
          const endDate = new Date(event.horaFim);
          return endDate < currentDate;
        });
        setEvents(closedEvents);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const slice = events.slice(0, numOfElement);

  function formatDate(date: string): string {
    const dd = date.slice(0, 16).replaceAll("-", "/").replaceAll("T", "-").split("-");
    return dd[0] + " - " + dd[1];
  }

  const loadMore = () => {
    setNumOfElement(numOfElement + numOfElement);
  };

  const areMoreEventsAvailable = numOfElement < events.length;
  const isButtonDisabled = !areMoreEventsAvailable;

  return (
    <div className="flex flex-col h-full items-center justify-center mt-4">
      <div className="grid grid-cols-12 md:col-span-6 xl:col-span-4 h-full xl:gap-x-14 md:gap-8 gap-y-8 mt-4 mb-4">
        {slice.map((item, index) => (
          <CardEventoAdm
            key={index}
            imagemEvento={item.banner}
            nomeEvento={item.nome}
            dataEvento={formatDate(item.horaInicio)}
            localEvento={`${item.endereco.rua}, ${item.endereco.bairro}, ${item.endereco.cidade}`}
            evento="/ticket"
          />
        ))}
        <div className="object-center text-center col-span-12 mt-10 mb-3">
          <button
            className="bg-roxo-wil h-[36px] w-[230px] text-white font-sans text-sm font-semibold text-center object-center rounded-full shadow-md shadow-black/40"
            onClick={loadMore}
            disabled={isButtonDisabled}
            >
            MAIS EVENTOS
          </button>
        </div>
      </div>
    </div>
  );
}