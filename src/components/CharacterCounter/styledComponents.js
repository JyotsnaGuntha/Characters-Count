import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #fffff;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CounterContainer = styled.div`
  background-color: #272c47;
  width: 100%;
  max-width: 1200px;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const LeftPanel = styled.div`
  background-color: #ffc533;
  padding: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const RightPanel = styled.div`
  background-color: #0f172a;
  padding: 32px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Heading = styled.h1`
  color: ${props => (props.as === 'h1' ? '#ffc533' : '#1e293b')};
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Input = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  margin-bottom: 12px;
  outline: none;
`

export const Button = styled.button`
  background-color: #ffc533;
  color: #1e293b;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffbf1f;
  }
`

export const NoInputsImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-top: auto;
`

export const UserInputsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
`

export const InputItem = styled.li`
  background-color: #ffbf1f;
  padding: 10px 16px;
  margin-bottom: 12px;
  border-radius: 6px;
`

export const InputText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #1e293b;
  font-weight: 500;
`
