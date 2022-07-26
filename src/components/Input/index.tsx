import React from 'react'
import { FaKey, FaUser, FaSearch } from 'react-icons/fa'
import { MdEmail } from 'react-icons//md'

import {
    InputContainer,
    IconContainer,
    Input as StyledInput
} from './style'
import { InputProps as props } from './dto'

export const Input: React.FC<props> = ({
    width,
    height,
    icon,
    customIcon,
    type,
    value,
    setValue,
    inputmode,
    placeholder
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
        <InputContainer width={width} height={height}>
            {type === 'password'
                ? (
                    <IconContainer>
                        <FaKey />
                    </IconContainer>
                )
                : icon
                    ? (
                        <IconContainer>
                            {getIcon()}
                        </IconContainer>
                    )
                    : customIcon
                        ? (
                            <IconContainer>
                                {customIcon}
                            </IconContainer>
                        )
                        : null}
            <StyledInput
                type={type}
                inputMode={inputmode}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </InputContainer>
    )
}

export type InputProps = props
