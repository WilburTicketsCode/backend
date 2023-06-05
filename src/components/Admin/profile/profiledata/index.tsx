import { Avatar, Typography } from "../../../ClientSide";
import React from "react";


type Props = {
    cType: any
}
export default function AdminData({ cType }: Props) {


return (
    <div className="pt-2 bg-white flex flex-col items-center justify-center gap-4 overflow-auto rounded-lg">
        <Avatar className="cursor-pointer" src="/img/profile/placeholder.jpg" alt="avatar" size="xxl" />
        <div className="flex flex-col gap-1">
            <Typography className="text-base font-semibold text-center sm:text-lg">Nome: {cType?.usuario?.nome}</Typography>
            <Typography className="text-base font-semibold text-center sm:text-lg">CPF: {cType?.cpf.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1.***.***-$4")}</Typography>
            <Typography className="text-base font-semibold text-center sm:text-lg">Email: {cType?.usuario?.email}</Typography>
        </div>
    </div>
  )
}