import { ChangeEvent, useCallback, useEffect } from "react";
import { useContext, useRef, useState } from "react";
import { FormerContext } from "../contexts/FormerContext";
import { handleValidate } from "../utils/error";

interface Options {
  key: string;
  validateKeys: ErrorTypeKey[];
  initialValue?: string;
  mode?: string;
}

interface Returns {
  register: {
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  invalidCaption: string;
}

const useFormerField = ({
  key,
  validateKeys,
  initialValue = '',
  mode = 'onBlur',
}: Options): Returns => {
  const { values, validateCount, connectContext } = useContext(FormerContext);
  
  const [value, setValue] = useState<string>(initialValue);
  const valueRef = useRef<string>('');
  const [error, setError] = useState<string>('');
  const errorRef = useRef<string>('');

  const updateRef = useCallback((value: string) => {
    valueRef.current = value;
    errorRef.current = handleValidate(value, validateKeys);
    connectContext(key, { value: valueRef.current, error: errorRef.current });
  }, [connectContext, key, validateKeys])

  const updateState = () => {
    setValue(valueRef.current);
    setError(errorRef.current);
  }

  useEffect(() => {
    updateRef(initialValue);
  }, [initialValue])

  useEffect(() => {
    if (validateCount && errorRef.current) {
      updateRef(valueRef.current);
      updateState();
    }
  }, [validateCount])

  const resetError = () => {
    setError('');
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    resetError();

    const value = e.target.value;
    updateRef(value);
    if (mode === 'onChange') updateState();
  }

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateRef(value);
    if (mode === 'onBlur') updateState();
  }

  return {
    register: {
      name: key,
      onChange,
      onBlur,
    },
    invalidCaption: error,
  }
}

export default useFormerField;