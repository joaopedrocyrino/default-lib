import React from 'react'

import { useTheme } from '../../providers'
import { Container } from '../../layout'
import { Props } from './dto'
import { IoSunny } from 'react-icons/io5'

export const ThemeChanger: React.FC<Props> = ({ top }) => {
  const { dark, setDark } = useTheme()

  return (
    <Container
      position='absolute'
      right={15}
      height='fit-content'
      width='fit-content'
      fontSize={30}
      top={top}
    >
      <IoSunny onClick={() => setDark(!dark)} />
    </Container>
  )
}

export type ThemeChanger = Props
