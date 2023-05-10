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
          <div className="flex justify-center items-center h-screen">
              <div className="w-[500px] h-[700px] bg-gray-200 rounded-lg">
                <div className="flex flex-col items-center my-10">
                  <Typography variant="h2" className="text-[#404c76]">
                    Seja nosso cliente!
                  </Typography>
                  <Typography variant="small" className="text-[#404c76]">
                    Cadastre-se no sistema para vender seus ingressos.
                  </Typography>
                </div>
                <div className="my-10" >
                  <RegistrationSteps />  
                </div>
              </div>
          </div>
        </CustomerRegistrationContext.Provider>
      </StepperContext.Provider>
    </ThemeProvider>
  );
}
