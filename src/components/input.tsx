import React, { useState } from 'react';
import InputProps from '../interfaces/inputInterface';
import { useDataContext } from './utils/context';

const Input: React.FC<InputProps> = ({ placeholder }) => {
    const { responseData, setResponseData } = useDataContext();
    const [searchQuery, setSearchQuery] = useState('');

    // Hold the original data separately
    const originalData = responseData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.toLowerCase();
        setSearchQuery(inputValue);

        if (inputValue === '') {
            // Reset to the original data when the input is empty
            setResponseData(originalData);
        } else {
            const filteredData = originalData.filter((item: any) =>
                item.name.toLowerCase().includes(inputValue)
            );

            setResponseData(filteredData);
        }
    };

    return (
        <>
            <input
                className='px-4 w-full font-nunito h-10'
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleInputChange}
            />
        </>
    );
};

export default Input;
