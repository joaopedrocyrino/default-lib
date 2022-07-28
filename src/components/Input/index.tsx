import React from 'react'
import { FaKey, FaUser, FaSearch } from 'react-icons/fa'
import { MdEmail } from 'react-icons//md'

import { Container } from '../../layout'
import { IconContainer, Input as StyledInput } from './style'
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
    ...containerProps
}) => {
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
            justify='center'
        >
            {type === 'password' && (
                <IconContainer>
                    <FaKey />
                </IconContainer>
            )}
            {icon && (
                <IconContainer>
                    {getIcon()}
                </IconContainer>
            )}
            {customIcon && (
                <IconContainer>
                    {customIcon}
                </IconContainer>
            )}
            <StyledInput
                type={type}
                value={value}
                inputMode={inputmode}
                placeholder={placeholder}
                onClick={e => e.preventDefault()}
                onChange={e => setValue(e.target.value)}
                disabled={disabled}
            />
        </Container>
    )
}

export type InputProps = Props
