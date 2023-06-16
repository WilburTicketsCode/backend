import {createContext} from "react";

export type ticketForm = {
    id_setor: string,
    id_perfil: string,
    quantidade: string,
    valorTotal: string,
}
interface EventRegistrationContextType {
  infoAdressForm: {
    CEP: string,
    street: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    state: string,
  }
  infoBasicInformationForm: {
    name: string,
    image: string,
  }
  infoDescriptionForm: {
    Description: string,
  }
  infoDateForm: {
    startDate: string,
    endDate: string,
  },
  infoTicketForm: ticketForm[],
  setInfoAdressForm: React.Dispatch<React.SetStateAction<{ 
    CEP: string,
    street: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    state: string,
  }>>;
  setInfoBasicInformationForm: React.Dispatch<React.SetStateAction<{ 
    name: string,
    image: string,
  }>>;
  setInfoDescriptionForm: React.Dispatch<React.SetStateAction<{ 
    Description: string,
  }>>;

  setInfoDateForm: React.Dispatch<React.SetStateAction<{
    startDate: string,
    endDate: string,
  }>>;
  setInfoTicketForm: React.Dispatch<React.SetStateAction<ticketForm[]>>;
}
  
  export const EventRegistrationContext = createContext<EventRegistrationContextType>({
      infoAdressForm: {
          CEP: "",
          state: "",
          city: "",
          district: "",
          street: "",
          number: "",
          complement: "",
      },
      infoBasicInformationForm: {
          name: "",
          image: "",
      },
      infoDescriptionForm: {
          Description: "",
      },
      infoDateForm: {
          startDate: "",
          endDate: "",
      },
      infoTicketForm: [],
      setInfoAdressForm: () => {},
      setInfoBasicInformationForm: () => {},
      setInfoDescriptionForm: () => {},
      setInfoDateForm: () => {},
      setInfoTicketForm: () => [{}],
  });