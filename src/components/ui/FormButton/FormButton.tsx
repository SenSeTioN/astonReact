import { FormButtonProps } from '../../types/types'
import './FormButton.scss'

const FormButton = (props: FormButtonProps) => {
  const { disabled, text, type, onClick } = props

  return (
    <button className='btn' type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
}

export default FormButton
