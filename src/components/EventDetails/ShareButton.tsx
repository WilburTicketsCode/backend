'use client'
import { Button } from '@/components/ClientSide';
import React from 'react';
import { MdOutlineShare } from 'react-icons/md';

export default function ShareButton(props: any) {

    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        console.log('link copiado')
    }

    return (
        <>
            <Button size="md" className="bg-roxo-wil flex items-center gap-3 rounded-full" onClick={copyLink}>
                <MdOutlineShare size={'1rem'}/>
                Compartilhar
            </Button>
        </>
    )
}
