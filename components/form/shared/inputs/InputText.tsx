'use client';
import { ChangeEvent, useState } from 'react';
import { InputKeyName } from '../../../../constants/form';
import { handleError } from '../../../../utils/error';
import BaseInput from '../../../common/input/BaseInput';
import FormerItem from '../FormerItem';

interface InputTextProps extends FormerInputProps {
}

function InputText({
  id,
  title,
  errors,
  type,
  ...resetProps
}: InputTextProps): JSX.Element {
  const [error, setError] = useState<ErrorTypeData>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    if (error) setError(handleError(value, errors))
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setError(handleError(value, errors))
  } 

  return (
    <FormerItem id={id} title={title || InputKeyName[id]} errorData={error}>
      <BaseInput type={type} name={id} onChange={handleChange} onBlur={handleBlur} {...resetProps} />
    </FormerItem>
  )
}

export default InputText