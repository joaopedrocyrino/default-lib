import React from 'react'
import { Container } from '../../layout'
import { useTheme } from '../../providers'
import { AppointmentStatus } from '../AppointmentStatus'
import { Text, Button, Icon } from '..'

import { BsCalendar3 } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'

export const DailyAppointmentCard: React.FC = () => {
  const { dark } = useTheme()

  return (
    <Container
      height='auto'
      width='100%'
      borderRadius={6}
      justify='center'
      background={['background', 2, dark]}
    >
      <Container
        display='flex'
        flexDirection='row'
        width='90%'
        margin='0.75rem 0 0.75rem'
      >
        <AppointmentStatus value='refused' />
        <Text margin='0 0 0 8px'>{'Marcelo Costa'}</Text>
        <Container
          height={5}
          width={5}
          borderRadius='50%'
          background='#DDDDDD'
          margin='0 0 0 8px'
        />
        <Text fontFamily='Inter' fontSize={14} text='#9CA3AF' margin='0 0 0 8px'>Ficha: B27I43</Text>
      </Container>
      <Container
        background='#1E293B'
        width='90%'
        borderRadius='3px'
        flexDirection='row'
        justify='center'
        padding={5}
      >
        <Container
          flexDirection='row'
          justify='center'
        >
          <Icon Icon={BsCalendar3} iconColor='#9CA3AF' />
          <Text fontFamily='Inter' fontSize={12} text='#9CA3AF'>Segunda, 28 de Set.</Text>
        </Container>
        <Container
          flexDirection='row'
          justify='center'
        >
          <Icon Icon={BiTimeFive} iconColor='#9CA3AF' />
          <Text fontFamily='Inter' fontSize={12} text='#9CA3AF'>11:00 - 11:30</Text>
        </Container>
      </Container>
      <Container
        display='flex'
        flexDirection='row'
        justify='space-around'
        margin='0.75rem 0 0.75rem'
      >
        <Button
          onClick={() => { }}
          borderRadius={6}
          text='#9CA3AF'
          width='40%'
          background='transparent'
          border='#4B5563'
        >
          Detalhes
        </Button>
        <Button
          onClick={() => { }}
          borderRadius={6}
          text='#FFF'
          width='40%'
        >
          Reagendar
        </Button>
      </Container>
    </Container>
  )
}