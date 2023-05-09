import React from "react";
import { Card, Button} from "@material-tailwind/react";
import FlippableCard from "@/components/creditcard/FlippableCard";


export default function WithCard() {
    
    
    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="w-[17rem] h-[14rem] sm:w-[24rem] sm:h-[18rem] md:w-[30rem] md:h-[24rem]">
                <FlippableCard/>
            </div>
            <div className="flex flex-col gap-6">
                <Button  className="w-[17rem]  sm:w-[24rem]  md:w-[30rem] " color="blue">Editar Cartão</Button>
                <Button  className="w-[17rem]  sm:w-[24rem]  md:w-[30rem] " color="red">Excluir Cartão</Button>
            </div>
            

        </div>
    )
}