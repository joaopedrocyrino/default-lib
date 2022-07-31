import React from 'react'

import { useTheme } from '../../providers'
// import { Loader } from '../Loader'
// import ButtonStyle from './style'
import { Props } from './dto'
import { Container } from '../../layout'
import { PickDate } from '../PickDate'

export const Agenda: React.FC<Props> = () => {
  const { } = useTheme()

  return (
    <Container>
      <PickDate />
    </Container>
  )
}

// export type ButtonProps = Props
