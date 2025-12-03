import React, { useState, useEffect, useRef } from 'react'
import clsx from "clsx"
import { Icon } from '@iconify/react'

interface LabelProps extends textFieldProps {
    labelName?: string;
}

interface textFieldProps {
    type?: "text" | "number" | "password";
    endAdornment?: React.ReactElement;
    disabled?: boolean;
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Label: React.FC<LabelProps> = (props) => {
    return(
        <label className="input__container__label">
            {props.labelName}
        </label>
    )
}

export const FormControl: React.FC<{
    children?: React.ReactNode,
}> = (props) => {
    return (
        <>
            <div className="input__container">
                {props.children}
            </div>
        </>
    )
}

export const TextField: React.FC<textFieldProps> = (props) => {
    const [value, setValue] = useState(props.value || "");
    const [showPassword, setShowPassword] = useState(false);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setValue(props.value || '');
    }, [props.value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onChange?.(e);
    };

    const togglePasswordVisibility = () => {
        if (passwordInputRef.current) {
            setShowPassword((prev) => !prev)
            passwordInputRef.current.type = showPassword ? "password" : "text"
        }
    }

    return (
            <>
                <input
                    className={clsx(
                        "input__container__input peer",
                        props.type === "password" && "passwordInput",
                        props.type === "number" && "phoneInput"
                    )}
                    ref={props.type === "password" ? passwordInputRef : undefined}
                    type={props.type === "password" && showPassword ? "text" : props.type}
                    placeholder={props.placeholder}
                    value={value} onChange={handleChange}
                />
                {props.type === "password" && !props.endAdornment && (
                    <div
                        className="password__toggle"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <Icon icon="solar:eye-broken" width="24" height="24" /> : <Icon icon="solar:eye-closed-bold-duotone" width="24" height="24" />}
                    </div>
                )}
                {props.endAdornment && props.endAdornment}
            </>
    )
}