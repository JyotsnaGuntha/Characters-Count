import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgContainer,
  CounterContainer,
  LeftPanel,
  RightPanel,
  Heading,
  Form,
  Input,
  Button,
  NoInputsImage,
  UserInputsList,
  InputItem,
  InputText,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    userInputsList: [],
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput.trim() === '') return
    const newItem = {
      id: uuidv4(),
      text: userInput,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newItem],
      userInput: '',
    }))
  }

  render() {
    const {userInput, userInputsList} = this.state

    return (
      <BgContainer>
        <CounterContainer>
          <LeftPanel>
            <Heading>Count the characters like a Boss...</Heading>
            {userInputsList.length === 0 ? (
              <NoInputsImage
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <UserInputsList>
                {userInputsList.map(item => (
                  <InputItem key={item.id}>
                    <InputText>
                      {item.text} : {item.text.length}
                    </InputText>
                  </InputItem>
                ))}
              </UserInputsList>
            )}
          </LeftPanel>
          <RightPanel>
            <Form onSubmit={this.onClickAdd}>
              <Heading as="h1">Character Counter</Heading>
              <Input
                type="text"
                placeholder="Enter the Characters here"
                value={userInput}
                onChange={this.onChangeInput}
              />
              <Button type="submit">Add</Button>
            </Form>
          </RightPanel>
        </CounterContainer>
      </BgContainer>
    )
  }
}

export default CharacterCounter
