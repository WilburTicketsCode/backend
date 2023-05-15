import {Card, Typography,} from "@/components/ClientSide";

export default function TelaListAdm(props: any) {

    return (
        <section className='bg-gray-200 text-blue-900 rounded-xl p-10 m-5 w-auto h-auto flex gap-20'>
            
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Administradores:
                </Typography>
                <ul className="mt-10 mr-5 flex flex-col gap-6">
                    <li className="bg-gray-300 rounded-xl p-2 w-">
                        <p className="font-bold">Nome do Administrador</p>
                        <div className="grid">
                            <p>Email:{props.email}</p>
                            <p>CPF:{props.cpf}</p>
                            <p>Senha:{props.senha}</p>
                            <p>Administrador desde:{props.data}</p>
                        </div>
                    </li>
                </ul>
            </Card>

        </section>
    )
}