import React, { useEffect, useState } from 'react'
import moment from 'moment'

// import { CardContainer } from './style'
import { Props } from './dto'
import { useTheme } from '../../providers'
import { Scroll, Container } from '../../layout'
import { Text } from '../Text'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

export const PickDate: React.FC<Props> = ({ past, years }) => {
    const [selectedDate, setSelectedDate] = useState<moment.Moment>(moment())
    const [monthsToRender, setMonthsToRender] = useState<Array<[string, number]>>([])
    const [yearsToRender, setYearsToRender] = useState<number[]>([])
    const [expand, setExpand] = useState<boolean>(false)
    const [days, setDays] = useState<Array<{ name: string, number: number }>>([])

    useEffect(() => {
        const now = moment()

        if (past || now.year() < selectedDate.year()) {
            setMonthsToRender(months.map((m, i) => [m, i]))
        } else {
            const offset = now.month()
            setMonthsToRender(months.slice(offset).map((m, i) => [m, i + offset]))
        }

        // if (past || now.month() < selectedDate.month()) {
        //     setDays()
        // }
    }, [selectedDate])

    useEffect(() => {
        const limit = years ?? 1
        const yearsToShow = []
        const now = moment()

        if (past) {
            for (var i = limit; i > 0; i--) {
                yearsToShow.push(now.year() - i)
            }
        }

        yearsToShow.push(now.year())

        for (var i = 1; i <= limit; i++) {
            yearsToShow.push(now.year() + i)
        }

        setYearsToRender(yearsToShow)
    })

    return (
        <Container
            height={150}
            justify='space-between'
        >
            <Container
                flexDirection='row'
                fontSize={20}
                height={50}
                gap={10}
            >
                <Text fontSize={20} onClick={() => { setExpand(!expand) }}>
                    {selectedDate.locale('pt-br').format('MMMM YYYY').toUpperCase()}
                </Text>
                {expand
                    ? <IoIosArrowUp onClick={() => setExpand(false)} />
                    : <IoIosArrowDown onClick={() => setExpand(true)} />
                }
            </Container>
            <Container
                height={90}
                justify='center'
                gap={10}
            >
                {expand ?
                    (
                        <>
                            <Scroll
                                flexDirection='row'
                                height={30}
                                gap={8}
                            >
                                {yearsToRender.map((y, i) =>
                                    <SelectCard
                                        key={i}
                                        text={y}
                                        height={20}
                                        width={45}
                                        selected={selectedDate.year() === y}
                                        onClick={() => {
                                            const newDate = moment(selectedDate).year(y)
                                            const now = moment()

                                            setSelectedDate(now.year() === y
                                                ? newDate.date(now.date()).startOf('D')
                                                : newDate.startOf('y')
                                            )
                                        }}
                                    />
                                )}
                            </Scroll>
                            <Scroll
                                flexDirection='row'
                                height={40}
                                gap={8}
                            >
                                {monthsToRender.map((m, i) =>
                                    <SelectCard
                                        key={i}
                                        text={m[0]}
                                        height={30}
                                        width={70}
                                        selected={selectedDate.month() === m[1]}
                                        onClick={() => {
                                            const newDate = moment(selectedDate).month(m[1])
                                            const now = moment()

                                            setSelectedDate(now.month() === m[1]
                                                ? newDate.date(now.date()).startOf('D')
                                                : newDate.startOf('M')
                                            )
                                        }}
                                    />
                                )}
                            </Scroll>
                        </>
                    )
                    :
                    <Scroll
                        flexDirection='row'
                        height={80}
                    >

                    </Scroll>
                }
            </Container>
            {/* <Scroll
                flexDirection='row'
                height={80}
            >

            </Scroll> */}
        </Container>
    )
}

const SelectCard: React.FC<{
    text: string | number,
    selected?: boolean,
    onClick: () => void,
    height?: number | string
    width?: number | string
}> = ({ text, selected, onClick, height, width }) => {
    const { pallete, dark } = useTheme()

    return (
        <Container
            height={height ?? 30}
            width={width ?? 60}
            background={selected ? ['background', 2, dark] : undefined}
            border={pallete[0]}
            borderRadius={6}
            justify='center'
            onClick={onClick}
        >
            <Text text={selected ? pallete[0] : ['text', 2, dark]}>{text}</Text>
        </Container>
    )
}

export type PickDateProps = Props
