import { styledComponentUtils } from '../../utils'
import { ContainerProps } from '../../layout'

export interface Props extends ContainerProps {
    title?: string
    goBack?: () => void
}

// ======= STYLED COMPONENTS DTO ========== //

// export interface TextProps {
//     padding: boolean
// }

// export interface ContainerProps {
//     height?: string | number
//     fontSize?: string | number
//     boxShaddow?: styledComponentUtils.boxShaddowId
//     background?: string
//     color?: string
// }
