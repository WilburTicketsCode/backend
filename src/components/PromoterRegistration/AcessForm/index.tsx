import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import UseStepperContext from "../../../use/UseStepperContext";
import { useForm } from "react-hook-form";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import UsePromoterRegistrationContext from "@/use/UsePromoterRegistrationContext";

type AcessFormData = z.infer<typeof AcessFormSchema>;

const AcessFormSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
  passwordConfirm: z.string(),
})
.refine((data) => data.password === data.passwordConfirm, {
  message: "Senhas diferentes",
  path: ["passwordConfirm"],
});

export default function AcessForm() {
  const { infoStepper, setInfoStepper } = UseStepperContext();
  const { infoAcessForm, setInfoAcessForm } = UsePromoterRegistrationContext();

  const { register, handleSubmit, formState: { errors } } = useForm<AcessFormData>({
      resolver: zodResolver(AcessFormSchema),
      criteriaMode: 'all',
          mode: 'all',
          defaultValues: {
              email: infoAcessForm.email,
              password: infoAcessForm.password,
          },
    })

  const onSubmit = (data: AcessFormData) => {

    setInfoStepper({
      activeStep: infoStepper.activeStep+1
    });

    setInfoAcessForm({
      email: data.email,
      password: data.password,
    })
}

  const handlePrev = (e: any) => {
    setInfoStepper({
      activeStep: infoStepper.activeStep-1
    });
  }

return (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center px-8 gap-4 w-full mt-8">
   
    <Input size="lg" 
      label="E-mail*" 
      containerProps={{ className: "min-w-[72px]" }}
      {...register("email")}
      color="indigo"
      error={Boolean(errors.email)}
    />   

    <Input size="lg" 
      type="password"
      label="Senha*" 
      containerProps={{ className: "min-w-[72px]" }}
      {...register("password")}
      color="indigo"
      error={Boolean(errors.password)}
    /> 

    <div className="flex flex-col w-full">
      <Input size="lg" 
        label="Confirmação da Senha*" 
        containerProps={{ className: "min-w-[72px]" }}
        {...register("passwordConfirm")}
        color="indigo"
        error={Boolean(errors.passwordConfirm)}
      />
      {errors.passwordConfirm?.message && 
        <Typography variant="small" color="red" className="flex items-center gap-1 font-normal mt-2">
          <InformationCircleIcon className="w-4 h-4 -mt-px" />
          {errors.passwordConfirm?.message}
        </Typography> }
    </div>

    <div className="flex flex-row w-full justify-between mt-4 mb-8">
      <Button onClick={handlePrev} className="bg-[#404c76]  hover:shadow-[#404c76]/50">
        Voltar
      </Button>
      <Button type="submit" className="bg-[#404c76]  hover:shadow-[#404c76]/50">
        Próximo
      </Button>
    </div>
  </form>
);
}