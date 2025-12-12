import React, { useState, useEffect, useRef } from 'react'

import IcTogglerDown from '../assets/img/ic/ic_down.png'
import IcTogglerUp from '../assets/img/ic/ic_up.png'
import IcSearch from '../assets/img/ic/ic_search.png'

interface OptionProps {
    index?: number;
    isActive?: boolean;
    children: string;
    onClick?: (index: number, text: string) => void;
}

interface SelectProps {
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    children: React.ReactNode;
    headerSearch?: boolean;
    style?: React.CSSProperties
}

const countryCodes = [
    { icon: "circle-flags:cn", label: "China", value: "+86"},
    { icon: "circle-flags:vn", label: "Vietnam", value: "+84"}
]

function cx(...parts: Array<string | false | undefined>) {
    return parts.filter(Boolean).join(" ");
}

export const Option: React.FC<OptionProps> = (props) => {
    return(
        <>
            <li className={cx(props.isActive && "on")} onClick={() => props.onClick?.(props.index || 0, props.children || '')}>
                <div>
                        
                </div> 
            </li>
        </>
    )
}

const Select: React.FC<SelectProps> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedText, setSelectedText] = useState<string>(String(props.value || ''));
    const [openCombo, setOpenCombo] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (index: number, text: string) => {
        setActiveIndex(index)
        setSelectedText(text)
        setOpenCombo(false);
    }

    const handleToggleCombo = () => {
        setOpenCombo((prev) => !prev);
    }

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenCombo(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className={cx("combo__control")} style={props.style} ref={dropdownRef}>
                <input type="text" value={selectedText} placeholder={props.placeholder} onClick={handleToggleCombo} onChange={handleToggleCombo}/>
                <div className={cx(openCombo && "on")} onClick={handleToggleCombo}>
                    <img src={openCombo ? IcTogglerUp : IcTogglerDown}/>
                </div>
                {openCombo && (
                    <>
                        <div className="combo__layer">
                            <div className="combo__search">
                                <input type="text"/>
                                <div className="btn__search"><img src={IcSearch}/></div>
                            </div>
                            <div className="combo__content">
                                <ul>
                                    {React.Children.map(props.children, (child, index) =>
                                        React.isValidElement<OptionProps>(child)
                                            ? React.cloneElement(child, {
                                                index,
                                                isActive: index === activeIndex,
                                                onClick: handleOptionClick,
                                            } as OptionProps)
                                            : child
                                    )}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Select;