'use client'
import React from "react";
import { Input, Button } from "../ClientSide";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


type CreatePasswordFormData = z.infer<typeof createPasswordSchema>;

const createPasswordSchema = z.object({
    currentPassword: z.string().min(8, { message: 'Senha deve conter no minimo 8 caracteres' }),
    newPassword: z.string().min(8, { message: 'Senha deve conter no minimo 8 caracteres' }),
    reNewPassword: z.string().min(8, { message: 'Senha deve conter no minimo 8 caracteres' }),

}).refine((data) => data.newPassword === data.reNewPassword, {
    message: "Senhas não conferem",
    path: ["reNewPassword"],
});

export default function Password() {

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePasswordFormData>({
        resolver: zodResolver(createPasswordSchema),
    });

    const onSubmit = (data: any) => console.log(data);

    return (

        <div className="flex flex-col w-[90%] md:w-[40%] h-[80%] md:h-[80%] items-center justify-center gap-y-10 bg-white p-20 rounded-xl" >
            <h2 className="text-2xl font-bold text-center">Alterar Senha</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4">
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Senha Atual" {...register('currentPassword')}></Input>
                {errors.currentPassword && <p className="text-red-500 text-xs">{errors.currentPassword.message}</p>}
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Nova Senha" {...register('newPassword')}></Input>
                {errors.newPassword && <p className="text-red-500 text-xs">{errors.newPassword.message}</p>}
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Confirmar Nova Senha" {...register('reNewPassword')}></Input>
                {errors.reNewPassword && <p className="text-red-500 text-xs">{errors.reNewPassword.message}</p>}
                <div className="flex flex-row gap-4">
                    <Button className='bg-red-900' type="reset">Cancelar</Button>
                    <Button type="submit">Salvar</Button>

                </div>
            </form>

        </div>

    )
}
