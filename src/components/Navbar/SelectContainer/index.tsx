'use client'
import Search from '../Search';
import Logo from '../Logo'
import ProfileMenu from '../ProfileMenu';
import { useState } from 'react';
import NavList from '../Adm/NavListADM'
import { IconButton } from '../../ClientSide';
import { BellIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import ProfileMenuADM from '../Adm/ProfileMenuADM';
import Link from 'next/link';
import NoLoginMenu from '../NoLoginMenu';
import { signIn } from 'next-auth/react';



const costumer = () => {
    return (
        <div className="2xl:px-[3rem]  flex flex-row items-center justify-between gap-3 md:gap-1">
            <Link href={'/'} className='flex items-center justify-center'><Logo /></Link>
            <Search />
            <div>
                <div className='gap-0.5 md:gap-5 flex flex-row justify-center items-center'>
                    <div>
                        <Link href={'/shoppingCart'}>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            className="ml-0 mr-2">
                            <ShoppingCartIcon className="h-8 w-8" />
                        </IconButton>
                        </Link>
                    </div>
                    <ProfileMenu />
                </div>
            </div>
        </div>
    )
}

const promoter = () => {
    return (
        <div>
            <div className='gap-1 md:gap-5 flex flex-row justify-between items-center md:px-5'>
                <a href='/events/eventosPromoter'><button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Meus eventos</button></a>
                <a href='/events/event-registration'><button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Criar evento</button></a>
                <a href='/profile/promoter'><button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Meu Perfil</button></a>
            </div>
        </div>
    )
}

const noLogin = () => {
    return (
        <div className=" flex flex-row items-center justify-between gap-3 md:gap-1">
            <Link href={'/'}><Logo /></Link>
            <Search />
            <div className='flex flex-col w-full max-w-screen md:flex-row gap-1 md:gap-6'>
                <NoLoginMenu></NoLoginMenu>
                <div className='md:flex items-center justify-center hidden'>
                    <button onClick={() => signIn()} className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Entrar</button>
                </div>
                <Link href={'/promoter-registration'} className='md:flex items-center justify-center hidden'> <button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Cadastrar promoter</button> </Link>
                <Link href={'/customer-registration'} className='md:flex items-center justify-center hidden'><button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Cadastrar cliente</button> </Link>

            </div>
        </div>
    )
}

const adm = () => {
    return (
        <div className="lg:px-[20rem] flex flex-row items-center justify-between gap-0.5 md:gap-1">
            <Link href={'/admin/eventos'}><Logo/></Link> 
            <NavList />
            <div className=' md:gap-5 flex flex-row justify-center items-center'>
                <div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="ml-0 mr-2">
                        <BellIcon className="h-8 w-8" />
                    </IconButton>
                </div>
                <ProfileMenuADM />
            </div>
        </div>
    )
}

type Props = {
    navbarType: string,
}

export default function Select({ navbarType }: Props) {
    const [cases, setCases] = useState(navbarType)

    return (
        <>
            {cases === 'costumer' && costumer()
                || cases === 'noLogin' && noLogin()
                || cases === 'adm' && adm()
                || cases === 'promoter' && promoter()}
        </>
    )
}

