import React from 'react'

import { useTheme } from '../../providers'
// import { Loader } from '../Loader'
// import ButtonStyle from './style'
import { Props } from './dto'
import { Container } from '../../layout'
import { PickDate } from '../PickDate'
import { PickTime } from '../PickTime'
import { DailyAppointmentCard } from '../DailyAppointmentCard'

export const Agenda: React.FC<Props> = () => {
  const theme = useTheme()

  return (
    <Container>
      <PickDate />
      {/* <PickTime value={['']} setValue={() => {}} /> */}
      <DailyAppointmentCard />
    </Container>
  )
}

// export type ButtonProps = Props
