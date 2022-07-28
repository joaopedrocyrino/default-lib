import styled from 'styled-components'

import { ContentProps } from './dto'
import { constants } from '../../styles'

const { screenHeaderHeight } = constants

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

export const Container = styled(FlexBox)`
    height: 100%;
`

export const Content = styled(FlexBox) <ContentProps>`
    padding: 5vw;
    height: calc(100% - ${props => props.header ? screenHeaderHeight : 0});
`