import { color } from "../../dto/styles"

export interface Props extends React.HTMLAttributes<HTMLParagraphElement>, Omit<TextProps, 'dark'> {}

export interface TextProps {
  fontFamily?: string
  fontWeight?: number
  fontStyle?: string
  fontSize?: number  | string
  lineHeight?: number | string
  text?: color
  dark?: boolean
  padding?: string | number
  margin?: string | number
}