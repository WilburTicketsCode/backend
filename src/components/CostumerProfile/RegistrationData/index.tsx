import React from "react";
import { Card, Button, Typography, Avatar } from "@material-tailwind/react";
import { CiCreditCardOff } from "react-icons/ci";
import Payment from "@/components/creditcard/ButtonPayment";



export default function RegistrationData() {

    const [useData, setUseData] = React.useState({
        name: "João da Silva",
        cpf: "123.***.***-10",
        email: "Joãozinho69@gmail.com",
        date: "10/10/2021",
        fone: "(11) 99999-9999",

    });

    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-4">
            <Card>
                <div className="h-[70vh] w-[85vw] sm:h-[60vh] sm:w-[50vw] md:w-[60vw] flex flex-col items-center justify-center gap-20">
                <Avatar className="cursor-pointer" src="/img/profile/placeholder.jpg" alt="avatar" size="xxl" />
                <div className="flex flex-col gap-1">
                    <Typography className="text-base font-semibold text-center sm:text-lg">Nome: {useData.name}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">CPF: {useData.cpf}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">Email: {useData.email}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">Data de Nasc.: {useData.date}</Typography>
                    <Typography className="text-base font-semibold text-center sm:text-lg">Telefone: {useData.fone}</Typography>
                </div>
                </div>
            </Card>
        </div>
    )
}