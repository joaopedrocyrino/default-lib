export interface Props {
  value: string[]
  setValue: (s: string[]) => void | Promise<void>
}