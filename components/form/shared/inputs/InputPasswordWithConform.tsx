import { useState } from "react";
import { InputKeys } from "../../../../constants/form";
import FormerItem from "../FormerItem";
import InputPassword from "./InputPassword";

interface InputPasswordWithConformProps {
  title?: [string, string];
  errors?: ErrorTypeKey[];
  useToggleReveal?: boolean;
}

const InputPasswordWithConform = ({
  title,
  errors,
  useToggleReveal = false,
  ...resetProps
}: InputPasswordWithConformProps) => {
  const [error, setError] = useState<{ [K in 'password' | 'passwordConform']: ErrorTypeData }>(
    { password: null, passwordConform: null }
  )
  return (
    <>
      <InputPassword id="password" />
      <InputPassword id="passwordConform" />
    </>
  )
}

export default InputPasswordWithConform;