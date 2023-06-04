"use client"
import React, { useState } from "react"
import { edicaoClienteTipo } from "../../../../lib/cliente";
import { edicaoEventoTipo } from "../../../../lib/evento";
import { edicaoUsuarioTipo } from "../../../../lib/usuario";

export default function testes() {

  const exemploJsonAlterarSenha: edicaoUsuarioTipo = {
    tipo: 'trocar senha',
    novoDado: 'eunaoseitrocarsenha',
    emailDoUsuario: 'luanzito@gmaiil.com'
  }

  const exemploJsonEditarStatus: edicaoEventoTipo = {
    tipo: 'trocar status',
    novoDado: 'suspenso',
    idDoEvento: 1
  }

  async function editarSenha(){
    const jaison = JSON.stringify({
      tipo: exemploJsonAlterarSenha.tipo,
      novoDado: exemploJsonAlterarSenha.novoDado,
      emailDoUsuario: exemploJsonAlterarSenha.emailDoUsuario
    })

    console.log("Exemplo de como o JSON para edição de senha de um Cliente deve ser feito:\n" +
    jaison)

    const res = await fetch("/api/usuario", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: jaison
    })

    if (res.ok) {
      const data = await res.json()
      setJsonPraTela(JSON.stringify(data)) 
      console.log(data)
    } else {
      setJsonPraTela("DEU BO")
    }

  }

  async function editarStatusEvento(){
    const jaison = JSON.stringify({
      tipo: exemploJsonEditarStatus.tipo,
      novoDado: exemploJsonEditarStatus.novoDado,
      idDoEvento: exemploJsonEditarStatus.idDoEvento
    })

    console.log("Exemplo de como o JSON para edição staus de um Evento deve ser feito:\n" +
    jaison)

    const res = await fetch("/api/evento", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: jaison
    })

    if (res.ok) {
      const data = await res.json()
      setJsonPraTela(JSON.stringify(data)) 
      console.log("AQUII:", res)
    } else {
      setJsonPraTela("DEU BO")
    }

  }

  const [jsonPraTela, setJsonPraTela] = useState('LOCAL ONDE O JSON CRIADO SERA EXIBIDO PARA SERVIR DE EXEMPLO')

  return (
    <div className="pt-[100px] pb-5 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200 ">
      <div className="flex flex-col lg:flex-row-reverse lg:gap-3 lg:justify-center lg:items-start items-center w-[98vw] min-h-[8rem] m-10">

        <div>
          <button onClick={editarSenha} className="bg-[#ffffff] text-black-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Alterar senha</button>
        </div>
        <div>
          <button onClick={editarStatusEvento} className="bg-[#ffffff] text-black-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Editar Status Evento</button>
        </div>


      </div>
      <div className="bg-[#ffffff] flex flex-col lg:flex-row-reverse lg:gap-3 lg:justify-center lg:items-start items-center w-[98vw] min-h-[8rem] m-10">
        <div>
          <p>{jsonPraTela}</p>
        </div>
      </div>
    </div>
  );
};