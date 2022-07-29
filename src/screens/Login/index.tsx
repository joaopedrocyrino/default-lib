import React, { useState } from 'react'

import { Input, Button } from '../../components'
import { useNotify } from '../../providers'
import { Container } from '../../layout'
import { Props } from './dto'

export const Login: React.FC<Props> = ({
    email,
    boxShaddow,
    pallete,
    background,
    inputBackground,
    dark,
    placeholder,
    onLogin,
    forgotPassword
}) => {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>()
    const { notify } = useNotify()

    const containerProps = { background, dark }
    const inputProps = {
        background: inputBackground ?? background ?? 2,
        height: 50,
        boxShaddow,
        dark,
        pallete,
    }

    const login = () => {
        if (user && password) {
            setLoading(true)

            onLogin(user, password)
                .catch(() => notify('Erro ao logar. Tente novamente'))
                .finally(() => setLoading(false))
        } else {
            notify('Informações necessária para login', 'warning')
        }
    }

    return (
        <Container
            {...containerProps}
            justify='center'
        >
            <Container
                justify='center'
                height={450}
                width='90%'
                maxWidth={400}
                gap={25}
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
                            pallete={pallete}
                            dark={dark}
                            mode={3}
                            fontSize={12}
                            width='fit-content'
                            onClick={forgotPassword}
                        >
                            Esqueceu a senha?
                        </Button>
                    </Container>
                )}
                <Button
                    height={50}
                    pallete={pallete}
                    dark={dark}
                    loading={loading}
                    onClick={login}
                >
                    Login
                </Button>
            </Container>
        </Container>
    )
}

export type LoginProps = Props
