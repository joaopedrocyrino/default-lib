import styled from 'styled-components'

import { CardProps } from './dto'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const Card = styled.div<CardProps>`
    width: 100%;
    height: 60px;
    background-color: ${props => props.type === 'success'
        ? '#2e7d32'
        : props.type === 'warning'
            ? '#ed6c02'
            : props.type === 'info'
                ? '#0288d1'
                : '#d32f2f'
    };
    color: #fff;
`