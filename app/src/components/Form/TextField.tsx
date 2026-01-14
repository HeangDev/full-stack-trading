import React, { forwardRef, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import IcClear from "../../assets/img/ic/ic_clear.png"

type CommonProps = {
    label?: string;
    error?: boolean;
    required?: boolean;
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

function cx(...parts: Array<string | false | undefined>) {
    return parts.filter(Boolean).join(" ");
}

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
    (
        {
            label,
            externalLabel,
            error = false,
            required = false,
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
        const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? "");
        const [focused, setFocused] = useState(false);

        const inputValue = value !== undefined ? value : uncontrolledValue;
        const fieldLabel = externalLabel || label;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (value === undefined) {
                setUncontrolledValue(e.target.value);
            }
            onChange?.(e as any);
        };

        const handleFocus = (e: React.FocusEvent<any>) => {
            setFocused(true);
            onFocus?.(e);
        };


        const handleBlur = (e: React.FocusEvent<any>) => {
            setFocused(false);
            onBlur?.(e);
        };

        const handleClear = () => {
            if (value === undefined) {
                setUncontrolledValue("");
            } else {
                onChange?.({ target: { value: "" } } as any);
            }
        };

        const inputClass = cx(
            error && "is__valid", // add class if error
            className
        );

        const InputElement = multiline ? (
            <textarea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                rows={rows}
                value={inputValue}
                onChange={handleChange}
                className={inputClass}
                defaultValue={defaultValue}
                {...(rest as TextareaProps)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        ) : (
            <input
                ref={ref as React.Ref<HTMLInputElement>}
                value={inputValue}
                onChange={handleChange}
                className={inputClass}
                defaultValue={defaultValue}
                {...(rest as InputProps)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        );

        return (
            <>
                {fieldLabel && (
                    <label className="form__label">
                        {fieldLabel}
                    </label>
                )}
                <div className="form__input">
                    {startAdornment}
                    {InputElement}
                    {focused && (
                        <div onMouseDown={(e) => e.preventDefault()} onClick={handleClear} className="btn__clear">
                            <img src={IcClear} alt="Clear" />
                        </div>
                    )}
                    {endAdornment}
                </div>
            </>
        )
    }
)

export default TextField