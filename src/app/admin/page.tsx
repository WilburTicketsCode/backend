

import NavBarAdm from "@/components/Navbar/Adm"
import TelaNewAdm from "@/components/Admin/NewAdmin"

export default function Adm() {
    return (
      <section className='m-0 bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-200 h-screen w-screen'>
        <div>
          <NavBarAdm />
          <TelaNewAdm />
        </div>
      </section>
    )
  }