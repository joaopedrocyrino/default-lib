import React, { useState } from 'react'

import { useNotify, useTheme, useAuth, useRouter } from '../../providers'
import { Input, Button, ThemeChanger } from '../../components'
import { Container } from '../../layout'
import { Screen } from '../Screen'
import { Props } from './dto'

export const Login: React.FC<Props> = ({
    email,
    boxShaddow,
    background,
    inputBackground,
    placeholder,
    onLogin,
    forgotPassword
}) => {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const { notify } = useNotify()
    const { dark, pallete } = useTheme()
    const { setToken } = useAuth()
    const { setPath } = useRouter()

    const containerProps = { background }
    const inputProps = {
        background: inputBackground,
        borderRadius: 6,
        height: 50,
        boxShaddow
    }

    const login = () => {
        if (user && password) {
            setLoading(true)

            onLogin(user, password)
                .then(token => { 
                    setToken(token)
                    setPath('home')
                 })
                .catch(() => notify('Erro ao logar. Tente novamente'))
                .finally(() => setLoading(false))
        } else {
            notify('Informações necessária para login', 'warning')
        }
    }

    return (
        <Screen {...containerProps} justify='center'>
            <Container
                justify='center'
                height={450}
                width='90%'
                maxWidth={400}
                gap={30}
                {...containerProps}
            >
                <Input
                    value={user}
                    setValue={setUser}
                    icon={email ? 'email' : 'user'}
                    placeholder={placeholder ?? email ? 'Email' : 'Usuário'}
                    {...inputProps}
                />

                <Input
                    value={password}
                    setValue={setPassword}
                    placeholder='Senha'
                    {...inputProps}
                    type='password'
                />
                {forgotPassword && (
                    <Container {...containerProps} height={20} align='flex-end'>
                        <Button
                            background={['background', 0, dark]}
                            onClick={forgotPassword}
                            width='fit-content'
                            text={pallete[0]}
                        >
                            Esqueceu a senha?
                        </Button>
                    </Container>
                )}
                <Button
                    height={50}
                    loading={loading}
                    onClick={login}
                    borderRadius={6}
                >
                    Login
                </Button>
            </Container>
            <ThemeChanger top={15} />
        </Screen>
    )
}

export type LoginProps = Props
