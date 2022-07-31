import React from 'react'

import { Ring } from './style'
import { Props } from './dto'

import { useTheme } from '../../providers'

export const Loader: React.FC<Props> = ({ pallete, ...props }) => {
    const theme = useTheme()

    return (
        <Ring
            {...props}
            pallete={pallete ?? theme.pallete[0]}
        >
            <div />
            <div />
            <div />
            <div />
        </Ring>
    )
}

export type LoaderProps = Props
