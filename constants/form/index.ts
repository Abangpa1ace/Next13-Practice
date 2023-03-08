export const InputKeyName = {
  id: '아이디',
  password: '비밀번호',
  passwordConfirm: '비밀번호 확인',
  email: '이메일',
  agreeCondition: '필수정보 동의',
} as const;

export type InputKeys = keyof typeof InputKeyName;