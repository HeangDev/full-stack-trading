import React from 'react'
import clsx from 'clsx'

interface buttonProps {
    children?: React.ReactNode,
    startIcon?: string
    endIcon?: string
    variant?: "danger" | "primary"
    isDisabled?: boolean
    onClick?: () => void
    className?: string
    style?: React.CSSProperties
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<buttonProps> = (props) => {
    return (
        <>
            <button type={props.type} className={clsx("btn", props.variant, props.isDisabled && "disabled", props.className)} style={props.style} onClick={props.onClick}>
                {props.startIcon && <img src={props.startIcon}/>}
                {typeof props.children === 'string' || typeof props.children === 'number' ? <span>{props.children}</span> : props.children}
                {props.endIcon && <img src={props.endIcon}/>}
            </button>
        </>
    )
}

export default Button