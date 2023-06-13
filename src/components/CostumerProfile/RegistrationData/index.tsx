import React from "react";
import { Card, Button, Typography, Avatar } from "../../ClientSide";



export default function RegistrationData() {

    const [useData, setUseData] = React.useState({
        name: "João da Silva",
        cpf: "123.***.***-10",
        email: "Joãozinho69@gmail.com",
        date: "10/10/2021",
        fone: "(11) 99999-9999",

    });

    return (
        <div className="flex flex-col w-full  items-center justify-center md:min-h-[50rem] gap-4 ">
            <div className="bg-white flex flex-col w-[100%] md:w-[50%] h-[30rem]  items-center justify-center gap-4 overflow-auto rounded-lg">
                <Avatar className="cursor-pointer" src="/img/profile/placeholder.jpg" alt="avatar" size="xxl" />
                <div className="flex flex-col gap-1">
                    <Typography className="text-base font-semibold text-center sm:text-lg">Nome: {useData.name}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">CPF: {useData.cpf}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">Email: {useData.email}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">Data de Nasc.: {useData.date}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">Telefone: {useData.fone}</Typography>
                </div>
            </div>
        </div>
    )
}