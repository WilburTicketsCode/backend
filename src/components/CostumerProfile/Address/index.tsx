import React, { useState } from "react";
import { Input } from "../../ClientSide";
import EditAddress from "@/components/CostumerProfile/EditAddress";

export default function Addrress() {
    const [userAddress, setUserAddress] = useState({
        cep: "44350-000",
        state: "Bahia",
        city: "Gov. Mangabeira",
        neighborhood: "Centro",
        road: "Rua do meio",
        number: "462",
        complement: "Perto do Açai",
    });

    return (
        <div className="h-full flex justify-center items-center w-[98%] ">
            <div className="w-full h-full gap-1 flex flex-col justify-center items-center overflow-auto  pt-6">
                <div className="w-[15rem] sm:w-[20rem] lg:w-[30rem]">
                    <label >CEP*:</label>
                    <Input value={userAddress.cep} disabled ></Input>
                </div>
                <div className="w-[15rem] sm:w-[20rem] lg:w-[30rem]">
                    <label>Estado*:</label>
                    <Input value={userAddress.state} disabled></Input>
                </div>
                <div className="w-[15rem] sm:w-[20rem] lg:w-[30rem]">
                    <label>Cidade*:</label>
                    <Input value={userAddress.city} disabled></Input>
                </div>
                <div className="w-[15rem] sm:w-[20rem] lg:w-[30rem]">
                    <label>Bairro*:</label>
                    <Input value={userAddress.neighborhood} disabled></Input>
                </div>
                <div className="w-[15rem] sm:w-[20rem] lg:w-[30rem]">
                    <label>Rua*:</label>
                    <Input value={userAddress.road} disabled></Input>
                </div>
                <div className="w-[15rem] sm:w-[20rem] lg:w-[30rem]">
                    <label>Número*:</label>
                    <Input value={userAddress.number} disabled></Input>
                </div>
                <div className="w-[15rem] sm:w-[20rem] lg:w-[30rem]">
                    <label>Complemento:</label>
                    <Input value={userAddress.complement} disabled></Input>
                </div>
                <div className="flex items-center justify-center w-[15rem] h-[10rem] sm:w-[20rem] lg:w-[30rem] ">
                    <EditAddress/>
                </div>
            </div>
        </div>
    );
}