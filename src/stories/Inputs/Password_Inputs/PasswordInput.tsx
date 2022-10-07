import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import classNames from 'classnames'
import './style.scss'

/**
 * Primary UI component for user interaction
 */
export const PasswordInput = () => {
    const [passwordValue, setPasswordValue] = useState('')

    const handlePAsswordValueChange = (event: any) => {
        setPasswordValue(event.target.value)
    }

    const passwordLength = (passwordValue) => {
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
