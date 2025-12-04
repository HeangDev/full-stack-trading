import React, { forwardRef, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

type CommonProps = {
    label?: string;
    helperText?: string;
    error?: boolean;
    required?: boolean;
    variant?: "outlined" | "filled" | "standard";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
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

const TelephoneField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
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
            className,
            multiline = false,
            rows = 3,
            value,
            defaultValue,
            onChange,
            ...rest
        },
        ref
    ) => {
        const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? "");
        const inputValue = value !== undefined ? value : uncontrolledValue;
        const float = inputValue !== undefined && String(inputValue).trim() !== "";
        const fieldLabel = externalLabel || label;
        const rootClass = cx("relative flex flex-col", fullWidth ? "w-full" : "w-auto", className);

        const controlClass = cx(
            "flex items-center"
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
            float ? "-top-3 text-sm " + (error ? "text-red-600 text-sm" : "text-theme-primary") : "-translate-y-1/2 text-sm " + (error ? "text-red-600" : "text-theme-secondary")
        );

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (value === undefined) {
                setUncontrolledValue(e.target.value);
            }
            onChange?.(e as any);
        };

        return (
            <div className={rootClass}>
                    <label className={labelClass}>
                        {fieldLabel} {required ? <span className="text-red-500">*</span> : null}
                    </label>
                    <div className={controlClass}>
                        <input
                            ref={ref as React.Ref<HTMLInputElement>}
                            className={cx(
                                "bg-transparent outline-none flex-1 w-full appearance-none",
                                inputClass
                            )}
                            value={inputValue}
                            onChange={handleChange}
                            defaultValue={defaultValue}
                            {...(rest as InputProps)}
                        />
                        <div className="">

                        </div>
                    </div>
                {helperText && (
                    <p className={cx("mt-2 text-xs", error ? "text-red-600" : "text-gray-500")}>
                        {helperText}
                    </p>
                )}
            </div>
        )
    }
)

TelephoneField.displayName = "TelephoneField";

export default TelephoneField;