import { IconType } from 'react-icons';
import { color } from "../../dto/styles"

export interface IconProps {
  Icon: IconType
  iconColor?: color
  dark?: boolean
  size?: number
  style?: object 
}