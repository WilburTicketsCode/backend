'use client'

import TelaListAdm from "@/components/Admin/ListAdmin"
import React, { useEffect, useState } from 'react';

interface Adm {
  id: number;
  nome: String;
  email: String
  cpf: String;
  senha: String;
}

export default function Adm() {

   //Consulta a API
    const [admins, setAdmins] = useState<Adm[]>([]);
    
    const fetchAdmins = async () => {
        const reponse = await fetch("http://localhost:3000/api/administrador");
        const  data = await reponse.json();
        console.log(data);
        setAdmins(data);
    }

    useEffect(() => {
        fetchAdmins();
    }, []);
    
    //Fim Consulta a API

    return (
      <section className='m-0 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200 h-screen w-screen'>
        <div>
          <TelaListAdm admsBD={admins}/>
        </div>
      </section>
    )
  }