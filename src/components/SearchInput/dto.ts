import { InputProps } from '../Input'

export interface Props extends Omit<InputProps, 'value' | 'setValue'> {
    onSearch: (s: string) => Promise<void> | void
    timeout?: number
}
