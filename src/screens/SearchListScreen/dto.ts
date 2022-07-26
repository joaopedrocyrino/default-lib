export interface SearchListScreenProps {
    goBack?: () => void
    title: string
    search: string
    setSearch: (s: string) => void
    children: React.ReactNode[]
}
