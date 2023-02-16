export const InputKeyName = {
  id: '아이디',
  password: '비밀번호',
  email: '이메일',
} as const;

export type InputKeys = keyof typeof InputKeyName;