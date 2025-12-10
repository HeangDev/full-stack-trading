import React, { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "contained";
type ButtonSize = "large";
type ButtonColor = "primary" | "error";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
}

function cx(...parts: Array<string | false | undefined>) {
    return parts.filter(Boolean).join(" ");
}

const baseClasses = "flex items-center justify-center w-full h-[60px] rounded-3xl cursor-pointer";

const sizeClasses = {
    large: "px-6 py-3 text-lg",
}

const variantClasses = {
    contained: {
        primary: "bg-theme-primary text-white",
        error: "bg-theme-danger text-white",
    }
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "contained",
    size = "large",
    color = "primary",
    fullWidth = false,
    className,
    ...rest
}) => {
    return (
        <>
            <button
                className={cx(
                    baseClasses,
                    sizeClasses[size],
                    variantClasses[variant][color],
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