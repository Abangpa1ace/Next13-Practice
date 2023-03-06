export const errorMessages: ErrorTypeKeyObject<string> = {
  required: '값을 반드시 입력해주세요.',
  minLength: '최소 8자 이상으로 입력해주세요.',
  maxLength: '최대 20자 이하로 입력해주세요.',
  // rgxUprLwrNumChr: '영문(대소문자), 숫자, 특수문자가 반드시 포함되어야 합니다.',
  allowLwrNum: '영문과 숫자만 입력 가능합니다.',
  email: '이메일 양식이 올바르지 않습니다.',
  needUprLwrNumChr: '비밀번호 양식이 올바르지 않습니다.',
}