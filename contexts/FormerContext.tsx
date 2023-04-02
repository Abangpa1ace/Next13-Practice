import { ComponentType, createContext, PropsWithChildren, ReactElement, useMemo, useRef, useState } from "react";
import { sleep } from "../utils/promise";

type RegisterParameter = {
  value: string;
  error: string;
}

interface FormValidatorContextType {
  values: Record<string, string>;
  errors: Record<string, string>;
  firstError: string[];
  isFormerValid: boolean;
  validateCount: number;
  connectContext: (key: string, params: RegisterParameter) => void;
  updateValidation: () => void;
}

export const FormerContext = createContext<FormValidatorContextType>({
  values: {},
  errors: {},
  firstError: ['', ''],
  isFormerValid: false,
  validateCount: 0,
  connectContext: () => undefined,
  updateValidation: () => undefined,
})

export function withFormerContextProvider<P>(Component: ComponentType<P>, displayName = 'WithFormerContextProvider') {
  const ComponentWithProvider = (props: P) => {
    return (
      <FormerContextProvider>
        <Component {...props} />
      </FormerContextProvider>
    )
  }
  ComponentWithProvider.displayName = displayName;

  return ComponentWithProvider;
}

interface FormValidatorContextProviderProps {
  
}

const FormerContextProvider = ({ children }: PropsWithChildren<FormValidatorContextProviderProps>): ReactElement => {
  const [validateCount, setValidateCount] = useState<number>(0);

  const [entireValue, setEntireValue] = useState<Record<string, string>>({});
  const entireValueRef = useRef<Record<string, string>>({});

  const [entireError, setEntireError] = useState<Record<string, string>>({});
  const entireErrorRef = useRef<Record<string, string>>({});

  const firstError = useRef<string[]>(['', '']);

  const connectContext = (key: string, { value, error }: RegisterParameter) => {
    entireValueRef.current[key] = value;
    entireErrorRef.current[key] = error;
  }

  const updateValidation = () => {
    setEntireValue(entireValueRef.current);
    setEntireError(entireErrorRef.current);
    firstError.current = Object.entries(entireErrorRef.current).find(([k, v]) => v) ?? ['', ''];
    setValidateCount(count => count + 1);
  }

  return <FormerContext.Provider value={{
    values: entireValue,
    errors: entireError,
    firstError: firstError.current,
    isFormerValid: !firstError.current[1],
    validateCount,
    connectContext,
    updateValidation,
  }}>{children}</FormerContext.Provider>
}

export default FormerContextProvider;