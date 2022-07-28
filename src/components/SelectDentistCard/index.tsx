import React from 'react'
import { Button, Card, Title } from '..'
import { SelectDentistCardProps as props } from './dto'
import { AppointmentInfoContainer, FlexContainer, Text } from './style'
import { VscCalendar } from 'react-icons/vsc'
import { FiClock } from 'react-icons/fi'

export const SelectDentistCard: React.FC<props> = ({
  theme,
  themeColors
}) => {
  return (
    <Card
      theme={theme}
      themeColors={themeColors}
      padding='0.75rem'
    >
      <FlexContainer
        margin='0 0 0.5rem 0'
        alignItems='center'
        justifyContent='space-between'
      >
        <FlexContainer
          flexDirection='column'
          justifyContent='center'
        >
          <Title
            fontSize={16}
            color='#272C32'
          >
            Dr. Márcio Antunes
          </Title>
          <div>Odontologista</div>
        </FlexContainer>
        <AppointmentInfoContainer
          flexDirection='column'
          justifyContent='space-around'
          padding={10}
          height={90}
        >
          <Title
            fontSize={16}
            color='#084594'
            margin={0}
          >Próximo Disponível</Title>
          <FlexContainer alignItems='center' margin={0} width='fit-content' height='fit-content'>
            <VscCalendar />
            <Text fontSize={12} margin='0 0 0 0.5rem'>Segunda, 28 de Setembro</Text>
          </FlexContainer>
          <FlexContainer alignItems='center' margin={0} width='fit-content' height='fit-content'>
            <FiClock />
            <Text fontSize={12} margin='0 0 0 0.5rem'>11:00 - 11:30</Text>
          </FlexContainer>
        </AppointmentInfoContainer>
      </FlexContainer>
      <Button
        theme={theme}
        themeColor={{
          light: {
            backgroundColor: '#084594',
            color: '#FFF'
          },
        }}
        height={40}
      >Agendar</Button>
    </Card>
  )
}