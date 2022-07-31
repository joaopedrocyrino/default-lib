import { constants } from '../constants'
import { color, shaddow } from '../dto/styles'

export const palleteToColor = (p?: color): string => {
    if (typeof p === 'string') { return p }

    if (Array.isArray(p)) {
        // @ts-ignore
        if (p[0] === 'colorPalletes') { return constants.colors[p[0]][p[1]][p[2] ?? 0] }
        // @ts-ignore
        return constants.colors[p[0]][p[1]][p[2] ? 'dark' : 'light']
    }

    return constants.colors.colorPalletes[1][p ?? 0]

}

export const stringOrNumber = (value?: string | number, field?: string) => {
    let res: string | undefined = undefined

    if (value) { res = `${value}` }

    if (typeof value === 'number') { res += 'px' }

    if (field) { return res ? `${field}: ${res};` : '' }

    return res
}

export const idToBoxSaddow = (bs?: shaddow): string => {
    if (typeof bs === 'string') { return bs }

    if (bs) {
        return constants.boxShaddow[bs + 1]
    }

    return 'none'
}
