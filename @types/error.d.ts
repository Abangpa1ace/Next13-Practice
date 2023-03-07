type ErrorTypeKey =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'allowLwrNum'
  | 'needUprLwrNumChr'
  | 'email'
  | 'equalPassword'

type ErrorTypeKeyObject<R> = {
  [K in ErrorTypeKey]: R;
} 

type ErrorTypeData = {
  valid: boolean,
  key: string,
  message: string,
} | null;