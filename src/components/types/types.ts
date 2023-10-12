export type FormProps = {
  propValue: string
}

export interface IFormState {
  inputValue: string
  disableSubmit: boolean
}

export interface FormButtonProps {
  disabled?: boolean
  text: string
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
}

export type InputRefType = React.RefObject<HTMLInputElement>

export interface PostProps {
  id: number
  title: string
  userId: number
  body: string
}
