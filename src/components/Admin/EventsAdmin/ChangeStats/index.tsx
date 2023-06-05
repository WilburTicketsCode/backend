import { useState } from "react";
import { edicaoEvento, getEvento } from "../../../../../lib/evento";

const EditarStatusEv = {
    tipo: 'trocar status',
    novoDado: 'suspenso',
    idDoEvento: 1
  }


export async function editarStatusEvento(EventoID: any){

    const troca: any = getEvento(EventoID)
    if (troca.status === 'suspenso'){
        edicaoEvento('trocar status', 'ativo', EventoID)
    }else if (troca.status === 'ativo'){
        edicaoEvento('trocar status', 'suspenso', EventoID)
    }

    }
    
    