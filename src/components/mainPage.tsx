import React from 'react'
import Card from './card'
import { Row, Typography, Tag, Col } from 'antd'
import { useDataContext } from './utils/context';

const MainPage: React.FC = () => {

// const { responseData } = useDataContext();

// console.log(responseData, "responseData for checkbox");

// const checkboxLabel = responseData.length > 0 ? responseData[0].checkboxLabel : '';

    return (
        <>
            <div className='p-4'>
                <Row className='mb-5'>
                    <Typography className='font-nunito text-xl'>Showing 150 Items</Typography>
                </Row>
                <Row className='mb-5 flex'>
                    <Tag closeIcon className='flex h-10 font-nunito text-xl w-1/4 px-4 self-center pt-1.5 justify-between self-center'>
                        Guresha
                    </Tag>
                </Row>
                <Row justify={'space-between'}>
                    <Card />
                </Row>
            </div>

        </>
    )
}

export default MainPage