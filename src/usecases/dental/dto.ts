
export interface Props {
    onLogin: (user: string, password: string) => Promise<string>
}
