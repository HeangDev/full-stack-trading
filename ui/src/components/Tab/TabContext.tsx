import React from 'react'

export type TabValue = string | number;

interface TabContextProps<T extends TabValue> {
    value: T;
    onChange?: (value: T) => void;
}

const TabContext = React.createContext<TabContextProps<any> | null>(null);

export const useTabContext = () => {
    const ctx = React.useContext(TabContext);
    if (!ctx) {
        throw new Error('Tab components must be used inside <TabContext>');
    }
    return ctx;
};

interface TabContextProviderProps<T extends TabValue> {
    value: T;
    onChange?: (value: T) => void;
    children: React.ReactNode;
}

const TabContextProvider = <T extends TabValue> ({
    value,
    onChange,
    children,
}: TabContextProviderProps<T>) => {
    return (
        <TabContext.Provider value={{ value, onChange }}>
            {children}
        </TabContext.Provider>
    )
}

export default TabContextProvider