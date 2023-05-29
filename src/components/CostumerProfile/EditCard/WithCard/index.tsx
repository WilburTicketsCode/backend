import React from "react";
import {Button} from "../../../ClientSide";
import CardProfile from "@/components/creditcard/CardProfile";
import {useSession} from 'next-auth/react'



type Props = {
    cType: any
}


export default function WithCard({ cType }: Props) {
    const {data: session} = useSession();
    
    async function deleteCartao() {
        const jaison = JSON.stringify({
            cpf: session?.user?.id,
        })
        const res = await fetch("/api/cartao/excluir", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jaison
        })
    
        if (res.ok) {
          const user = await res.json();
          console.log(user)
        }else{
            console.log("Erro")
        }
    
      }
    

    return (
        <div className="flex flex-col w-full items-center md:min-h-[50rem]">
            <div className="w-[17rem] h-[14rem] sm:w-[24rem] sm:h-[18rem] md:w-[30rem] md:h-[24rem]">
                
                <CardProfile  cType={cType}/>
            </div>
            <div className="flex flex-col gap-6">
                <Button onClick={deleteCartao} className="w-[17rem]  sm:w-[24rem]  md:w-[30rem] " color="red">Excluir Cartão</Button>
            </div>
            
        </div>
    )
}
