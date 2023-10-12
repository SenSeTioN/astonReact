import React, { ChangeEvent, Component, FormEvent } from 'react'
import { FormProps, IFormState, InputRefType } from '../types/types'
import FormButton from '../ui/Button/FormButton'
import './Form.scss'

class Form extends Component<FormProps, IFormState> {
  inputRef: InputRefType

  constructor(props: FormProps) {
    super(props)
    this.state = {
      inputValue: '',
      disableSubmit: false,
    }
    this.inputRef = React.createRef<HTMLInputElement>()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const disableWord = value.includes('реакт')

    this.setState({ inputValue: value, disableSubmit: disableWord })
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    this.setState({ inputValue: '', disableSubmit: false })
  }

  focusTextInput(): void {
    this.inputRef.current?.focus()
  }

  render() {
    const { inputValue } = this.state
    const { propValue } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={this.handleChange}
          placeholder='Введите текст'
          className='input'
          ref={this.inputRef}
        />
        <FormButton disabled={this.state.disableSubmit} text='Отправить' type='submit' />
        <FormButton text='Фокус на input' type='button' onClick={this.focusTextInput} />

        {this.state.disableSubmit && <p style={{ color: 'red' }}>Текст не должен содержать "реакт"</p>}
        <p>ParentProp value: {propValue}</p>
      </form>
    )
  }
}

export default Form
