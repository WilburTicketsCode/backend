'use client'
import { Button } from '@material-tailwind/react';
import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react';



export default function Home() {
  return (
    <div className='flex'>
      <ul className='flex flex-col justify-center items-center'>
        <Link href="/creditcard" >Cartão de Credito</Link>
        <Link href="/profile/customer"><Button>Perfil</Button></Link>
        <Link href="/event-details">evento</Link>
        <Link href="/home">Página inicial</Link>
        <Link href="/admin">Administrador</Link>
      </ul>
    </div>
  )
}
