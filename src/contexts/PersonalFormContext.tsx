import {createContext} from "react";

interface PersonalFormContextType {
  infoPersonalForm: { 
    name: string,
    birthDate: string,
    CPF: string,
    phone: string
  };
  setInfoPersonalForm: React.Dispatch<React.SetStateAction<{ 
    name: string,
    birthDate: string,
    CPF: string,
    phone: string
  }>>;
}

  
  export const PersonalFormContext = createContext<PersonalFormContextType>({
    infoPersonalForm: { 
      name: "",
      birthDate: "",
      CPF: "",
      phone: ""
    },
    setInfoPersonalForm: () => {},
  });