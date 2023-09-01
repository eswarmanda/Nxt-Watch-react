import styled from 'styled-components'

export const LoginPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormCard = styled.form`
  height: 380px;
  width: 350px;
  padding: 40px;
  box-shadow: 1px 1px 10px 1px #dedede;
  border-radius: 10px;
`
export const ImageElement = styled.img`
  height: 35px;
  width: 150px;
  margin: 20px;
  margin-left: 60px;
  margin-bottom: 50px;
  margin-top: -5px;
`
export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  color: #787878;
`
export const Input = styled.input`
  height: 32px;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 5px;
  border: 2px solid #cfcfcf;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  color: #787878;
`
export const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const CheckBox = styled.input``
export const CheckBoxLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
`

export const CustomDiv1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  margin-top: -20px;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  height: 32px;
  width: 100%;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  margin-top: 10px;
  border: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #fc0000;
  font-size: 10px;
`
