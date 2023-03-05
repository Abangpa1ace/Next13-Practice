type ErrorKey =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'rgxLwrNum'

type ErrorInfo = {
  valid: boolean,
  key: string,
  message: string,
} | null;