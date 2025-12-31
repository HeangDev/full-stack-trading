import React from 'react'

interface OptionProps {
    index?: number;
    isActive?: boolean;
    children: string;
    onClick?: (index: number, text: string) => void;
}

function cx(...parts: Array<string | false | undefined>) {
    return parts.filter(Boolean).join(" ");
}

export const Option: React.FC<OptionProps> = (props) => {
    return (
        <div className="select__item">

        </div>
    )
}

const Select = () => {
    return (
        <>
            
        </>
    )
}

export default Select