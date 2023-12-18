import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Typography from '../Typography'

const cx = classNames.bind(styles)

export interface ButtonProps {
  text: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  fill?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({
  text,
  variant = 'primary',
  size = 'sm',
  fill = false,
  disabled,
  icon,
  onClick,
}: ButtonProps) {
  const className = cx(variant, size, { fill })
  const typographyVariant = size === 'sm' ? 'body1strong' : 'body2strong'

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <Typography text={text} variant={typographyVariant} />
      {icon}
    </button>
  )
}

export default Button
