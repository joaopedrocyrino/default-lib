import styled from 'styled-components'
import { AppointmentInfoContainerProps, FlexContainerProps, TextProps } from "./dto"

export const FlexContainer = styled.div<FlexContainerProps> `
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    align-items: ${props => props.alignItems || 'baseline'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    padding: ${props => props.padding
        ? `${props.padding}${typeof props.padding === 'string' ? '' : 'px'}`
        : '0'};
    margin: ${props => props.margin
        ? `${props.margin}${typeof props.margin === 'string' ? '' : 'px'}`
        : '0px'};
        width: ${props => props.width
        ? typeof props.width === 'string'
            ? props.width
            : `${props.width}px`
        : '100%'};
    height: ${props => props.height
        ? typeof props.height === 'string'
            ? props.height
            : `${props.height}px`
        : '100%'};
`

export const AppointmentInfoContainer = styled(FlexContainer) <AppointmentInfoContainerProps> `
    background-color: ${props => props.theme === 'dark'
        ? props.themeColors.dark.background
        : props.themeColors.light.background};
    background-color: ${props => props.backgroundColor || '#EBF1F9'};
    border-radius: ${props => props.borderRadius || 3}px;
`

export const Text = styled.p<TextProps> `
    margin: ${props => props.margin
        ? `${props.margin}${typeof props.margin === 'string' ? '' : 'px'}`
        : '0px'};
    font-size: ${props => props.fontSize || 16}px;
`