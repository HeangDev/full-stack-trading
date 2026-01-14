import React from 'react'

interface HelperTextProps {
    children?: React.ReactNode;
    error?: boolean;
}

const HelperText: React.FC<HelperTextProps> = (props) => {
    if (!props.children) return null;
    return (
        <div className={props.error ? "invalid__feedback" : "helper__text"}>
            {props.children}
        </div>
    )
}

export default HelperText