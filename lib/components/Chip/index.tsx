import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import Typography from '../Typography'
import { CloseCircle } from '../../icons'

const cx = classNames.bind(styles)

export interface ChipProps {
  text: string
  variant?: 'contain' | 'outline'
  colorScheme?: 'gray-300' | 'black'
  onClick?: (e?: React.MouseEvent) => void
  onDelete?: (e?: React.MouseEvent) => void | undefined
}

function Chip({
  text,
  variant = 'contain',
  colorScheme = 'gray-300',
  onClick,
  onDelete,
}: ChipProps) {
  const handleDeleteIconClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onDelete) {
      onDelete()
    }
  }

  return (
    <button
      className={cx(variant, colorScheme, { icon: onDelete })}
      onClick={onClick}
    >
      <Typography text={text} variant={'body1strong'} />
      {onDelete && <CloseCircle onClick={handleDeleteIconClick} />}
    </button>
  )
}

export default Chip
