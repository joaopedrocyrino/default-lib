import React, { useState } from 'react'
import { FaKey, FaUser, FaSearch } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

import { Container } from '../../layout'
import { IconContainer, Input as StyledInput, HideContainer } from './style'
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
    dark,
    ...containerProps
}) => {
    const [hide, setHide] = useState<boolean>(true)

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
        <Container {...containerProps} dark={dark} flexDirection='row'>
            {type === 'password' && (
                <IconContainer pallete={pallete}>
                    <FaKey />
                </IconContainer>
            )}
            {icon && (
                <IconContainer pallete={pallete}>
                    {getIcon()}
                </IconContainer>
            )}
            {customIcon && (
                <IconContainer pallete={pallete}>
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
                dark={dark}
            />
            {type === 'password' && (
                <HideContainer pallete={pallete}>
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
