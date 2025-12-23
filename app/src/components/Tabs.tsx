import React, { isValidElement } from 'react'

interface TabProps {
    label: string;
    value?: string | number | undefined;
    children?: React.ReactNode;
}

interface TabsProps {
    children?: React.ReactNode;
    defaultValue?: string | number;
    onChange?: (value: string | number) => void;
    className?: string;
}

export const Tab: React.FC<TabProps> = (props) => {
    return <>{props.children}</>
}

const Tabs: React.FC<TabsProps> = (props) => {
    const tabs = React.Children.toArray(props.children).filter(isValidElement) as React.ReactElement<TabProps>[];

    const initialValue = props.defaultValue ?? (tabs.length > 0 ? tabs[0].props.value ?? 0 : undefined);

    const [activeTab, setActiveTab] = React.useState<string | number | undefined>(initialValue);

    const handleChangeTab = (value: string | number) => {
        setActiveTab(value)
        props.onChange?.(value)
    }
    return (
        <>
            <div className="tabs">
                {tabs.map((tab, index) => {
                    const value = tab.props.value ?? index;
                    return (
                        <div
                            key={index}
                            onClick={() => handleChangeTab(value)}
                            className={`tab__item ${activeTab === value ? "active" : ""}`}
                        >
                            {tab.props.label}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Tabs