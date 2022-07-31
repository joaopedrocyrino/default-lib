import React from 'react'

import { Props } from './dto'
import { Container as Div } from './style'
import { Loader } from '../../components'
import { useTheme } from '../../providers'

export const Container: React.FC<Props> = ({
    children,
    loading,
    ...props
}) => {
    const { dark } = useTheme()

    return (
        <Div {...props} dark={dark}>
            {!!loading
                ? (
                    <Div justify='center'>
                        <Loader {...(typeof loading === 'boolean' ? {} : loading)} />
                    </Div>
                )
                : children
            }
        </Div>
    )
}

export type ContainerProps = Props
