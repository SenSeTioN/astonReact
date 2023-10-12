import { FormButtonProps } from '../../types/types'
import './FormButton.scss'

const FormButton: React.FC<FormButtonProps> = ({ disabled, text, type, onClick }) => {
  return (
    <button className='btn' type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
}

export default FormButton
