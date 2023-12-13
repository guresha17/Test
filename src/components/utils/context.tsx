// DataContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import Statue from '@/interfaces/statuesInterface';

interface DataContextProps {
    responseData: Statue[];
    setResponseData: React.Dispatch<React.SetStateAction<Statue[]>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [responseData, setResponseData] = useState<Statue[]>([]);

    return (
        <DataContext.Provider value={{ responseData, setResponseData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};
