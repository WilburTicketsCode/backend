'use client'
import { useState } from "react";

export default function Tickets(props: any) {
    const [qtd, setQtd] = useState(0);

    const handleDec = () => {
        if (qtd > 0) {
            setQtd(qtd - 1);
        }
    }

    const handleInc = () => {
        if (qtd < props.qtdIngressos){ // só pode comprar ate a quantidade disponivel na lotação
            setQtd(qtd + 1);
        }
    }


    return (
        <div className="mb-8 bg-gray-100 rounded-md p-4">
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-4 sm:grid text-sm text-center">
                <h4 className="font-bold">{props.setor}</h4>
                <h4 className="text-deep-purple-400 font-bold">{props.perfil}</h4>
                <h4 className="font-bold">{props.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
                <div className="justify-evenly flex">
                    <button className="border-2 border-roxo-wil rounded-lg px-1 font-bold" onClick={handleDec}> - </button> 
                    <p>{qtd}</p>
                    <button className="border-2 border-roxo-wil rounded-lg px-1 font-bold" onClick={handleInc}> + </button>
                </div>
            </div>
        </div>
    )
}