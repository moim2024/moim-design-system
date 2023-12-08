import styles from './styles.module.css'

export interface ButtonProps {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  disabled?: boolean
  fill?: boolean
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({
  children,
  variant = 'primary',
  size = 'sm',
  disabled,
  fill = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles[variant]} ${styles[size]} ${fill && styles.fill}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button