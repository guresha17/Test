import React, { useState } from 'react'
import InputProps from '../interfaces/inputInterface'
import { useDataContext } from './utils/context';


const Input: React.FC<InputProps> = ({ placeholder }) => {

    const { responseData, setResponseData } = useDataContext();
    const [searchQuery, setSearchQuery] = useState('');


    console.log(responseData, "response data for search input")


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.toLowerCase();
        setSearchQuery(inputValue);

        if (inputValue === '') {
            setResponseData(responseData);
        } else {
            const filteredData = responseData.filter((item: any) =>
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
    )
}

export default Input