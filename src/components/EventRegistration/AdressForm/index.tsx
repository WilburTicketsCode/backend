'use client'

import UseStepperContext from "../../../use/UseStepperContext";
import {
  Input,
  Button,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import UseEventRegistrationContext from "../../../use/UseEventRegistrationContext";
import { useSession } from "next-auth/react";
import { setNovaNotificacao, registrarCallbackNotificacao } from '../../Notificacao/notificacao';

function formatCEP(value:string) {
  return value
  .replace(/[^0-9]/g, "")
  .replace(/^([0-9]{5})([0-9]{1,3})$/, "$1-$2")
  }
type AdressFormData = z.infer<typeof AdressFormSchema>;

const AdressFormSchema = z.object({
    CEP: z.string().min(9),
    street: z.string().min(1),
    number: z.string().min(1),
    complement: z.string(),
    district: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
})

export default function AdressForm() {
  //enviar notificação de cadastro para o Adm
  const [novaNotificacao, setNovaNotificacaoLocal] = useState(false);

  useEffect(() => {
    registrarCallbackNotificacao(setNovaNotificacaoLocal);
  }, []);

  const handleNovaNotificacao = () => {
    setNovaNotificacao(true);
  };
  //----------------------------------------

  const {data: session} = useSession();
  const { infoStepper, setInfoStepper } = UseStepperContext();
  const { infoAdressForm, setInfoAdressForm, infoBasicInformationForm, infoDateForm, infoDescriptionForm, infoTicketForm } = UseEventRegistrationContext();

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<AdressFormData>({
      resolver: zodResolver(AdressFormSchema),
      criteriaMode: 'all',
          mode: 'all',
          defaultValues: {
            CEP: infoAdressForm.CEP,
            street: infoAdressForm.street,
            number: infoAdressForm.number,
            complement: infoAdressForm.complement,
            district: infoAdressForm.district,
            city: infoAdressForm.city,
            state: infoAdressForm.state,
          },
    })

  async function createEvento(evento: any) {
    const jaison = JSON.stringify({
      nome: evento.nome,
      horaInicio: evento.horaInicio,
      horaFim: evento.horaFim,
      descricao: evento.descricao,
      banner: evento.banner,
      id_promoter: session?.user.id,
      endereco: {
        bairro: evento.bairro,
        cep: evento.cep,
        cidade: evento.cidade,
        estado: evento.estado,
        numero: evento.numero,
        rua: evento.rua,
        complemento: evento.complemento
      },
      lotacoes: evento.lotacoes.map((lotacao: any) => ({
        id_perfil: lotacao.id_perfil,
        id_setor: lotacao.id_setor,
        quantidade: lotacao.quantidade,
        valorTotal: lotacao.valorTotal
      }))
    })

    /* Mostrando no console do navegador o formato do json usado para enviar os dados para API */
    console.log("Exemplo de como o JSON para criação de um Promoter deve ser feito:\n" +
    jaison)

    /* Enviando de verdade para API */
    const res = await fetch("/api/evento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jaison
    })

    }
  const onSubmit = (data: AdressFormData) => {
    
    setInfoStepper({
      activeStep: infoStepper.activeStep+1
    });
    
    setInfoAdressForm({
      CEP: data.CEP,
      street: data.street,
      number: data.number,
      complement: data.complement,
      district: data.district,
      city: data.city,
      state: data.state,
  });

  const evento = {
    nome: infoBasicInformationForm.name,
    horaInicio: new Date(infoDateForm.startDate),
    horaFim: new Date(infoDateForm.endDate),
    descricao: infoDescriptionForm.Description,
    banner: infoBasicInformationForm.image,
    status: "pendente",
    rua: infoAdressForm.street,
    numero: infoAdressForm.number,
    bairro: infoAdressForm.district,
    cidade: infoAdressForm.city,
    estado: infoAdressForm.state,
    cep: infoAdressForm.CEP.replace(/[-]/gi,""),
    complemento: infoAdressForm.complement,
    lotacoes: [{
      lotacao: {
        id_perfil: infoTicketForm.profile,
        id_setor: infoTicketForm.sector,
        quantidade: infoTicketForm.amount,
        valorTotal: infoTicketForm.price
        }
      }
    ]  
  }

  createEvento(evento)
}

  const CEP = watch("CEP")

  useEffect(() => {
    setValue("CEP", formatCEP(CEP))
  },[CEP])

return (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center px-8 gap-4 w-500 mt-8">
    <div className="flex flex-row gap-6">
      <Input size="lg" 
        maxLength={9}
        label="CEP*" 
        {...register("CEP")}
          color="indigo"
          error={Boolean(errors.CEP)}
          containerProps={{ className: "min-w-[20px]" }}
      />
      <Input size="lg" 
        label="Estado*" 
        {...register("state")}
          color="indigo"
          error={Boolean(errors.state)}
          containerProps={{ className: "min-w-[20px]" }}
      />
    </div>
    <div className="flex flex-row gap-6">
      <Input size="lg" 
        label="Cidade*" 
        {...register("city")}
          color="indigo"
          error={Boolean(errors.city)}
          containerProps={{ className: "min-w-[20px]" }}
      />
      <Input size="lg" 
        label="Bairro*" 
        {...register("district")}
          color="indigo"
          error={Boolean(errors.district)}
          containerProps={{ className: "min-w-[20px]" }}
      />
    </div>
    <div className="flex flex-row gap-6">
      <Input size="lg" 
        label="Rua*" 
        {...register("street")}
          color="indigo"
          error={Boolean(errors.street)}
          containerProps={{ className: "min-w-[20px]" }}
      />
      <Input size="lg" 
        label="Número*" 
        {...register("number")}
          color="indigo"
          error={Boolean(errors.number)}
          containerProps={{ className: "min-w-[20px]" }}
      />
    </div> 
    <Input size="lg" 
      label="Complemento" 
      {...register("complement")}
          color="indigo"
          error={Boolean(errors.complement)}
    />   
    <div className="flex flex-row w-800 -between mt-4 mb-8">
      <Button onClick={handleNovaNotificacao} type="submit" className="bg-[#404c76]  hover:shadow-[#404c76]/50">
        Próximo
      </Button>
    </div>
  </form>
);
}