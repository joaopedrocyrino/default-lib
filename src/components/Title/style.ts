import { TitleProps } from './dto';
import styled from 'styled-components'
import { palleteToColor } from '../../utils/styledComponent';

export const TitleContainer = styled.h1<TitleProps>`
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Rubik'};
  font-style: ${props => props.fontStyle || 'normal'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 700};
  font-size: ${props => props.fontSize || 24}px;
  line-height: ${props => props.lineHeight || 19}px;
  color: ${props => palleteToColor(props.text ?? ['background', 0, props.dark])};
  margin: ${props => props.margin
    ? `${props.margin}${typeof props.margin === 'string' ? '' : 'px'}`
    : '0px'};
`