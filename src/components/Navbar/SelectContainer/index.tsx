'use client'
import Search from '../../Search';
import Logo from '../Logo'
import ProfileMenu from '../ProfileMenu';
import { useState } from 'react';
import NavList from '../Adm/NavListADM'




const costumer = () => {
    return (
        <div className="lg:px-[20rem]  flex flex-row items-center justify-between gap-3 md:gap-1">
            <Logo />
            <Search />
            <div><ProfileMenu /></div>
        </div>
    )
}

const noLogin = () => {
    return (
        <div className="lg:px-[20rem]  flex flex-row items-center justify-between gap-3 md:gap-1">
            <Logo />
            <Search />
            <div className='flex flex-col md:flex-row gap-1 md:gap-6'>
                <button className="bg-[#7245a5] text-white px-4 py-2 rounded-md">Seja nosso Promoter</button>
                <button className="bg-[#2c3dcf] text-white px-4 py-2 rounded-md">Entrar</button>
                <button className="bg-[#2c3dcf] text-white px-4 py-2 rounded-md">Cadastrar</button>
            </div>
        </div>
    )
}

const adm = () => {
    return (
        <div className="lg:px-[20rem]  flex flex-row items-center justify-between gap-3 md:gap-1">
            <Logo />
            <NavList/>
            <div><ProfileMenu /></div>
        </div>
    )
}

export default function Select () {
    const [cases, setCases] = useState('costumer')

    return (
        <>
            { cases === 'costumer' && costumer()
            || cases === 'noLogin' && noLogin()
            || cases === 'adm' && adm()}
        </>
    )
}

