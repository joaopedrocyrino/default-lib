import React from 'react'

import { ScreenHeader } from '../../components'
import { constants } from '../../constants'
import { useTheme } from '../../providers'
import { Container } from '../../layout'
import { Props } from './dto'

const { screenHeaderHeight } = constants

export const Screen: React.FC<Props> = ({
    children,
    header,
    background,
    ...props
}) => {
    const { dark } = useTheme()

    return (
        <Container background={background ?? ['background', 0, dark]}>
            {!!header && <ScreenHeader {...(typeof header === 'boolean' ? {} : header)} height={screenHeaderHeight}/>}
            <Container
                width='90%'
                height={`calc(100% - ${!!header
                    ? `${screenHeaderHeight}px`
                    : '0px'
                    })`}
                {...props}
            >
                {children}
            </Container>
        </Container>
    )
}

export type ScreenProps = Props
