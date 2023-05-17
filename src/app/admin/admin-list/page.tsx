'use client'

import NavBarAdm from "@/components/Navbar/Adm"
import TelaListAdm from "@/components/Admin/ListAdmin"

export default function Adm() {
    return (
      <section className='m-0 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200 h-screen w-screen'>
        <div>
          <NavBarAdm />
          <TelaListAdm />
        </div>
      </section>
    )
  }