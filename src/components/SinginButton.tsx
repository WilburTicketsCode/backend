"use client"
import React from "react"
import { signIn } from "next-auth/react"

const SinginButton = () => {
    return (
        <button onClick={() => signIn()} className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Entrar</button>
                
    )
}

export default SinginButton