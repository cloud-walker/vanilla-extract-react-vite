import {ButtonHTMLAttributes} from 'react'
import {button, ButtonVariants} from './Button.css'

export function Button({
  variants,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {variants?: ButtonVariants}) {
  return <button {...props} className={button(variants)} />
}
