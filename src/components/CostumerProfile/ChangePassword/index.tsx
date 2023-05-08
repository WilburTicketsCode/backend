import React from "react";
import { Input, Button} from "@material-tailwind/react";


export default function Password() {
    return (

        <div className="flex flex-col w-full h-full items-center justify-center gap-y-10">
            <h2 className="text-2xl">Alterar Senha</h2>
            <form className="flex flex-col items-center justify-center gap-6">
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Senha Atual"></Input>
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Nova Senha"></Input>
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Confirmar Nova Senha"></Input>
                <Button type="submit">Salvar</Button>
            </form>

        </div>

    )
}