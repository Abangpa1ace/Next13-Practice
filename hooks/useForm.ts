import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

type Options = {
  // key: string;
} | undefined;

const useForm = (key: string) => {
  const formValue = atom<Record<string, unknown>>({
    key,
    default: {},
  })

  const [value, setValue] = useRecoilState(formValue);

  const catchInput = (e: Event) => {
    console.log('catchInput', e.target);
  }

  useEffect(() => {
    window.addEventListener('input', catchInput);

    return () => window.removeEventListener('input', catchInput);
  }, [])

  return {
    value
  }
}

export default useForm;