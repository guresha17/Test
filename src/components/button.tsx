import React from 'react'
import ButtonProps from '../interfaces/buttonInterface'
import { Row, Col } from 'antd'

const Button: React.FC<ButtonProps> = ({ text, image, backgroundColor, color, borderStyle, borderColor, boxShadow }) => {


    console.log('backgroundColor:', backgroundColor); 

    return (
        <>
            <button className={`py-2 px-4 flex border font-nunito ${backgroundColor || 'bg-blue-500'} ${color} ${borderStyle} ${borderColor} ${boxShadow}`}>
                {image && <img src={image} alt="Button Image" />}
                {text}
            </button>
        </>
    )
}

export default Button