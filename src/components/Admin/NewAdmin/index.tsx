import { Input } from "@material-tailwind/react";
import {
    Card,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function TelaNewAdm() {
    return (
        <section className='bg-gray-200 text-blue-900 rounded-xl p-10 m-5 w-auto h-auto flex gap-20 items-center justify-center'>
            
            <Card color="transparent" shadow={false} className="flex items-center justify-center">
                <Typography variant="h4" color="blue-gray">
                    Cadastrar Novo Administrador
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Informe os dados do administrador
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="min-w-fit mb-4 flex flex-col gap-6">
                        <Input label="Nome Completo" />

                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input label="Email" />
                            <Input label="CPF" />
                        </div>

                        <div className="flex flex-col gap-6 md:flex-row">
                            <Input label="Senha" />
                            <Input label="Confirme a senha" />
                        </div>
                    </div>

                    <Button className="mt-20" fullWidth>
                        Cadastrar
                    </Button>

                    <a href="/admin-list" className="">Ver todos os administradores</a>
                </form>
            </Card>

        </section>
    )
}