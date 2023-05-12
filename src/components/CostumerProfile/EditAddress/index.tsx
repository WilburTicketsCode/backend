'use client'
import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {
    Input,
    Button,
    Dialog,
    Card,

} from "../../ClientSide";

type addressFormData = z.infer<typeof addressSchema>;

const addressSchema = z.object({
    cep: z.string().min(9, {message: 'Preencha o CEP corretamente'}),
    state: z.string().min(1, {message: 'Peencha o estado corretamente'}),
    city: z.string().min(1, {message: 'Preencha a cidade corretamente'}),
    neighborhood: z.string().min(1, {message: 'Preencha o Bairro corretamente'}),
    street: z.string().min(1, {message: 'Preencha a rua corretamente'}),
    number: z.string().min(1, {message: 'Preencha a rua corretamente'}),
    complement: z.string(),
})


export default function EditAddress() {
    const [open, setOpen] = React.useState(false);
    const [address, setAddress] = React.useState({
        cep: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: '',
        complement: '',
    });
    const handleOpen = () => setOpen((cur) => !cur);
    const {register,handleSubmit,formState:{errors}} = useForm<addressFormData>({
        resolver: zodResolver(addressSchema),
        criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            cep: '',
            state: '',
            city: '',
            neighborhood: '',
            street: '',
            number: '',
            complement: '',
        },

    });

    const onSubmit = (data: addressFormData) => {
        console.log(data);
    }


    return (
        <React.Fragment>

            <Button onClick={() => { handleOpen();}}>Editar</Button>
            <Dialog
                size='xl'
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="flex justify-center items-center mx-auto w-full  h-[90vh]" >
                        <div className="w-full h-full gap-6 flex flex-col justify-center items-center overflow-auto">
                            <h2 className="text-2xl font-bold text-center">Editar Endereço</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 overflow-auto">
                                <Input {...register('cep')} className='w-[15rem] sm:w-[20rem] lg:w-[30rem]' label='CEP*'></Input>
                                {errors.cep?.message && <p className="text-red-500">{errors.cep?.message}</p>}
                                <Input {...register('state')} className='w-[15rem] sm:w-[20rem] lg:w-[30rem]' label='Estado*'/>
                                {errors.state?.message && <p className="text-red-500">{errors.state?.message}</p>}
                                <Input {...register('city')} className='w-[15rem] sm:w-[20rem] lg:w-[30rem]' label='Cidade*'/>
                                {errors.city?.message && <p className="text-red-500">{errors.city?.message}</p>}
                                <Input {...register('neighborhood')} className='w-[15rem] sm:w-[20rem] lg:w-[30rem]' label='Bairro*'/>
                                {errors.neighborhood?.message && <p className="text-red-500">{errors.neighborhood?.message}</p>}
                                <Input {...register('street')} className='w-[15rem] sm:w-[20rem] lg:w-[30rem]' label='Rua*'/>
                                {errors.street?.message && <p className="text-red-500">{errors.street?.message}</p>}
                                <Input {...register('number')} className='w-[15rem] sm:w-[20rem] lg:w-[30rem]' label='Número*'/>
                                {errors.number?.message && <p className="text-red-500">{errors.number?.message}</p>}
                                <Input {...register('complement')} className='w-[15rem] sm:w-[20rem] lg:w-[30rem]' label='Complemento'/>
                                <Button size='md'>Salvar</Button>
                            </form>
                        </div>
                </Card>

            </Dialog>

        </React.Fragment>
    )
}