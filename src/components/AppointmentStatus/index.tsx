import React from 'react'
import { Container } from '../../layout'
import { CardType, Props } from './dto'
import { Icon } from '..'
import { TbQuestionMark } from 'react-icons/tb'
import { BsCheckCircle, BsXCircle } from 'react-icons/bs'



export const AppointmentStatus: React.FC<Props> = ({ value }) => {
  const getCardData = (t?: CardType) => {
    switch (t) {
      case 'accepted':
        return {
          backgroundColor: '#CFF3D4',
          icon: BsCheckCircle,
          iconBkg: '#3CCF4E'
        }

      case 'refused':
        return {
          backgroundColor: '#FF8B8B',
          icon: BsXCircle,
          iconBkg: '#cc3300'
        }

      default:
        return {
          backgroundColor: '#FBCFB7',
          icon: TbQuestionMark,
          iconBkg: '#EF5B0C'
        }
    }
  }

  return (
    <Container
      height={30}
      width={30}
      borderRadius='50%'
      background={getCardData(value).backgroundColor}
      align='center'
      justify='center'
    >
      <Icon Icon={getCardData(value).icon} iconColor={getCardData(value).iconBkg} />
    </Container>
  )
}