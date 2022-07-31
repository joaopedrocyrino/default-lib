import React from 'react'

import { Text, ThemeChanger, Button } from '../../components'
import { useTheme, useAuth, useRouter } from '../../providers'
import { Container } from '../../layout'

export const NotFound: React.FC = () => {
    const { dark, pallete } = useTheme()
    const { token } = useAuth()
    const { setPath } = useRouter()

    const goBack = () => {
        if (token) {
            setPath('home')
        } else { setPath('login') }
    }

    return (
        <Container
            background={['background', 0, dark]}
            justify='center'
            gap={10}
        >
            <Text
                fontSize={60}
                lineHeight={1}
                // fontWeight={}
                text={pallete[0]}
            >
                404
            </Text>
            <Button
                height={50}
                width='80%'
                maxWidth={400}
                borderRadius={6}
                onClick={goBack}
            >
                Voltar
            </Button>
            <ThemeChanger top={15} />
        </Container>
    )
}
