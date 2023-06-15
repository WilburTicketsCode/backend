'use client'
import { Input, Card, Button, Typography, } from "@/components/ClientSide";
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React, { useState } from 'react';
import { Alert } from "@material-tailwind/react";

type adminFormData = z.infer<typeof adminNSchema>;

const adminNSchema = z.object({
    name: z.string().min(3, { message: 'Nome deve conter no mínimo 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    cpf: z.string().min(8, { message: 'CPF deve conter no mínimo 8 caracteres' }),
    password: z.string().min(8, { message: 'Senha deve conter no mínimo 8 caracteres' }),
    passwordConfirm: z.string().min(8, { message: 'Senha deve conter no mínimo 8 caracteres' }),

}).refine((data) => data.password === data.passwordConfirm, {
    message: "Senhas diferentes",
    path: ["passwordConfirm"],
});

export default function TelaNewAdm() {

    const [openAlert, setOpenAlert] = useState(false);

    const buttonAction = () => {
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false);
        }, 3000);
    }

    const { register, handleSubmit, formState: { errors } } = useForm<adminFormData>({
        resolver: zodResolver(adminNSchema),
        criteriaMode: 'all',
        mode: 'all',

    });

    const [user, setUser] = useState({
        name: '',
        email: '',
        cpf: '',
        password: '',
        passwordConfirm: '',
    });

    const cleanInfoAdm = () => {
        setUser({
            name: '',
            email: '',
            cpf: '',
            password: '',
            passwordConfirm: '',
        })
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Enviar dados do formulário para a API
        fetch('https://backend-wilbortick.vercel.app/api/administrador', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adminNSchema),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Dados salvos com sucesso!');
                } else {
                    console.error('Erro ao salvar os dados!');
                }
            })
            .catch((error) => {
                console.error('Erro ao enviar os dados:', error);
            });
    }

    return (
        <section className='bg-gray-200 flex flex-col items-center justify-center gap-y-10 p-20 rounded-xl w-auto h-auto'>

            <Card color="transparent" shadow={false} className="flex items-center justify-center">
                <Typography variant="h4" color="blue-gray">
                    Cadastrar Novo Administrador
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Informe os dados do administrador
                </Typography>

                {/**Formulário começa aqui */}
                <form onSubmit={onSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="min-w-fit mb-4 flex flex-col gap-6">
                        <Input {...register('name')} size='md' label="Nome Completo" value={user.name} />
                        {errors.name?.message && <p className="text-red-500 text-xs">{errors.name?.message}</p>}

                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input {...register('email')} size='md' label="Email" value={user.email} />
                            {errors.email?.message && <p className="text-red-500 text-xs">{errors.email?.message}</p>}

                            <Input {...register('cpf')} size='md' label="CPF" value={user.cpf} />
                            {errors.cpf?.message && <p className="text-red-500 text-xs">{errors.cpf?.message}</p>}
                        </div>

                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input {...register('password')} type="password" size='md' label="Senha" value={user.password} />
                            {errors.password?.message && <p className="text-red-500 text-xs">{errors.password?.message}</p>}

                            <Input {...register('passwordConfirm')} type="password" size='md' label="Confirme a senha" value={user.passwordConfirm} />
                            {errors.passwordConfirm?.message && <p className="text-red-500 text-xs">{errors.passwordConfirm?.message}</p>}
                        </div>
                        <Button onClick={() => {cleanInfoAdm(); handleSubmit; buttonAction}} type='submit' size='md' className="mt-20" fullWidth>
                            Cadastrar
                        </Button>
                    </div>

                    <Link href="/administrador/admin-list">
                        <p className="flex items-center justify-center">
                            Ver todos os administradores
                        </p>
                    </Link>
                </form>
            </Card>

            <Alert
                open={openAlert}
                color="green"
                className="max-w-fit absolute bottom-5"
                icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            >
                <p className="font-normal">
                    Administrador Cadastrado
                </p>
            </Alert>

        </section>
    )
}