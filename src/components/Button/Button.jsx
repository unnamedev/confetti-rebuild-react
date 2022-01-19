import React from 'react'
import './Button.scss'

const Button = ({tagName: Tag, children, modClass, href, center = false, invert, withIco}) => {
    switch (Tag) {
        case "a" :
            return <Tag
                href={href}
                className={`button ${modClass} ${center ? "button--centered" : ""} ${invert ? "button--invert" : ""} ${withIco ? "button--with-ico" : ""}`}
            >
                {children}
            </Tag>
        case "button" :
            return <Tag
                className={`button ${modClass} ${invert ? "button--invert" : ""} ${withIco ? "button--with-ico" : ""}`}
            >
                {children}
            </Tag>
        default :
            return <button
                className={`button ${modClass} ${invert ? "button--invert" : ""} ${withIco ? "button--with-ico" : ""}`}
            >
                {children}
            </button>
    }
}

export default Button
