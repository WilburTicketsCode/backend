import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
  MapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import PersonalForm from "../PersonalForm";
import AdressForm from "../AdressForm";
import AcessForm from "../AcessForm";
 

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalForm />;
    case 1:
      return <AdressForm />;
    case 2:
      return <AcessForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function RegistrationSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="h-[525px] ml-[25px] mr-[25px] flex flex-col py-4 px-8 gap-16">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        activeLineClassName="bg-[#404c76]"

      >
        <Step onClick={() => setActiveStep(0)} activeClassName="bg-[#404c76] ring-[#404c76]/50" completedClassName="bg-[#404c76]">
          <UserIcon className="h-5 w-5"/>
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              className = {activeStep === 0 ? "text-[#404c76]" : "text-[#B0BEC5]"}
            >
              Dados Pessoais
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)} activeClassName="bg-[#404c76] ring-[#404c76]/50" completedClassName="bg-[#404c76]">
          <MapIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              className = {activeStep === 1 ? "text-[#404c76]" : "text-[#B0BEC5]"}
            >
              Endereço
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)} activeClassName="bg-[#404c76] ring-[#404c76]/50" completedClassName="bg-[#404c76]">
          <ShieldCheckIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              className = {activeStep === 2 ? "text-[#404c76]" : "text-[#B0BEC5]"}
            >
              Dados de Acesso
            </Typography>
          </div>
        </Step>
      </Stepper>
 
      {getStepContent(activeStep)}
 
      <div className="flex absolute bottom-[75px] gap-[225px]">
        <Button onClick={handlePrev} disabled={isFirstStep} className="bg-[#404c76]">
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep} className="bg-[#404c76]">
          Next
        </Button>
      </div>
    </div>
  );
}

function makeStyles(arg0: () => { root: { "& .MuiStepIcon-active": { color: string; }; "& .MuiStepIcon-completed": { color: string; }; "& .Mui-disabled .MuiStepIcon-root": { color: string; }; }; }) {
  throw new Error("Function not implemented.");
}
