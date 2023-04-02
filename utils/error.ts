import { errorMessages } from "../constants/error";

export const handlerObject: ErrorTypeKeyObject<(value: string, payload?: any) => boolean> = {
  required: value => !!value,
  minLength: (value, length = 5) => value.length >= length,
  maxLength: (value, length) => value.length <= length,
  allowLwrNum: (value) => /^[a-z0-9]*$/.test(value),
  needUprLwrNumChr: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(value),
  email: (value) => /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(value),
  equalPassword: (value) => {
    const passwordValue = Array.from(document.getElementsByTagName('input')).find(input => input.name === 'password')?.value;
    return value === passwordValue;
  }
}

export const handleError = (value: string, errorKeys?: ErrorTypeKey[]): ErrorTypeData => {
  if (!errorKeys) return null;
    
  for (let key of errorKeys) {
    if (handlerObject[key]?.(value) === false) return {
      valid: false,
      key,
      message: errorMessages[key],
    };
  }

  return {
    valid: true,
    key: '',
    message: '',
  };
}

export const handleValidate = (value: unknown, errorKeys: ErrorTypeKey[]): string => {    
  for (let key of errorKeys) {
    if (handlerObject[key]?.(`${value}`) === false) return errorMessages[key];
  }

  return '';
}