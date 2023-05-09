"use client";

import "../globals.css";
import RegistrationSteps from "../../components/RegisterClient/Stepper";
import { ThemeProvider, Typography } from "@material-tailwind/react";
 

export default function Example() {
  return (
    <ThemeProvider>
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
        
    </ThemeProvider>
  );
}
