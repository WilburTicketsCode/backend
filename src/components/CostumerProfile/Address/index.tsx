import React, { useState } from "react";
import { Input,Button } from "../../ClientSide";
import Link from "next/link";

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
        <div className="flex justify-center items-center md:min-h-[50rem] ">
            <div className="w-full h-full gap-1 flex flex-col justify-center items-center overflow-auto bg-white">
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
                    <Link href='/profile/editaddress'><Button> Editar </Button></Link>
                </div>
            </div>
        </div>
    );
}