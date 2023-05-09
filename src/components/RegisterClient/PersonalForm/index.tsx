import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import React from "react";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UsePersonalFormContext from "@/use/UsePersonalFormContext";

 
type PersonalFormData = z.infer<typeof PersonalFormSchema>;


const PersonalFormSchema = z.object({
  name: z.string().min(3, { message: 'Por favor, informe um nome válido' }),
  birthDate: z.string().min(1, { message: 'Por favor, informe uma data válida' }),
  CPF: z.string().min(1, { message: 'Por favor, informe o CPF válido' }),
  phone: z.string().min(1, { message: 'Por favor, informe um número válido' }),

})

function formatPhone(value:string) {
  return value
  .replace(/[^0-9]/g, "")
  .replace(/^([0-9]{1,2})$/, "($1)")
  .replace(/^([0-9]{2})([0-9]{1})$/, "($1)$2")
  .replace(/^([0-9]{2})([0-9]{1})([0-9]{1,4})$/, "($1)$2 $3")
  .replace(/^([0-9]{2})([0-9]{1})([0-9]{4})([0-9]{1,4})$/, "($1)$2 $3-$4")
}

function formatCPF(value:string) {
  return value
  .replace(/[^0-9]/g, "")
  .replace(/^([0-9]{3})([0-9]{1,3})$/, "$1.$2")
  .replace(/^([0-9]{3})([0-9]{3})([0-9]{1,3})$/, "$1.$2.$3")
  .replace(/^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{1,2})$/, "$1.$2.$3-$4")
}
  
export default function Personal() {

  const { register, handleSubmit, formState: { errors } } = useForm<PersonalFormData>({
    resolver: zodResolver(PersonalFormSchema),
})

  const [name, setName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [CPF, setCPF] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const { setInfoPersonalForm } = UsePersonalFormContext();

  const handleName = (e: any) => {
    const name = e.target.value.replace(/[^a-zA-Z ]/g, "");
    setInfoPersonalForm({
        name: name,
        birthDate: birthDate,
        CPF: CPF,
        phone: phone
    });
    setName(name);
  }

  const handleBirthDate = (e: any) => {
    const birthDate = e.target.value;
    setInfoPersonalForm({
        name: name,
        birthDate: birthDate,
        CPF: CPF,
        phone: phone
    });
    setBirthDate(birthDate);
  }

  const handleCPF = (e: any) => {
    const CPF = formatCPF(e.target.value);
    setInfoPersonalForm({
        name: name,
        birthDate: birthDate,
        CPF: CPF,
        phone: phone
    });
    setCPF(CPF);
  }

  const handlePhone = (e: any) => {
    const phone = formatPhone(e.target.value);
    setInfoPersonalForm({
        name: name,
        birthDate: birthDate,
        CPF: CPF,
        phone: phone
    });
    setPhone(phone);
  }

  const onSubmit = (data: any) => console.log(data);

  console.log(errors.name)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
      <div className="flex flex-col gap-6">
 
          <Input size="lg" 
            label="Nome Completo*" 
            containerProps={{ className: "min-w-[72px]" }}
            {...register("name")}
            value={name}
            onChange={(e) => { handleName(e) }}
            onClick={(e)=>handleName(e)}
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          <Input size="lg" 
            label="Data de Nascimento" 
            type="date"
            containerProps={{ className: "min-w-[72px]" }}
            {...register("birthDate")}
            value={birthDate}
            onChange={(e) => { handleBirthDate(e) }}
            onClick={(e)=>handleBirthDate(e)}
          />
          {errors.birthDate && <span className="text-red-500 text-xs">{errors.birthDate.message}</span>}
        
        <div className="flex flex-row gap-6">
          <Input size="lg" 
          label="CPF*" 
          maxLength={14}
          containerProps={{ className: "min-w-[72px]" }}
          {...register("CPF")}
          value={CPF}
          onChange={(e) => { handleCPF(e) }}
          onClick={(e)=>handleCPF(e)}
          />
          {errors.CPF && <span className="text-red-500 text-xs">{errors.CPF.message}</span>}
          <Input size="lg" 
            label="Telefone*" 
            maxLength={15}
            containerProps={{ className: "min-w-[72px]" }}
            {...register("phone")}
            value={phone}
            onChange={(e) => { handlePhone(e) }}
            onClick={(e)=>handlePhone(e)}
          />
          {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
        </div>
      </div>
    </form>
  );
}