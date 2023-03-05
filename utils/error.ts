import { errorMessages } from "../constants/error";

export const handlerObject: { [key in ErrorKey]: (value: unknown, payload?: any) => boolean } = {
  required: value => !!value,
  minLength: (value, length) => String(value).length >= length,
  maxLength: (value, length) => String(value).length <= length,
  rgxLwrNum: (value) => /^[a-z0-9]*$/.test(String(value)),
}

export const handleError = (value: unknown, errorKeys?: ErrorKey[]): ErrorInfo => {
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