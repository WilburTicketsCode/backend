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
import UseStepperContext from "../../use/UseStepperContext";
import { useForm } from "react-hook-form";
import UseCustomerRegistrationContext from "../../use/UseCustomerRegistrationContext";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

type AcessFormData = z.infer<typeof AcessFormSchema>;

const AcessFormSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
  passwordConfirm: z.string().min(1),
})
.refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ["passwordConfirm"],
});

export default function AcessForm() {
  const { infoStepper, setInfoStepper } = UseStepperContext();
  const [activeStep, setActiveStep] = React.useState(infoStepper.activeStep);

  const onSubmit = (data: AcessFormData) => {
    console.log(data);
    setInfoStepper({
      activeStep: activeStep+1
    });
    setActiveStep(activeStep);
}

  const { infoAcessForm, setInfoAcessForm } = UseCustomerRegistrationContext();
  const [email, setEmail] = React.useState(infoAcessForm.email);
  const [password, setPassword] = React.useState(infoAcessForm.password);
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<AcessFormData>({
    resolver: zodResolver(AcessFormSchema),
    criteriaMode: 'all',
        mode: 'all',
        defaultValues: {
            email: email,
            password: password,
        },
  })

  const handlePrev = (e: any) => {
    setInfoStepper({
      activeStep: activeStep-1
    });
    setActiveStep(activeStep);
  }

  const handleEmail = (e: any) => {
    const email = e.target.value;
    setInfoAcessForm({
        email: email,
        password: password,
    });
    setEmail(email);
  }

  const handlePassword = (e: any) => {
    const password = e.target.value;
    setInfoAcessForm({
        email: email,
        password: password,
    });
    setPassword(password);
  }

  const handlePasswordConfirm = (e: any) => {
    const passwordConfirm = e.target.value;
    setInfoAcessForm({
        email: email,
        password: password,
    });
    setPasswordConfirm(passwordConfirm);
  }

return (
  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
    <div className="flex flex-col gap-6">
      <Input size="lg" 
        label="E-mail*" 
        containerProps={{ className: "min-w-[72px]" }}
        {...register("email")}
            value={email}
            onChange={(e) => { handleEmail(e) }}
            onClick={(e)=>handleEmail(e)}
            color="indigo"
            error={Boolean(errors.email)}
      />   
      <div>
        <Input size="lg" 
          type="password"
          label="Senha*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("password")}
              value={password}
              onChange={(e) => { handlePassword(e) }}
              onClick={(e)=>handlePassword(e)}
              color="indigo"
              error={Boolean(errors.password)}
        />
        <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2">
          <InformationCircleIcon className="w-4 h-4 -mt-px" />
          Use pelo menos 8 caracteres.
        </Typography> 
      </div>
      <div>
        <Input size="lg" 
          label="Confirmação da Senha*" 
          containerProps={{ className: "min-w-[72px]" }}
          {...register("passwordConfirm")}
          value={passwordConfirm}
          onChange={(e) => { handlePasswordConfirm(e) }}
          onClick={(e)=>handlePasswordConfirm(e)}
          color="indigo"
          error={Boolean(errors.passwordConfirm)}
        />
        {errors.passwordConfirm?.message && 
          <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2">
            <InformationCircleIcon className="w-4 h-4 -mt-px" />
            {errors.passwordConfirm?.message}
          </Typography> }
      </div>
    </div>
  </form>
);
}