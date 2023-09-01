import styled from 'styled-components'

export const CustomContainer = styled.div`
  height: ${props => props.h};
  width: ${props => props.w};
  display: ${props => props.d};
  flex-direction: ${props => props.fd};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  padding: ${props => props.pd};
  border: ${props => props.bd};
  background-color: ${props => props.bc};
  margin-top: ${props => props.mt};
  margin-left: ${props => props.ml};
`
export const Heading = styled.h1`
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  margin-left: 20px;
`
export const NotFoundImg = styled.img`
  height: 300px;
`
export const Text = styled.p`
  font-size: ${props => props.fs}px;
  font-weight: ${props => props.fw};
  margin-left: ${props => props.ml};
  margin-top: ${props => props.mt};
`
