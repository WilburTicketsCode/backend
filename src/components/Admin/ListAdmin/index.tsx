'use client'
import { Card, Button, Typography, } from "@/components/ClientSide";
import { useState, useEffect } from "react";
import Link from 'next/link';

interface Adm {
    id: number;
    cpf: String; 
    usuario: {
        nome: String;
        email: String
        senha: String;
    } 
}

//Forma de exibir tirando os dados da API (Não vai ser utilizado agora)

export default function TelaListAdm() {

    //Consulta a API
    const [admins, setAdmins] = useState<Adm[]>([]);
 
    const fetchAdmins = async () => {
        const reponse = await fetch("/api/administrador");
        const  data = await reponse.json();
        setAdmins(data);
    }
 
    useEffect(() => {
        fetchAdmins();
    }, []);

    //Fim Consulta a API

    /*const fakeApi = [{
        name: "Maria Gabriela Fernandes",
        email: "mgfernandes@wiltickets.org",
        CPF: "030.321.538-20",
    },
    {
        name: "João Almeida da Silva",
        email: "jadsilva@wiltickets.org",
        CPF: "045.123.764-90",
    }]*/

return (
    <div className='flex flex-col gap-20 bg-gray-200 text-blue-900 rounded-xl p-15 m-5 w-auto h-auto m-10'>

        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Administradores:
            </Typography>
            
            {admins.map((admin) => (
                <ul className="bg-gray-300 mt-10 mr-5 p-5 rounded-xl flex flex-col gap-6">
                    <li key={admin.id} className="font-semibold">{admin.usuario.nome}</li>
                    <li key={admin.id}>Email: {admin.usuario.nome}</li>
                    <li key={admin.id}>CPF: {admin.cpf}</li>
                    <li key={admin.id}>Senha: {admin.usuario.senha}</li>
                </ul>
            ))}
        </Card>

        <Link href="/administrador/admin-new">
            <Button className="mt-20" fullWidth>
                Cadastrar Novo Administrador
            </Button>
        </Link>

    </div>
)
}