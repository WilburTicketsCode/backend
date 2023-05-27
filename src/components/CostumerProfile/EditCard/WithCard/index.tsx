import React from "react";
import {Button} from "../../../ClientSide";
import CardProfile from "@/components/creditcard/CardProfile";


type Props = {
    cType: any
}

export default function WithCard({ cType }: Props) {
    
    return (
        <div className="flex flex-col w-full items-center md:min-h-[50rem]">
            <div className="w-[17rem] h-[14rem] sm:w-[24rem] sm:h-[18rem] md:w-[30rem] md:h-[24rem]">
                
                <CardProfile  cType={cType}/>
            </div>
            <div className="flex flex-col gap-6">
                <Button  className="w-[17rem]  sm:w-[24rem]  md:w-[30rem] " color="red">Excluir Cartão</Button>
            </div>
            
        </div>
    )
}
