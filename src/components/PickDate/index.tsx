import React, { useEffect, useState } from 'react'
import moment from 'moment'

// import { CardContainer } from './style'
import { Props } from './dto'
import { useTheme } from '../../providers'
import { Scroll, Container } from '../../layout'
import { Text } from '../Text'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

const toUpperCase = (word: string): string => word[0].toUpperCase() + word.substring(1)

const formatWord = (month: string): string => {
    month = month.charAt(0).toUpperCase() + month.slice(1)
    month = month.substring(0, 3)
    return month
}

export const PickDate: React.FC<Props> = ({ past, years }) => {
    const [selectedDate, setSelectedDate] = useState<moment.Moment>(moment())
    const [monthsToRender, setMonthsToRender] = useState<Array<[string, number]>>([])
    const [yearsToRender, setYearsToRender] = useState<number[]>([])
    const [expand, setExpand] = useState<boolean>(false)
    // const [days, setDays] = useState<Array<{ name: string, number: number }>>([])
    const [days, setDays] = useState<Array<{ date: number, dayOfWeek: string }>>([])

    useEffect(() => {
        const now = moment()

        if (past || now.year() < selectedDate.year()) {
            setMonthsToRender(months.map((m, i) => [m, i]))
        } else {
            const offset = now.month()
            setMonthsToRender(months.slice(offset).map((m, i) => [m, i + offset]))
        }

        // if (past || now.month() < selectedDate.month()) {
        //     const daysToRender = selectedDate.daysInMonth()
        //     setDays(selectedDate.daysInMonth())
        // }
    }, [selectedDate])

    useEffect(() => {
        const now = moment()

        let daysInMonth = Array.from(Array(moment(`${selectedDate.format('YYYY')}-${selectedDate.format('MM')}`).daysInMonth()), (_, i) => i + 1);
        daysInMonth = selectedDate.format('MM') === now.format('MM') ? daysInMonth.filter(day => day >= Number(now.format('DD'))) : daysInMonth
        const daysOfTheWeek: Array<{ date: number, dayOfWeek: string }> = daysInMonth.map(day => {
            const d = moment(`${selectedDate.format('YYYY')}-${selectedDate.format('MM')}-${day}`).locale('pt-br').format('dddd')
            return { date: day, dayOfWeek: d }
        })
        setDays(daysOfTheWeek)
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
    }, [])

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
                    {toUpperCase(selectedDate.locale('pt-br').format('MMMM YYYY'))}
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
                                        selected={selectedDate.year() === y}
                                        onClick={() => {
                                            const now = moment()
                                            const newDate = moment(selectedDate).year(y)

                                            setSelectedDate(now.year() === y
                                                ? newDate.date(now.date()).month(now.month()).startOf('D')
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
                                        selected={selectedDate.month() === m[1]}
                                        onClick={() => {
                                            const newDate = moment(selectedDate).month(m[1])
                                            const now = moment()

                                            setSelectedDate(now.month() === m[1] && now.year() === selectedDate.year()
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
                        gap={10}
                    >
                        {days?.map((d, i) => (
                            <SelectDayCard
                                key={i}
                                day={d}
                                selected={selectedDate.date() === d.date}
                                onClick={() => {
                                    const now = moment()
                                    const newDate = moment(selectedDate).date(d.date)

                                    setSelectedDate(now.date() === d.date
                                        ? newDate.date(now.date()).month(now.month()).startOf('D')
                                        : newDate.startOf('d')
                                    )
                                }}
                            />
                        ))}
                    </Scroll>
                }
            </Container>
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
            background={selected ? pallete[0] : undefined}
            border={pallete[0]}
            borderRadius={6}
            justify='center'
            onClick={onClick}
        >
            <Text fontFamily='Inter' fontWeight={400} text={selected ? '#FFF' : pallete[0]}>{text}</Text>
        </Container>
    )
}

const SelectDayCard: React.FC<{
    onClick: () => void,
    day: {
        dayOfWeek: string,
        date: number
    },
    selected?: boolean,
    past?: boolean
}> = ({ onClick, day, selected }) => {
    const { pallete, dark } = useTheme()

    return (
        <Container
            onClick={onClick}
            width='50px'
            height='70px'
            background={selected ? pallete[0] : ['background', 4, dark]}
            justify='space-between'
            borderRadius={6}
        >
            <Text
                fontFamily='Inter'
                fontWeight={400}
                margin='0.75rem 0 0 0'
                text={selected ? '#FFF' : ['text', 2, dark]}
            >
                {formatWord(day.dayOfWeek)}
            </Text>
            <Text
                fontFamily='Inter'
                fontWeight={600}
                margin='0 0 0.75rem 0'
                text={selected ? '#FFF' : ['text', 2, dark]}
            >
                {day.date}
            </Text>
        </Container>
    )
}

export type PickDateProps = Props
