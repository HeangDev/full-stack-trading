import React, { forwardRef, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

type CommonProps = {
    label?: string;
    helperText?: string;
    error?: boolean;
    required?: boolean;
    variant?: "outlined" | "filled" | "standard";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    className?: string;
    externalLabel?: string;
}

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">
type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & {
    row?: number;
}

type Props = CommonProps & (InputProps | TextareaProps) & {
    multiline?: boolean;
    rows?: number;
}

const sizeStyles = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-3 text-base",
    large: "px-6 py-[19px]",
}

const variantBase = {
    outlined: "border border-theme-gray rounded-3xl border border-theme-gray bg-transparent appearance-none",
    filled: "bg-gray-100 rounded-md",
    standard: "border-b",
}

function cx(...parts: Array<string | false | undefined>) {
    return parts.filter(Boolean).join(" ");
}

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    (
        {
            label,
            externalLabel,
            helperText,
            error = false,
            required = false,
            variant = "outlined",
            size = "large",
            fullWidth = false,
            startAdornment,
            endAdornment,
            className,
            multiline = false,
            rows = 3,
            value,
            defaultValue,
            onChange,
            onFocus,
            onBlur,
            ...rest
        },
        ref
    ) => {
        const [focused, setFocused] = useState(false);
        const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? "");

        const inputValue = value !== undefined ? value : uncontrolledValue;
        const float = focused || (inputValue !== "" && inputValue !== undefined);
        const fieldLabel = externalLabel || label;
        const rootClass = cx("relative flex flex-col", fullWidth ? "w-full" : "w-auto", className);

        const controlClass = cx(
            "flex items-center gap-2"
        );

        const inputClass = cx(
            variantBase[variant],
            sizeStyles[size],
            error ? "border-theme-danger focus-within:border-theme-danger focus-within:ring-theme-danger" : "border-theme-gray focus-within:border-theme-primary focus-within:ring-theme-primary",
            variant === "filled" ? "border-transparent" : "",
            "transition-all duration-150"
        );

        const labelClass = cx(
            "absolute left-6 pointer-events-none bg-white transition-all duration-150 px-2 leading-[26px]",
            error ? "text-red-600" : "text-gray-600",
            float ? "-top-3 text-sm " + (error ? "text-red-600 text-sm" : "text-theme-primary") : "top-1/2 -translate-y-1/2 text-base " + (error ? "text-red-600 -translate-y-6" : "text-theme-secondary")
        );


        const handleFocus = (e: React.FocusEvent<any>) => {
            setFocused(true);
            onFocus?.(e);
        };


        const handleBlur = (e: React.FocusEvent<any>) => {
            setFocused(false);
            onBlur?.(e);
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (value === undefined) {
                setUncontrolledValue(e.target.value);
            }
            onChange?.(e as any);
        };

        const InputElement = multiline ? (
            <textarea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                rows={rows}
                className={cx(
                    "resize-none bg-transparent outline-none flex-1 w-full",
                    inputClass
                )}
                value={inputValue}
                onChange={handleChange}
                defaultValue={defaultValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...(rest as TextareaProps)}
            />
        ) : (
            <input
                ref={ref as React.Ref<HTMLInputElement>}
                className={cx(
                    "bg-transparent outline-none flex-1 w-full appearance-none",
                    inputClass
                )}
                value={inputValue}
                onChange={handleChange}
                defaultValue={defaultValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...(rest as InputProps)}
            />
        );

        return (
            <div className={rootClass}>
                {fieldLabel && (
                    <label className={labelClass}>
                        {fieldLabel} {required ? <span className="text-red-500">*</span> : null}
                    </label>
                )}
                    <div className={controlClass}>{startAdornment}{InputElement}{endAdornment}</div>
                {helperText && (
                    <p className={cx("mt-2 text-xs", error ? "text-red-600" : "text-gray-500")}>
                        {helperText}
                    </p>
                )}
            </div>
        )
    }
)

TextField.displayName = "TextField";

export default TextField;