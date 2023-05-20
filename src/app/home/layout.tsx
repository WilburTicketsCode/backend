import React from 'react'
import Navbar from '@/components/Navbar/Navbar'


export default function CostumerLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let typeNavbar = 'noLogin'    //Indica o tipo de navbar da página
  
  return (
    <main className="block">
        <div className="items-center justify-center">
            <Navbar  navbarType={typeNavbar}/>
        </div>
        {children}
        
    </main>
  )
}
