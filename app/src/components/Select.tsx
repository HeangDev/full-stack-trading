import React from 'react'
import TextField from './Form/TextField';

import { Icon } from '@iconify/react';

interface OptionProps {
    index?: number;
    isActive?: boolean;
    value?: string;
    label?: React.ReactNode;
    children: React.ReactNode;
    onClick?: (index: number, value?: string, label?: React.ReactNode) => void;
}

interface SelectProps {
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    children: React.ReactNode;
    headerSearch?: boolean;
    style?: React.CSSProperties;
    onChange?: (value: string) => void;
}

function cx(...parts: Array<string | false | undefined>) {
    return parts.filter(Boolean).join(" ");
}

export const Option: React.FC<OptionProps> = (props) => {
    return (
        <li
            className={cx(props.isActive && "on")}
            onClick={() =>
                props.onClick?.(
                    props.index || 0,
                    props.value,
                    props.label
                )
            }
        >
            {props.children}
        </li>
    )
}

export const Select: React.FC<SelectProps> = (props) => {
    const [search, setSearch] = React.useState('');
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [selectedValue, setSelectedValue] = React.useState<string | undefined>();
    const [selectedLabel, setSelectedLabel] = React.useState<React.ReactNode>();
    const [openSelect, setOpenSelect] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const option = React.Children.toArray(props.children).filter(
        (child) => React.isValidElement<OptionProps>(child)
    )

    const handleOptionClick = (index: number, value: string, label?: React.ReactNode) => {
        setActiveIndex(index);
        setSelectedValue(value);
        setSelectedLabel(label);
        setOpenSelect(false);
        props.onChange?.(value); 
    }

    const handleToggleCombo = () => {
        setOpenSelect((prev) => !prev);
    }

    const filteredOptions = option.filter((child) => {
        if (!React.isValidElement<OptionProps>(child)) return false;

        const text =
            typeof child.props.children === 'string'
                ? child.props.children
                : String(child.props.children || "")
        return text.toLowerCase().includes(search.toLowerCase())
    });

    React.useEffect(() => {
        if (option.length === 0) return;
        if (selectedValue !== undefined) return;

        const first = option[0];

        if (React.isValidElement<OptionProps>(first)) {
            setActiveIndex(0);
            setSelectedValue(first.props.value);
            setSelectedLabel(first.props.label ?? first.props.children);
        }
    }, [option, selectedValue]);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenSelect(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <>
            <div className="form__select" style={props.style} ref={dropdownRef}>
                <div className="select__btn" onClick={handleToggleCombo} onChange={handleToggleCombo}>
                    <div className="select__selected">
                        {selectedLabel}
                    </div>
                    <div className="select__toggler">
                        <Icon icon={
                            openSelect
                                ? "solar:alt-arrow-up-linear"
                                : "solar:alt-arrow-down-linear"
                        } />
                    </div>
                </div>
                {openSelect && (
                    <>
                        <div className="select__menu">
                            {props.headerSearch && (
                                <div className="select__search">
                                    <TextField type="text" fullWidth placeholder="Search"
                                        value={search}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                            setSearch(e.target.value)
                                        }
                                    />
                                </div>
                            )}
                            <div className="select__list">
                                {filteredOptions.length === 0 ? (
                                    <div className="select__no__data">No results found</div>
                                ) : (
                                    <ul>
                                        {filteredOptions.map((child, index) =>
                                            React.isValidElement<OptionProps>(child)
                                                ? React.cloneElement(child, {
                                                    index,
                                                    isActive: index === activeIndex,
                                                    onClick: handleOptionClick,
                                                } as OptionProps)
                                                : child
                                        )}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}