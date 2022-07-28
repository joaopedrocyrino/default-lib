

export interface Props extends InputProps {
    onSearch: (s: string) => Promise<void> | void
    timeout?: number
}

export interface InputProps {
    placeholder?: string
}

type t = Omit<InputProps, 'placeholder' | 'value' | 'setValue'>