import React, { useState } from 'react'
import { FaKey, FaUser, FaSearch } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

import { IconContainer, Input as StyledInput, HideContainer } from './style'
import { useTheme } from '../../providers'
import { Container } from '../../layout'
import { Props } from './dto'

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
    ...containerProps
}) => {
    const [hide, setHide] = useState<boolean>(true)
    const theme = useTheme()

    const decorators = { pallete: pallete ?? theme.pallete[1] }

    const getIcon = (): React.ReactNode => {
        switch (icon) {
            case 'email':
                return <MdEmail />

            case 'user':
                return <FaUser />

            default:
                return <FaSearch />
        }
    }

    return (
        <Container
            {...containerProps}
            background={background ?? ['background', 1, theme.dark]}
            boxShaddow={boxShaddow ?? 2}
            flexDirection='row'
            position='relative'
        >
            {type === 'password' && (
                <IconContainer {...decorators}>
                    <FaKey />
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
                        ? <IoMdEye onClick={() => setHide(!hide)} />
                        : <IoMdEyeOff onClick={() => setHide(!hide)} />
                    }
                </HideContainer>
            )}
        </Container>
    )
}

export type InputProps = Props
