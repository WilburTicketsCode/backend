import {Card, Button, Typography,} from "@/components/ClientSide";
import Link from 'next/link';

interface Adm {
    id: number;
    nome: String;
    email: String
    cpf: String;
    senha: String;
  }

interface ListProps {
    admsBD: Adm[];
  }

  //Forma de exibir tirando os dados da API (Não vai ser utilizado agora)
/**{props.admsBD.map((admin) => (
    <ul className="bg-gray-300 mt-10 mr-5 flex flex-col gap-6">
        <li key={admin.id} className="font-semibold">{admin.nome}</li>
        <li key={admin.id}>Email: {admin.email}</li>
        <li key={admin.id}>CPF: {admin.cpf}</li>
        <li key={admin.id}>Senha: {admin.senha}</li>
    </ul>
    ))}*/

export default function TelaListAdm(props: ListProps) {

    return (
        <section className='bg-gray-200 text-blue-900 rounded-xl p-10 m-5 w-auto h-auto flex flex-col gap-20'>
            
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Administradores:
                </Typography>

                    <ul className="bg-gray-300 mt-10 mr-5 flex flex-col gap-6">
                        <li className="font-semibold">Maria Gabriela Fernandes</li>
                        <li>Email: mgfernandes@wiltickets.org</li>
                        <li>CPF: 030.321.538-20</li>
                        <li>Senha: admin321</li>
                    </ul>

                    <ul className="bg-gray-300 mt-10 mr-5 flex flex-col gap-6">
                        <li className="font-semibold">João Almeida da Silva</li>
                        <li>Email: jadsilva@wiltickets.org</li>
                        <li>CPF: 045.123.764-90</li>
                        <li>Senha: novoAdmin321</li>
                    </ul>
            </Card>

            <Link href="/admin">
                <Button className="mt-20" fullWidth>
                    Cadastrar Novo Administrador
                </Button>
            </Link>

        </section>
    )
}