export type ButtonType = 'primary' | 'danger' | 'warning' | 'success' | 'info'
export type ButtonSize = 'small' | 'medium' | 'large' | 'normal'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  rounded?: boolean
  circle?: boolean
  disabled?: boolean
}
