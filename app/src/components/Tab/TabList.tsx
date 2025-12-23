import React from 'react'
import { useTabContext } from "./TabContext"

interface TabListProps {
    children: React.ReactNode;
    className?: string;
}

const TabList: React.FC<TabListProps> = ({
    children,
    className
}) => {
    const { value: activeValue, onChange } = useTabContext();
    const tabs = React.Children.toArray(children).filter(React.isValidElement) as React.ReactElement<any>[];

    return (
        <>
            <div className={`tabs ${className ?? ''}`}>
                {tabs.map((tab) => {
                    const isActive = tab.props.value === activeValue;
                    return (
                        <div
                            key={tab.props.value}
                            className={`tab__item ${isActive ? 'active' : ''}`}
                            onClick={() => onChange?.(tab.props.value)}
                        >
                            {tab.props.label}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TabList