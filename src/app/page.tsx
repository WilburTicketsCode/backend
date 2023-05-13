
import { Button } from '../components/ClientSide';
import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react';



export default function Home() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <ul className='flex flex-col justify-center items-center'>
        <Link href="/creditcard" >Cartão de Credito</Link>
        <Link href="/profile/custumer"><Button>Perfil</Button></Link>
        <Link href="/event-details">evento</Link>
        <Link href="/home">Página inicial</Link>
        <Link href="/admin">Administrador</Link>
      </ul>
    </div>
  )
}
