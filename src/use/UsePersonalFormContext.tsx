import { useContext } from "react";
import { PersonalFormContext } from "../contexts/PersonalFormContext";

export default function UsePersonalFormContext() {
  const { infoPersonalForm, setInfoPersonalForm } = useContext(PersonalFormContext);
  return { infoPersonalForm, setInfoPersonalForm };
}
