import { constants } from '../styles'

export const stringOrNumber = (value: string | number) => {
    let res = `${value}`

    if (typeof value === 'number') {
        res += 'px'
    }

    return res
}

export type boxShaddowId = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6

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

export type backgroundId = 1 | 2 | 3 | 4 | 5 | 6 | 7

export const backgroundFormatter = (props: { dark?: boolean, background?: string | backgroundId }): string => {
    const background = props.background

    if (typeof background === 'string') { return background }
    const { colors } = constants

    if (props.dark) {
        return colors.background[background ?? 1].dark
    } else { return colors.background[background ?? 1].light }
}

export type textId = 1 | 2 | 3

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

export type colorPalleteId = 1 | 2 | 3 | 4
export type colorPalleteIntensityId = 0 | 1 | 2 | 3 | 4 | 5

export const palleteFormatter = (
    color?: string | colorPalleteId,
    instensity?: colorPalleteIntensityId
): string => {
    const { colors } = constants

    if (typeof color === 'string') { return color }

    return colors.colorPalletes[color ?? 1][instensity ?? 0]
}