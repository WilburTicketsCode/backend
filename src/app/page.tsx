import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex'>
      <ul className='flex flex-col justify-center items-center'>
        <Link href="/creditcard" >Cartão de Credito</Link>
        <Link href="/profile/customer">Perfil do cliente</Link>
        <Link href="/event-details">evento</Link>
        <Link href="/home">Página inicial</Link>
      </ul>
    </div>
  )
}
