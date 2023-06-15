import {createContext} from "react";

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
  }
  infoTicketForm: {
    sector: string,
    profile: string,
    amount: string,
    price: string,
  }
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
  setInfoTicketForm: React.Dispatch<React.SetStateAction<{
    sector: string,
    profile: string,
    amount: string,
    price: string,
  }>>;
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
      infoTicketForm: {
          sector: "",
          profile: "",
          amount: "",
          price: "",
      },
      setInfoAdressForm: () => {},
      setInfoBasicInformationForm: () => {},
      setInfoDescriptionForm: () => {},
      setInfoDateForm: () => {},
      setInfoTicketForm: () => {},
  });