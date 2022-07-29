import styled, { keyframes } from 'styled-components'

import { styledComponentUtils } from '../../utils'
import { Props } from './dto'

const { palleteFormatter } = styledComponentUtils

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Ring = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;

    div {
        box-sizing: border-box;
        position: absolute;
        width: ${props => props.size ? props.size - 16 : 64}px;
        height: ${props => props.size ? props.size - 16 : 64}px;
        margin: 8px;
        border: 8px solid ${props => palleteFormatter(props.pallete)};
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => palleteFormatter(props.pallete)} transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`
