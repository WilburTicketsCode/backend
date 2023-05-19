
import { Button } from '../components/ClientSide';
import '../styles/globals.css'
import Link from 'next/link';
import React from 'react';



export default function Home() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <ul className='flex flex-col justify-center items-center'>
        <Link href="/profile/costumer"><Button>Perfil</Button></Link>
        <Link href="/event-details">evento</Link>
        <Link href="/home">Página inicial</Link>
        <Link href="/admin">Administrador</Link> 
        <Link href="/eventosPromoter">Eventos Promoter</Link>
        <Link href="/admin/eventos">Administrador Eventos</Link> 
        <Link href="/finalizacaoCompra">Finalizacao Compra</Link>
      </ul>
    </div>
  )
}
