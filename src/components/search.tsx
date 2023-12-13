import React from 'react'
import Input from './input'
import Button from './button'
import { Row, Col } from 'antd'

const Search: React.FC = () => {
    return (
        <>
            <Row className='flex'>
                <Col xs={18} className='flex justify-end'>
                    <Input placeholder='Search' />
                </Col>
                <Col xs={6} className='flex justify-start'>
                    <Button text='SEARCH' backgroundColor='bg-brown' color='text-white' />
                </Col>
            </Row>
        </>
    )
}

export default Search