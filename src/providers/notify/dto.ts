export interface INotifyProvider {
    notify: (msg: string, type?: CardType) => void
}

export type CardType = 'success' | 'warning' | 'error' | 'info'

export interface CardProps {
    type?: CardType
}
