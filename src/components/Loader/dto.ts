import { styledComponentUtils } from '../../utils'

export interface Props {
    size?: string | number
    pallete?: [
        styledComponentUtils.colorPalleteId,
        styledComponentUtils.colorPalleteIntensityId
    ] 
    | [styledComponentUtils.colorPalleteId]
}
