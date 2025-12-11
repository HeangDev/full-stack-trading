import React, { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "contained" | "outlined";
type ButtonColor = "primary" | "danger" | "success" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  fullWidth?: boolean;
}

function cx(...parts: Array<string | false | undefined>) {
    return parts.filter(Boolean).join(" ");
}

const variantClasses = {
    contained: {
        primary: "btn__primary",
        danger: "btn__danger",
        success: "btn__success",
        secondary: "btn__secondary"
    },
    outlined: {
        secondary: "btn__secondary__outlined",
        danger: "btn__danger__outlined",
        primary: "btn__primary__outlined",
        success: "btn__success__outlined"
    }
}

const disabledClasses = "btn__disabled";

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "contained",
    color = "primary",
    fullWidth = false,
    disabled = false,
    className,
    ...rest
}) => {
    return (
        <>
            <button
                className={cx(
                    "btn",
                    variantClasses[variant][color],
                    disabled && disabledClasses,
                    className
                )}
                {...rest}
            >
                {children}
            </button>
        </>
    )
}

export default Button