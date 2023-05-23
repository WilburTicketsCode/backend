"use client"
import SubmitButton from "../../../components/SinginButton";
import React, { useState } from "react"

export default function testes() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [superAdm, setSuperAdm] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function teste() {
    const res = await fetch("http://localhost:3000/api/cliente")
    const data = await res.json()
    data.map((as: any) => {console.log(as)})
    
  }

  async function createUser() {
    console.log(superAdm)
    const res = await fetch("http://localhost:3000/api/administrador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpf: cpf,
        super_adm: true,
        usuario: {
          nome: nome,
          email: email,
          senha: password
        }

      })
    })
    if (res.ok){
      const user = await res.json()
      console.log(user)
    }
  };

  return (

    <div className="pt-[110px] pb-5 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200">
      <div className="flex flex-col lg:flex-row-reverse lg:gap-3 lg:justify-center lg:items-start items-center w-[98vw] min-h-[8rem] m-10">
        <div className="mt-3">
          <div>
            <h1>Create User</h1>
            <div>
              <label>Nome:</label>
              <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />
            </div>
            <div>
              <label>CPF:</label>
              <input type="text" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
            </div>
            <div>
              <label>Super ADM:</label>
              <input type="text" value={superAdm} onChange={(e) => { setSuperAdm(e.target.value) }} />
            </div>
            <div>
              <label>Email:</label>
              <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
              <label>Senha:</label>
              <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button onClick={teste} className="bg-[#ffffff] text-red-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Create User</button>
          </div>
        </div>
      </div>
    </div>
  );
};