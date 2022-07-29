import { constants } from '../styles'
import {
    pallete,
    palleteId,
    palleteIntensityId,
    boxShaddowId,
    backgroundId,
    textId
} from '../dto'

export const stringOrNumber = (value: string | number) => {
    let res = `${value}`

    if (typeof value === 'number') {
        res += 'px'
    }

    return res
}

export const boxShaddowFormatter = (bs?: string | boxShaddowId) => {
    if (bs) {
        if (typeof bs === 'string') { return bs }

        return idToBoxShaddow(bs)
    }

    return 'none'
}

export const idToBoxShaddow = (id: boxShaddowId) => {
    const { boxShaddow } = constants

    return boxShaddow[id + 1]
}

export const backgroundFormatter = (props: { dark?: boolean, background?: string | backgroundId }): string => {
    const background = props.background

    if (typeof background === 'string') { return background }
    const { colors } = constants

    if (props.dark) {
        return colors.background[background ?? 1].dark
    } else { return colors.background[background ?? 1].light }
}


export const textFormatter = (props: {
    dark?: boolean,
    color?: string | textId
}): string => {
    const color = props.color

    if (typeof color === 'string') { return color }
    const { colors } = constants

    if (props.dark) {
        return colors.text[color ?? 1].dark
    } else { return colors.text[color ?? 1].light }
}

export const borderFormatter = (props: {
    dark?: boolean,
    color?: string | backgroundId
}): string => {
    const color = props.color
    const { colors } = constants

    if (color) {
        if (typeof color === 'string') { return color }

        if (props.dark) {
            return colors.background[color].dark
        } else { return colors.background[color].light }
    }

    return 'none'
}

export const palleteFormatter = (pallet?: pallete): string => {
    const { colors } = constants

    let color: palleteId = 1
    let intensity: palleteIntensityId = 0

    if (typeof pallet === 'string') { return pallet }

    if (pallet) {
        color = pallet[0]
        if (pallet[1]) { intensity = pallet[1] }
    }

    return colors.colorPalletes[color][intensity]
}