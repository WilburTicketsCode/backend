import React from 'react';

import { PayContext } from '../../../contexts/payContext';

import {
    Input,
    Button,
    Dialog,
    Card,

} from "@material-tailwind/react";



export default function EditAddress() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);


    return (
        <React.Fragment>

            <Button onClick={() => { handleOpen() }}>Editar</Button>
            <Dialog
                size='xl'
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="flex justify-center items-center mx-auto w-full  h-[80vh]" >
                        <div className="h-full w-1/4 gap-6 flex flex-col justify-center items-center">
                            <h2 className="text-2xl font-bold text-center">Editar Endereço</h2>

                            <Input label='CEP*'/>

                            <Input label='Estado*'/>

                            <Input label='Cidade*'/>

                            <Input label='Bairro*'/>

                            <Input label='Rua*'/>

                            <Input label='Número*'/>

                            <Input label='Complemento'/>
                            <Button size='md'>Salvar</Button>

                        </div>
                </Card>

            </Dialog>

        </React.Fragment>
    )
}