import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

/**
 * Primary UI component for user interaction
 */
export const PasswordInput = () => {
    return (
        <form>
            <input type="password"></input>
            <div className="bar_container">
                <div id="password_length"></div>
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
