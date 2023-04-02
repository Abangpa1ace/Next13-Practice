import * as yup from 'yup';

export const yupMaker = (kv: { [K in string ]: any }): yup.ISchema => {
  let y = yup;

  for (let key in kv) {
    y = y[key](...kv[key])
  }

  return y;
}