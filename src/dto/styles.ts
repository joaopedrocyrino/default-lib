export type colorType = 'text' | 'background' | 'colorPalletes'

export type colorPallete = [string, string, string, string, string, string]

export type colorPalleteId = 1 | 2 | 3 | 4

export type colorPalleteLight = 0 | 1 | 2 | 3 | 4 | 5

export type color = string
    | colorPalleteLight
    | [
    colorType,
    textId
    | backgroundId
    | colorPalleteId,
    colorPalleteLight
    | boolean
    | undefined
]

type darkLight = { dark: string, light: string }

export type background = [darkLight, darkLight, darkLight, darkLight, darkLight, darkLight, darkLight]

export type backgroundId = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type text = [darkLight, darkLight, darkLight]

export type textId = 0 | 1 | 2

export type boxShaddow = [string, string, string, string, string, string, string, string]

export type boxShaddowId = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6

export type shaddow = boxShaddowId | string