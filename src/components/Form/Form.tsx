import { ChangeEvent, Component, FormEvent } from 'react'
import './Form.scss'

interface FormProps {
  propValue: string
}

interface FormState {
  inputValue: string
}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props)
    this.state = {
      inputValue: '',
    }
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
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('Form - value:', this.state.inputValue)
    this.setState({ inputValue: '' })
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
        />
        <button className='btn' type='submit'>
          Отправить
        </button>
        <p>Prop value: {propValue}</p>
      </form>
    )
  }
}

export default Form
