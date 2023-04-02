import { FormEvent, useCallback, useContext, useEffect } from "react"

import { FormerContext } from "../contexts/FormerContext"

interface Options {
  handleSubmit: (values: Record<string, string>) => void;
}

interface Returns {
  handleSubmitFormer: (e: FormEvent<HTMLFormElement>) => void;
}

const useFormContainer = ({
  handleSubmit,
}: Options): Returns => {
  const { values, errors, isFormerValid, firstError, validateCount, updateValidation } = useContext(FormerContext);

  const triggerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateValidation();
  }

  const performSubmit = useCallback(async () => {
    if (isFormerValid) {
      await handleSubmit(values);
    }
    else {
      await document.getElementsByName(firstError[0])[0].focus();
      console.log('former errors', errors);
    }
  }, [errors, values, isFormerValid, handleSubmit]);

  useEffect(() => {
    if (validateCount) {
      performSubmit();
    }
  }, [validateCount, performSubmit]);

  return {
    handleSubmitFormer: triggerSubmit,
  }
}

export default useFormContainer;