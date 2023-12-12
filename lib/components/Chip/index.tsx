import styles from './styles.module.css'
import { CloseCircle } from '../../icons'

export interface ChipProps {
  children: React.ReactNode
  variant?: 'contain' | 'outline'
  colorScheme?: 'gray-300' | 'black'
  onClick?: (e?: React.MouseEvent) => void
  onDelete?: (e?: React.MouseEvent) => void | undefined
}

function Chip({
  children,
  variant = 'contain',
  colorScheme = 'gray-300',
  onClick,
  onDelete
}: ChipProps) {
  const handleDeleteIconClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onDelete) {
      onDelete(e)
    }
  }

  let deleteIcon = null
  if (onDelete) {
    deleteIcon = <CloseCircle onClick={handleDeleteIconClick} />
  }
  return (
    <div
      className={`${styles.chip} ${styles[variant]} ${styles[colorScheme]} ${
        onDelete && styles.icon
      }`}
      onClick={onClick}
    >
      {children}
      {deleteIcon}
    </div>
  )
}

export default Chip
