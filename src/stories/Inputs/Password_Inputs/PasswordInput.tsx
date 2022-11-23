import { ReactElement } from 'react'
import { useState } from 'react'
import './style.scss'
import * as React from 'react'
import * as classNames from 'classnames'

/**
 * Primary UI component for user interaction
 */
export const PasswordInput = () => {
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

    return (
        <form>
            <input
                type="password"
                value={passwordValue}
                onChange={handlePAsswordValueChange}
            />
            <div className="bar_container">
                <div className={passwordLengthClasses}></div>
            </div>
        </form>
    )
}

PasswordInput.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
}
