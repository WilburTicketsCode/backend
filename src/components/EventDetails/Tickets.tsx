'use client'
import { useState} from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext"

interface Itickets {
    idLotacao: number,
    qtd: number
}

let tickets : Itickets[] = [];

export default function Tickets(props: any) {
    const {getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity} = useShoppingCart();
    
    let quantidade = getItemQuantity(props.idLotacao);

    const [qtd, setQtd] = useState(0);

    const handleDec = () => {
        if (qtd > 0) {
            setQtd(qtd - 1);
        }
    }

    const handleInc = () => {
        if (qtd < props.qtdIngressos){ // só pode comprar ate a quantidade disponivel na lotação
            setQtd(qtd + 1);
            addTicket();
        }
    }

    const addTicket = () => {
        const ticket = {
            idLotacao: props.idLotacao,
            qtd
        }

        const found = tickets.find(el => el.idLotacao === ticket.idLotacao);

        if (!found) { // so adiciona o ingresso se não existir no array, se sim so incrementa a quantidade
            tickets.push(ticket)
        } else {
            found.qtd++;
        }
    }

    const removeTicket = () => {

    }


    return (
        <div className="mb-8 bg-gray-100 rounded-md p-4">
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-4 sm:grid text-sm text-center">
                <h4 className="font-bold">{props.setor}</h4>
                <h4 className="text-deep-purple-400 font-bold">{props.perfil}</h4>
                <h4 className="font-bold">{props.valor?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
                <div className="justify-evenly flex">
                    <button className="border-2 border-roxo-wil rounded-lg px-1 font-bold" onClick={() => decreaseCartQuantity(props.idLotacao)}> - </button> 
                    <p>{quantidade}</p>
                    <button className="border-2 border-roxo-wil rounded-lg px-1 font-bold" onClick={() => increaseCartQuantity(props.idLotacao)}> + </button>
                </div>
            </div>
        </div>
    )
}