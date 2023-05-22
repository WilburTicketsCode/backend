"use client"
import React from "react"
import { signIn, signOut, useSession } from "next-auth/react"

const SinginButton = () => {
    const {data: session} = useSession()
    if (session && session.user){
        return (
        <div className="flex gap-4 ml--auto">
            <p className="text-sky-600">{session.user.name}</p>
            <button onClick={() => signOut()} className="bg-[#ffffff] text-red-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">
                Sair
            </button>
        </div>
        )
    }
    return (
        <button onClick={() => signIn()}>
        Entrar
        </button>
    )
}

export default SinginButton