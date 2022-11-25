import React, { ReactElement, useRef, useState } from 'react'

import './styles.scss'

export const BeforeAfterSlider = () => {
    const elementRef = useRef(null)

    const [mousePosition, setMousePosition] = useState({ X: 0, Y: 0 })
    const [elementWidth, setElementWidth] = useState(0)
    const [elementStartPosition, setElementStartPosition] = useState(0)
    const [leftPartWidth, setLeftPartWidth] = useState(0)

    const handleMouseMove = (event: any) => {
        setMousePosition({ X: event.clientX, Y: event.clientY })
        setLeftPartWidth(
            ((mousePosition.X - elementStartPosition) / (elementWidth - 2)) *
                100
        )
    }

    const handleElementInfo = (element: any) => {
        setElementWidth(element?.getClientRects()[0].width)
        setElementStartPosition(element?.getClientRects()[0].left)
    }

    return (
        <>
            <li>
                mousePosition : X = {mousePosition.X} Y = {mousePosition.Y}
            </li>
            <li>elementWidth: {elementWidth}</li>

            <div
                className="before-after-slider__container"
                ref={(el) => {
                    handleElementInfo(el)
                }}
                onMouseMove={handleMouseMove}
            >
                <div
                    className="before-after-container__left-part"
                    style={{
                        width: `${leftPartWidth}%`,
                    }}
                ></div>
                <div
                    className="before-after-container__right-part"
                    style={{
                        width: `${100 - leftPartWidth}%`,
                    }}
                ></div>
            </div>
        </>
    )
}

BeforeAfterSlider.defaultProps = {}
