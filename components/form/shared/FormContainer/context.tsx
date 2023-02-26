import { createContext, PropsWithChildren, useContext, useState } from "react";

const FormContext = createContext<Record<string, unknown> | null>(null);

const FormContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [value, setValue] = useState({});

  return (
    <FormContext.Provider value={{
      value,
      setValue
    }}>
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = () => {
  return useContext(FormContext)
}

export { FormContext, FormContextProvider, useFormContext }