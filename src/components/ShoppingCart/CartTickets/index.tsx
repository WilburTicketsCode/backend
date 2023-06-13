"use client"

import {  useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@/components/ClientSide";
import Sector from "@/components/ShoppingCart/Sectors"
 
function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div>
      <Accordion className="p-1" open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className="bg-gray-400 rounded-t-lg">
              <div className= "my-auto">

              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                  alt="img1"
                  className="h-[90px] min-w-[140px] m-2 rounded-md" />

              </div>

              <div className="pt-3 pl-2 w-full">
                  <h1 className="text-[12px] text-center font-bold">Djavan Turnê D 2023 - 02/04</h1>
                  <h1 className="text-[10px] text-center pl-1 mt-[30px] font-bold">Valor total:</h1>
                  <h1 className="text-[12px] text-center pl-1">R$2700,00</h1>
              </div>
          </AccordionHeader>
          <AccordionBody className="bg-gray-300">
            <Sector nomeSetor="Backstage"></Sector>
            <Sector nomeSetor="Camarote"></Sector>
            <Sector nomeSetor="Área Vip"></Sector>
            <p className="text-right pr-1 text-[#404C76] font-bold text-[14px]">Valor Total: R$2700,00</p>
            
          </AccordionBody>
      </Accordion>
    </div>
  );
}

/*export default function CartTickets(){
    return(
        <div className="bg-[#E7E7E7] w-[340px] h-[140px] rounded-lg flex flex-row p-3">
            <div className= "my-auto">

            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                 alt="img1"
                 className="h-[90px] min-w-[140px]" />

            </div>

            <div className="pt-3 pl-2 w-full">
                <h1 className="text-[12px] text-center font-bold">Djavan Turnê D 2023 - 02/04</h1>
                <h1 className="text-[10px] text-center pl-1 mt-[30px] font-bold">Valor total:</h1>
                <h1 className="text-[12px] text-center pl-1">R$1800,00</h1>
            </div>
        </div>
    )
}*/