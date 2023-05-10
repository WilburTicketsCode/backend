import UseStepperContext from "../../../use/UseStepperContext";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import UseCustomerRegistrationContext from "../../../use/UseCustomerRegistrationContext";

type AdressFormData = z.infer<typeof AdressFormSchema>;

const AdressFormSchema = z.object({
  CEP: z.string().min(9),
  state: z.string().min(1),
  city: z.string().min(1),
  district: z.string().min(1),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().min(1),

})

function formatCEP(value:string) {
  return value
  .replace(/[^0-9]/g, "")
  .replace(/^([0-9]{5})([0-9]{1,3})$/, "$1-$2")
  }

export default function AdressForm() {

  const { infoStepper, setInfoStepper } = UseStepperContext();
  const [activeStep, setActiveStep] = React.useState(infoStepper.activeStep);

  const onSubmit = (data: AdressFormData) => {
    console.log(data);
    setInfoStepper({
      activeStep: activeStep+1
    });
    setActiveStep(activeStep);
}

  const { infoAdressForm, setInfoAdressForm } = UseCustomerRegistrationContext();
  const [CEP, setCEP] = React.useState(infoAdressForm.CEP);
  const [state, setState] = React.useState(infoAdressForm.state);
  const [city, setCity] = React.useState(infoAdressForm.city);
  const [district, setDistrict] = React.useState(infoAdressForm.district);
  const [street, setStreet] = React.useState(infoAdressForm.street);
  const [number, setNumber] = React.useState(infoAdressForm.number);
  const [complement, setComplement] = React.useState(infoAdressForm.complement);

  const { register, handleSubmit, formState: { errors } } = useForm<AdressFormData>({
    resolver: zodResolver(AdressFormSchema),
    criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            CEP: CEP,
            state: state,
            city: city,
            district: district,
            street: street,
            number: number,
            complement: complement,
        },
  })

  const handlePrev = (e: any) => {
    setInfoStepper({
      activeStep: activeStep-1
    });
    setActiveStep(activeStep);
  }

  const handleCEP = (e: any) => {
    const CEP = formatCEP(e.target.value);
    setInfoAdressForm({
        CEP: CEP,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        complement: complement,
    });
    setCEP(CEP);
  }

  const handleState = (e: any) => {
    const state = e.target.value;
    setInfoAdressForm({
        CEP: CEP,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        complement: complement,
    });
    setState(state);
  }

  const handleCity = (e: any) => {
    const city = e.target.value;
    setInfoAdressForm({
        CEP: CEP,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        complement: complement,
    });
    setCity(city);
  }

  const handleDistrict = (e: any) => {
    const district = e.target.value;
    setInfoAdressForm({
        CEP: CEP,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        complement: complement,
    });
    setDistrict(district);
  }

  const handleStreet = (e: any) => {
    const street = e.target.value;
    setInfoAdressForm({
        CEP: CEP,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        complement: complement,
    });
    setStreet(street);
  }

  const handleNumber= (e: any) => {
    const number = e.target.value;
    setInfoAdressForm({
        CEP: CEP,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        complement: complement,
    });
    setNumber(number);
  }

  const handleComplement = (e: any) => {
    const complement = e.target.value;
    setInfoAdressForm({
        CEP: CEP,
        state: state,
        city: city,
        district: district,
        street: street,
        number: number,
        complement: complement,
    });
    setComplement(complement);
  }

return (
  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
    <div className="flex flex-col gap-6">
      <div className="flex flex-row gap-6">
        <Input size="lg" 
          maxLength={9}
          label="CEP*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("CEP")}
            value={CEP}
            onChange={(e) => { handleCEP(e) }}
            onClick={(e)=>handleCEP(e)}
            color="indigo"
            error={Boolean(errors.CEP)}
        />
        <Input size="lg" 
          label="Estado*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("state")}
            value={state}
            onChange={(e) => { handleState(e) }}
            onClick={(e)=>handleState(e)}
            color="indigo"
            error={Boolean(errors.state)}
        />
      </div>
      <div className="flex flex-row gap-6">
        <Input size="lg" 
          label="Cidade*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("city")}
            value={city}
            onChange={(e) => { handleCity(e) }}
            onClick={(e)=>handleCity(e)}
            color="indigo"
            error={Boolean(errors.city)}
        />
        <Input size="lg" 
          label="Bairro*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("district")}
            value={district}
            onChange={(e) => { handleDistrict(e) }}
            onClick={(e)=>handleDistrict(e)}
            color="indigo"
            error={Boolean(errors.district)}
        />
      </div>
      <div className="flex flex-row gap-6">
        <Input size="lg" 
          label="Rua*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("street")}
            value={street}
            onChange={(e) => { handleStreet(e) }}
            onClick={(e)=>handleStreet(e)}
            color="indigo"
            error={Boolean(errors.street)}
        />
        <Input size="lg" 
          label="Número*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("number")}
            value={number}
            onChange={(e) => { handleNumber(e) }}
            onClick={(e)=>handleNumber(e)}
            color="indigo"
            error={Boolean(errors.number)}
        />
      </div> 
      <Input size="lg" 
        label="Complemento" 
        containerProps={{ className: "min-w-[72px]" }}
        {...register("complement")}
            value={complement}
            onChange={(e) => { handleComplement(e) }}
            onClick={(e)=>handleComplement(e)}
            color="indigo"
            error={Boolean(errors.complement)}
      />   
    </div>
    <div className="flex flex-row absolute mt-[100px] bottom-[75px] gap-[183px]">
      <Button onClick={handlePrev} className="bg-[#404c76]">
        Voltar
      </Button>
      <Button type="submit" className="bg-[#404c76]">
        Próximo
      </Button>
    </div>
  </form>
);
}