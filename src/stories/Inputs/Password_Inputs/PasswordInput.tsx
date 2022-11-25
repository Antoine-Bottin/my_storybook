import { ReactElement } from 'react'
import { useState } from 'react'
import './style.scss'
import React from 'react'
import classNames from 'classnames'

interface Props {
    backgroundColor?: string
    borderColor?: string
    inputBackgroundColor?: string
}

export const PasswordInput = ({
    backgroundColor,
    borderColor,
    inputBackgroundColor,
}: Props) => {
    const [passwordValue, setPasswordValue] = useState('')

    const handlePAsswordValueChange = (event: any) => {
        setPasswordValue(event.target.value)
    }

    const passwordLength = (passwordValue: string): string => {
        if (passwordValue.length < 5) return 'bad'
        else if (passwordValue.length >= 5 && passwordValue.length <= 10)
            return 'good'
        else return 'perfect'
    }

    const passwordLengthClasses = classNames(
        'password-length',
        passwordLength(passwordValue)
    )

    const borderClasses = classNames()

    return (
        <div
            style={{
                height: '100vh',
                width: '100%',
                padding: '5rem',
                backgroundColor: backgroundColor,
            }}
        >
            <form>
                <input
                    style={{
                        border: `2px solid ${borderColor}`,
                        boxShadow: `0px 0px 15px${borderColor}`,
                        backgroundColor: inputBackgroundColor,
                    }}
                    className="password-input"
                    type="password"
                    value={passwordValue}
                    onChange={handlePAsswordValueChange}
                />
                <div className="bar_container">
                    <div className={passwordLengthClasses}></div>
                </div>
            </form>
        </div>
    )
}

PasswordInput.defaultProps = {
    backgroundColor: 'black',
    borderColor: 'red',
}
