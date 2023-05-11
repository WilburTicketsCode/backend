"use client";

import "../globals.css";
import { ThemeProvider, Typography } from "@material-tailwind/react";
import { CustomerRegistrationContext } from "../../contexts/CustomerRegistrationContext";
import { StepperContext } from "../../contexts/StepperContext";
import React from "react";
import RegistrationSteps from "@/components/RegisterClient/Stepper";
 

export default function Example() {
  const [infoPersonalForm, setInfoPersonalForm] = React.useState({
    name: "",
    birthDate: "",
    CPF: "",
    phone: "",
  })

  const [infoAdressForm, setInfoAdressForm] = React.useState({
    CEP: "",
      state: "",
      city: "",
      district: "",
      street: "",
      number: "",
      complement: "",
  })

  const [infoAcessForm, setInfoAcessForm] = React.useState({
    email: "",
    password: "",
  })

  const [infoStepper, setInfoStepper] = React.useState({
    activeStep: 0
  })


  return (
    <ThemeProvider>
      <StepperContext.Provider value={{ infoStepper, setInfoStepper }}>
        <CustomerRegistrationContext.Provider value={{ infoPersonalForm, setInfoPersonalForm, infoAdressForm, setInfoAdressForm,infoAcessForm, setInfoAcessForm }} >
          <div className="w-full h-[90%] flex justify-center">
            <div className="flex flex-col items-center w-[480px] h-fit rounded-lg bg-gray-200">
              <Typography variant="h2" className="text-[#404c76] mt-6">
                Seja nosso cliente!
              </Typography>
              <Typography variant="small" className="text-[#404c76] mb-4">
                Cadastre-se no sistema para vender seus ingressos.
              </Typography>
              <RegistrationSteps />  
            </div>
          </div>
        </CustomerRegistrationContext.Provider>
      </StepperContext.Provider>
    </ThemeProvider>
  );
}
