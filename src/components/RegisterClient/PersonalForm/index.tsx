import {
  Input,
  Button,
} from "@material-tailwind/react";
import React from "react";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UseStepperContext from "../../../use/UseStepperContext";
import UseCustomerRegistrationContext from "../../../use/UseCustomerRegistrationContext";

type PersonalFormData = z.infer<typeof PersonalFormSchema>;

const PersonalFormSchema = z.object({
name: z.string().min(3),
birthDate: z.string().min(1),
CPF: z.string().min(1),
phone: z.string().min(1),

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

export default function PersonalForm() {
const { infoStepper, setInfoStepper } = UseStepperContext();
const [activeStep, setActiveStep] = React.useState(infoStepper.activeStep);



const onSubmit = (data: PersonalFormData) => {
  console.log(data);
  setInfoStepper({
    activeStep: activeStep+1
  });
  setActiveStep(activeStep);
}

const { infoPersonalForm, setInfoPersonalForm } = UseCustomerRegistrationContext();
const [name, setName] = React.useState(infoPersonalForm.name);
const [birthDate, setBirthDate] = React.useState(infoPersonalForm.birthDate);
const [CPF, setCPF] = React.useState(infoPersonalForm.CPF);
const [phone, setPhone] = React.useState(infoPersonalForm.phone);

const { register, handleSubmit, formState: { errors } } = useForm<PersonalFormData>({
  resolver: zodResolver(PersonalFormSchema),
  criteriaMode: 'all',
      mode: 'all',
      defaultValues: {
          name: name,
          birthDate: birthDate,
          CPF: CPF,
          phone: phone,
      },
})

const handleName = (e: any) => {
  const name = e.target.value;
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
          color="indigo"
          error={Boolean(errors.name)}
        />

        <Input size="lg" 
          label="Data de Nascimento" 
          type="date"
          containerProps={{ className: "min-w-[72px]" }}
          {...register("birthDate")}
          value={birthDate}
          onChange={(e) => { handleBirthDate(e) }}
          onClick={(e)=>handleBirthDate(e)}
          error={Boolean(errors.birthDate)}
        />

      
      <div className="flex flex-row gap-6">
        <Input size="lg" 
        label="CPF*" 
        maxLength={14}
        containerProps={{ className: "min-w-[72px]" }}
        {...register("CPF")}
        value={CPF}
        onChange={(e) => { handleCPF(e) }}
        onClick={(e)=>handleCPF(e)}
        error={Boolean(errors.CPF)}
        />

        <Input size="lg" 
          label="Telefone*" 
          maxLength={15}
          containerProps={{ className: "min-w-[72px]" }}
          {...register("phone")}
          value={phone}
          onChange={(e) => { handlePhone(e) }}
          onClick={(e)=>handlePhone(e)}
          error={Boolean(errors.phone)}
        />
      </div>
    </div>
    <div className="flex flex-row absolute mt-[100px] ml-[280px] bottom-[75px]">
      <Button type="submit" className="bg-[#404c76]">
        Próximo
      </Button>
    </div>
  </form>
 
);
}