import React from 'react'

const InputLabel: React.FC<{
    children?: React.ReactNode;
    required?: boolean;
    className?: string;
}> = (props) => {
    if (!props.children) return null;

    return (
        <label className={["form__label", props.className].filter(Boolean).join(" ")}>
            {props.children}
            {props.required && <span className="text__required">*</span>}
        </label>
    );
};

export default InputLabel