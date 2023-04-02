'use client'
import styled from '@emotion/styled';
import FormerContainer from '../../components/form/shared/FormerContainer';
import InputPassword from '../../components/form/shared/inputs/InputPassword';
import InputText from '../../components/form/shared/inputs/InputText';
import SingleCheck from '../../components/form/shared/inputs/SingleCheck';

function FormPage(): JSX.Element {
  return (
    <Container>
      <FormerContainer>
        <InputText id="id" errors={['required', 'allowLwrNum']}/>
        <InputText id="email" errors={['required', 'email']} />
        <InputText id="password" errors={['required', 'minLength']} />
        <InputText id="name" errors={['required']}/>
        <SingleCheck id="agreeCondition" label="필수 정보 활용에 동의해주세요." />
      </FormerContainer>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 550px;
  min-height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
`;

export default FormPage