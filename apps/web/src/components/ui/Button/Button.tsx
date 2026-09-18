import type { ButtonHTMLAttributes, ReactNode } from 'react'

import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
}

function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim()

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button