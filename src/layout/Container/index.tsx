import React from 'react'

import { Props } from './dto'
import { Container as Div } from './style'
import { Loader } from '../../components'

export const Container: React.FC<Props> = ({
    children,
    loading,
    ...props
}) => {
    return (
        <Div {...props}>
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
