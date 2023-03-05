export const errorMessages: { [key in ErrorKey]: string } = {
  required: '값을 반드시 입력해주세요.',
  minLength: '최소 8자 이상으로 입력해주세요.',
  maxLength: '최대 20자 이하로 입력해주세요.',
  rgxLwrNum: '영문과 숫자만 입력 가능합니다.',
}