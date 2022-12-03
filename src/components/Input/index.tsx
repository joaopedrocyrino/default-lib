import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiDoorLockLine, RiUser3Line } from 'react-icons/ri'

import { Container } from '../../layout'
import { useTheme } from '../../providers'
import { Props } from './dto'
import { HideContainer, IconContainer, Input as StyledInput } from './style'

export const Input: React.FC<Props> = ({
    placeholder,
    value,
    fontSize,
    type,
    inputmode,
    icon,
    customIcon,
    setValue,
    disabled,
    pallete,
    background,
    boxShaddow,
    border,
    ...containerProps
}) => {
    const [hide, setHide] = useState<boolean>(true)
    const theme = useTheme()

    const decorators = { pallete: pallete ?? theme.pallete[1], dark: theme.dark }

    const getIcon = (): React.ReactNode => {
        switch (icon) {
            case 'email':
                return <MdEmail />

            case 'user':
                return <RiUser3Line size={22} />

            default:
                return <FaSearch />
        }
    }

    return (
        <Container
            {...containerProps}
            background={background ?? ['background', 2, theme.dark]}
            flexDirection='row'
            position='relative'
            border={border ?? ['border', 0, theme.dark]}
        >
            {type === 'password' && (
                <IconContainer {...decorators}>
                    <RiDoorLockLine size={22} />
                </IconContainer>
            )}
            {icon && (
                <IconContainer {...decorators}>
                    {getIcon()}
                </IconContainer>
            )}
            {customIcon && (
                <IconContainer {...decorators}>
                    {customIcon}
                </IconContainer>
            )}
            <StyledInput
                type={type === 'password' && !hide ? 'text' : type}
                value={value}
                inputMode={inputmode}
                placeholder={placeholder}
                onClick={e => e.preventDefault()}
                onChange={e => setValue(e.target.value)}
                disabled={disabled}
                dark={theme.dark}
            />
            {type === 'password' && (
                <HideContainer {...decorators}>
                    {hide
                        ? <AiOutlineEye onClick={() => setHide(!hide)} />
                        : <AiOutlineEyeInvisible onClick={() => setHide(!hide)} />
                    }
                </HideContainer>
            )}
        </Container>
    )
}

export type InputProps = Props
