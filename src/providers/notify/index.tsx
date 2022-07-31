import React, { createContext, useContext, useState } from 'react'

import { INotifyProvider, CardType } from './dto'
import { Container } from '../../layout'
import { Text } from '../../components'
import { useTheme } from '../theme'

const NotifyContext = createContext({})



export const NotifyProvider: React.FC<{ children: any }> = ({ children }) => {
    const [cards, setCards] = useState<[string, CardType | undefined]>(['', undefined])
    const [show, setShow] = useState<boolean>(false)
    const [timeoutid, setTimeoutid] = useState<NodeJS.Timeout>(setTimeout(() => { }, 0))
    const { dark } = useTheme()

    const getCardBackground = (t?: CardType) => {
        switch (t) {
            case 'success':
                return '#339900'

            case 'info':
                return '#0dcaf0'

            case 'warning':
                return '#ffcc00'

            default:
                return '#cc3300'
        }
    }

    const notify = (msg: string, type?: CardType) => {
        console.log('hii');

        setShow(true)
        setCards([msg, type])

        clearTimeout(timeoutid)

        const id = setTimeout(() => { setShow(false) }, 3000)

        setTimeoutid(id)
    }

    return (
        <NotifyContext.Provider
            value={{
                notify
            }}
        >
            <Container
                position='relative'
                display='block'
            >
                {children}
                {show && (
                    <Container
                        background={getCardBackground(cards[1])}
                        borderRadius={12}
                        top={10}
                        height='fit-content'
                        minHeight={45}
                        width='98%'
                        left='1vw'
                        position='absolute'
                        onClick={() => setShow(false)}
                    >
                        <Text
                            text={['background', 0, dark]}
                            fontSize={18}
                            fontWeight={600}
                        >
                            {cards[0]}
                        </Text>
                    </Container>
                )}
            </Container>
        </NotifyContext.Provider >
    )
}

export const useNotify = (): INotifyProvider => {
    const c = useContext<{ [k: string]: any }>(NotifyContext)
    return {
        notify: c.notify
    }
}
