import React, { createContext, useContext, useState } from 'react'

import { Icon, Text } from '../../components'
import { Container } from '../../layout'
import { useTheme } from '../theme'
import { CardType, INotifyProvider } from './dto'

import { BsCheckCircle, BsXCircle } from 'react-icons/bs'
import { VscInfo, VscWarning } from 'react-icons/vsc'

const NotifyContext = createContext({})



export const NotifyProvider: React.FC<{ children: any }> = ({ children }) => {
    const [cards, setCards] = useState<[string, CardType | undefined]>(['', undefined])
    const [show, setShow] = useState<boolean>(false)
    const [timeoutid, setTimeoutid] = useState<NodeJS.Timeout>(setTimeout(() => { }, 0))
    const { dark } = useTheme()

    const getCardData = (t?: CardType) => {
        switch (t) {
            case 'success':
                return {
                    color: '#339900',
                    icon: BsCheckCircle
                }

            case 'info':
                return {
                    color: '#0dcaf0',
                    icon: VscInfo
                }

            case 'warning':
                return {
                    color: '#ffcc00',
                    icon: VscWarning
                }

            default:
                return {
                    color: '#cc3300',
                    icon: BsXCircle
                }
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
                        background={getCardData(cards[1]).color}
                        borderRadius={6}
                        bottom={10}
                        height='fit-content'
                        minHeight={45}
                        width='fit-content'
                        right='1vw'
                        position='absolute'
                        padding='0 1rem'
                        onClick={() => setShow(false)}
                        flexDirection='row'
                    >
                        <Icon Icon={getCardData(cards[1]).icon} iconColor={['background', 0, dark]} style={{ marginRight: '0.25rem'}} />
                        <Text
                            text={['background', 0, dark]}
                            fontSize={14}
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
