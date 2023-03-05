import styled from '@emotion/styled';

type Props = {
  message?: string;
  isShow?: boolean;
}

function ErrorMessage({ isShow, message }: Props) {
  if (!isShow || !message) return null;

  return (
    <Message>{message}</Message>
  )
}

const Message = styled.p`
  margin-top: 4px;
  color: #f77465;
  font-size: 13px;
`

export default ErrorMessage