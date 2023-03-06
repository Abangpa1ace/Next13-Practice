type ErrorTypeKey =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'allowLwrNum'
  | 'needUprLwrNumChr'
  | 'email'

type ErrorTypeKeyObject<R> = {
  [K in ErrorTypeKey]: R;
} 

type ErrorTypeData = {
  valid: boolean,
  key: string,
  message: string,
} | null;