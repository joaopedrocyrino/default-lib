import styled from 'styled-components'

const Button = styled.button<Props>`
  width: ${props => props.width || 200}px;
  height: ${props => props.height || 80}px;
  background-color: ${props => props.theme === 'dark' ? props.themeColor.dark?.backgroundColor : props.themeColor.light?.backgroundColor};
  color: ${props => props.theme === 'dark' ? props.themeColor.dark?.color : props.themeColor.light?.color};
  border-radius: ${props => props.borderRadius || 6}px;
  border: ${props => props.border ? `${props.border}px solid ${props.theme === 'dark' ? props.themeColor.dark?.borderColor : props.themeColor.light?.borderColor}}` : 'none'};
`

export default Button

interface Props {
  width?: number
  height?: number
  themeColor: {
    dark?: {
      backgroundColor: string
      color: string
      borderColor: string
    }
    light?: {
      backgroundColor: string
      color: string
      borderColor: string
    }
  }
  borderRadius?: number
  border?: number
  theme: 'dark' | 'light'
}