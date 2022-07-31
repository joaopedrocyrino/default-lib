import { colorPallete, colorPalleteId } from "../../dto/styles"

export interface Props {
    children: any
    color?: colorPalleteId | colorPallete
}

export interface IThemeProvider {
    dark: boolean,
    setDark: (b: boolean) => void
    pallete: colorPallete
}

