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
});;

export default function Password() {

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePasswordFormData>({
        resolver: zodResolver(createPasswordSchema),
    });

    const onSubmit = (data: any) => console.log(data);

    return (

        <div className="flex flex-col w-full h-full items-center justify-center gap-y-10">
            <h2 className="text-2xl ">Alterar Senha</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4">
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Senha Atual" {...register('currentPassword')}></Input>
                {errors.currentPassword && <span className="text-red-500 text-xs">{errors.currentPassword.message}</span>}
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Nova Senha" {...register('newPassword')}></Input>
                {errors.newPassword && <span className="text-red-500 text-xs">{errors.newPassword.message}</span>}
                <Input className="w-[15rem] sm:w-[20rem] lg:w-[30rem]" type="password" label="Confirmar Nova Senha" {...register('reNewPassword')}></Input>
                {errors.reNewPassword && <span className="text-red-500 text-xs">{errors.reNewPassword.message}</span>}
                <Button type="submit">Salvar</Button>
            </form>

        </div>

    )
}
