import React from 'react'
import { useTabContext } from './TabContext';

interface TabPanelProps {
    value: string | number;
    children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({
    value,
    children
}) => {
    const { value: activeValue } = useTabContext();

    if (value !== activeValue) return null;
    
    return <div className="tab__panel">{children}</div>
}

export default TabPanel