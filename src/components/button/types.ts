export type ButtonType = 'primary' | 'danger' | 'warning' | 'success' | 'info' | 'default'
export type ButtonSize = 'small' | 'medium' | 'large' | 'normal'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  rounded?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}
