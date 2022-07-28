import styled, { keyframes } from 'styled-components'

import { styledComponentUtils } from '../../utils'
import { Props } from './dto'

const { stringOrNumber, palleteFormatter } = styledComponentUtils

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Ring = styled.div<Props>`
    display: inline-block;
    position: relative;
    width: ${props => props.size ? stringOrNumber(props.size) : '80px'};
    height: ${props => props.size ? stringOrNumber(props.size) : '80px'};

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid ${props => palleteFormatter(props.pallete
    ? props.pallete[0]
    : undefined,
    props.pallete
        ? props.pallete[1]
        : undefined)};
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => palleteFormatter(props.pallete
            ? props.pallete[0]
            : undefined,
            props.pallete
                ? props.pallete[1]
                : undefined)} transparent transparent transparent;

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
