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
import SingInButton from '@/components/SingInButton';




const costumer = () => {
    return (
        <div className="lg:px-[20rem]  flex flex-row items-center justify-between gap-3 md:gap-1">
            <Logo />
            <Search />
            <div>
                <div className='gap-1 md:gap-5 flex flex-row justify-center items-center'>
                    <div>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            className="ml-0 mr-2">
                            <ShoppingCartIcon className="h-8 w-8" />
                        </IconButton>
                    </div>
                    <ProfileMenu />
                </div>
            </div>
        </div>
    )
}

const promoter = () => {
    return (
        <div className="lg:px-[20rem]  flex flex-row items-center justify-between gap-3 md:gap-1">
            <Logo />
            <div>
                <div className='gap-1 md:gap-5 flex flex-row justify-between items-center md:pr-96 '>
                <button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Meus eventos</button>
                <button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Criar evento</button>
                </div>
            </div>
        </div>
    )
}

const noLogin = () => {
    return (
        <div className=" flex flex-row items-center justify-between gap-3 md:gap-1">
            <Logo />
            <Search />
            <div className='flex flex-col md:flex-row gap-1 md:gap-6'>
                <Link href={'/loginpromoter'} className='flex items-center justify-center'> <button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Entrar Promoter</button> </Link>
                <Link href={''} className='flex items-center justify-center'> <button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Cadastrar Promoter</button> </Link>
                <Link href={''} className='flex items-center justify-center'><button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Cadastrar</button> </Link>
                <Link href={'/logincostumer'} className='flex items-center justify-center'><button className="bg-[#ffffff] text-light-blue-900 text-lg hover:bg-blue-gray-300 px-4 py-2 rounded-md">Entrar</button> </Link>
                <SingInButton />
            </div>
        </div>
    )
}

const adm = () => {
    return (
        <div className="lg:px-[20rem]  flex flex-row items-center justify-between gap-3 md:gap-1">
            <Logo />
            <NavList />
            <div className='gap-1 md:gap-5 flex flex-row justify-center items-center'>
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

export default function Select({navbarType}: Props) {
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

