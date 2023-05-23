'use client'
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Input,
    Button,
    Typography,

} from "../../ClientSide";
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

type loginFormData = z.infer<typeof loginASchema>;

const loginASchema = z.object({
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(3, { message: 'Senha deve conter no mínimo 8 caracteres' }),
})


export default function LoginAdm() {
    const { register, handleSubmit, formState: { errors } } = useForm<loginFormData>({
        resolver: zodResolver(loginASchema),
        criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            email: '',
            password: '',
        },

    });

    const onSubmit = async (data: loginFormData) => {
        console.log(data);
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: "/"
        })
    }


    return (

        <div className="w-[90%] h-[80%] md:h-[80%] md:w-[60%] lg:h-[70%] xl:h-[70%] xl:w-[40%] gap-4 flex flex-col justify-center items-center bg-white rounded-xl overflow-auto shadow-md hover:shadow-2xl">
            <Typography variant="h2" className="text-[#404c76] mt-6 ml-4">
                Conecte-se ao nosso Site!
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] flex flex-col items-center text-sm justify-center gap-4 overflow-auto p-5">
                <Input {...register('email')} size='lg' label='Email'></Input>
                {errors.email?.message && <p className="text-red-500 text-center">{errors.email?.message}</p>}
                <Input {...register('password')} className='' type='password' label='Senha' />
                {errors.password?.message && <p className="text-red-500 text-center">{errors.password?.message}</p>}
                <a href="#" className="text-blue-500 text-center">Esqueceu sua senha?</a>
                <Button type='submit' size='md'>Entrar</Button>
            </form>
        </div>

    )
}
