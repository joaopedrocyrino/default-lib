import React from 'react'
import { Container } from '../../layout'
import { Props } from './dto'
import { Text } from '..'
import { useTheme } from '../../providers'
import moment from 'moment'

const mockAvailableHours = (): Date[] => {
  const date = new Date();
  const data = [
    date,
    moment(date).add(30, 'm').toDate(),
    moment(date).add(60, 'm').toDate(),
    moment(date).add(90, 'm').toDate(),
    moment(date).add(120, 'm').toDate(),
    moment(date).add(150, 'm').toDate(),
    moment(date).add(180, 'm').toDate(),
  ]

  return data
}

const formatTime = (dateTime: Date): { startTime: string, endTime: string } => {
  const momentTime = moment(dateTime)
  const startTime = momentTime.format('HH:mm')
  const endTime = moment(momentTime).add(30, 'minute').format('HH:mm')
  return { startTime, endTime }
}


export const PickTime: React.FC<Props> = ({ value, setValue }) => {
  return (
    <Container
      display='grid'
      gridTemplateColumns='1fr 1fr'
      height='auto'
      gap='0.5rem'
    >
      {mockAvailableHours().map((t, i) => {
        const { startTime, endTime } = formatTime(t)
        return (
          <SelectTimeCard
            key={i}
            text={`${startTime} - ${endTime}`}
            selected={value.includes(startTime)}
            onClick={
              value.includes(startTime) ?
                () => setValue(value.filter(e => e !== startTime)) :
                () => setValue([...value, startTime])
            }
          />
        )
      })}
    </Container>
  )
}

const SelectTimeCard: React.FC<{
  selected?: boolean,
  text: string,
  onClick: () => void,
}> = ({ selected, text, onClick }) => {
  const { pallete, dark } = useTheme()

  return (
    <Container
      onClick={onClick}
      borderRadius={6}
      height={40}
      justify='center'
      align='center'
      background={selected ? pallete[0] : ['background', 4, dark]}
    >
      <Text fontFamily='Inter' text={selected ? '#FFF' : ['text', 3, dark]}>{text}</Text>
    </Container>
  )
}