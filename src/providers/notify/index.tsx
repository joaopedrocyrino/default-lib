import React, { createContext, useContext, useState } from 'react'

import { INotifyProvider, CardType } from './dto'
import { Uuid } from '../../frameworks'

const NotifyContext = createContext({})

export const NotifyProvider: React.FC<{ children: any }> = ({ children }) => {
    const [cards, setCards] = useState<{ [k: string]: [string, CardType | undefined]  }>({})

    const removeCard = (id: string) => {
        const keepCards = { ...cards }

        delete keepCards[id]

        setCards(keepCards)
    }

    const notify = (msg: string, type?: CardType) => {
        const newCards = { ...cards }

        const newCard = Uuid.generate()

        newCards[newCard] = [msg, type]

        setTimeout(() => {
            removeCard(newCard)
        }, 3000)
    }

    return (
        <NotifyContext.Provider
            value={{
                notify
            }}
        >
            {children}
        </NotifyContext.Provider>
    )
}

export const useNotify = (): INotifyProvider => {
    const c = useContext<{ [k: string]: any }>(NotifyContext)
    return {
        notify: c.notify
    }
}
