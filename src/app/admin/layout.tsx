import React from 'react'
import Navbar from '@/components/Navbar/Navbar'


export default function AdmLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let typeNavbar = 'adm'    //Indica o tipo de navbar da página
  
  return (
    <main className="block">
        <div className="flex h-[80px] items-center justify-center"> {/*flex h-[80px]*/}
            <Navbar  navbarType={typeNavbar}/>
        </div>
        {children}
    </main>
  )
}
