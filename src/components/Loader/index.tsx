import React from 'react'

import { Ring } from './style'
import { Props } from './dto'

export const Loader: React.FC<Props> = (props) => {

    return (
        <Ring  {...props}>
            <div />
            <div />
            <div />
            <div />
        </Ring>
    )
}

export type LoaderProps = Props
