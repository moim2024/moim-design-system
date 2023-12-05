import styles from "./styles.module.css";

const variants = [
  "caption2",
  "caption2strong",
  "caption1",
  "caption1strong",
  "body1",
  "body1strong",
  "body2",
  "body2strong",
  "subtitle1",
  "title3",
  "title2",
  "title1",
  "largetitle",
] as const;

type TypographyVariant = (typeof variants)[number];

interface TypographyProps {
  text: string;
  variant: TypographyVariant;
}

function Typography({ text, variant }: TypographyProps) {
  return <span className={`${styles[variant]}`}>{text}</span>;
}

export default Typography;
