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
                <div className="h-[60vh] w-[40vw] flex flex-col items-center justify-center gap-4">
                <Avatar className="cursor-pointer" src="/img/profile/placeholder.jpg" alt="avatar" size="xxl" />
                <Typography>{useData.name}</Typography>
                <Typography>{useData.cpf}</Typography>
                <Typography>{useData.email}</Typography>
                <Typography>{useData.date}</Typography>
                <Typography>{useData.fone}</Typography>
                </div>
            </Card>
        </div>
    )
}