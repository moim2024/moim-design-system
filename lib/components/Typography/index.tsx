import styles from './styles.module.css'

const variants = {
  caption2: 'caption2',
  caption2strong: 'caption2strong',
  caption1: 'caption1',
  caption1strong: 'caption1strong',
  body1: 'body1',
  body1strong: 'body1strong',
  body2: 'body2',
  body2strong: 'body2strong',
  subtitle1: 'subtitle1',
  title3: 'title3',
  title2: 'title2',
  title1: 'title1',
  largetitle: 'largetitle',
}

type TypographyVariant = keyof typeof variants

interface TypographyProps {
  text: string
  variant: TypographyVariant
}

function Typography({ text, variant }: TypographyProps) {
  return <span className={`${styles[variant]}`}>{text}</span>
}

export default Typography
