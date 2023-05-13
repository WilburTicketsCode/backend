'use client'

import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation'


const Logo = () => {
    const router = useRouter();
    
    return(
        <Image
            alt='Logo'
            className='hidden md:block cursor-pointer'
            height='130'
            width='130'
            src='/icons/logo.svg'
        />
    )
}

export default Logo;