import React from 'react'
import Search from './search'
import Button from './button'
import { Row, Col, Typography } from 'antd'

const Subheader: React.FC = () => {
    return (
        <>
            <Row className='h-28 flex'>
                <Col xs={8} className='self-center'>
                    <Row className='flex mb-3' justify={'center'}>
                        <Col xs={3} md={6} lg={4} xl={3} className='flex justify-center'>
                            <Typography className='text-brown font-nunito'>Home</Typography>
                        </Col>
                        <Col xs={1} md={2} lg={2} xl={1} className='self-center'>
                            <img src='/assets/images/CaretRight.png' alt='right arrow' />
                        </Col>
                        <Col xs={3} md={6} lg={4} xl={3} className='flex justify-center'>
                            <Typography className='font-nunito'>Artifacts</Typography>
                        </Col>
                    </Row>
                    <Row className='flex' justify={'center'}>
                        <Typography className='text-3xl font-bitter md:text-2xl lg:text-3xl'>Artifacts</Typography>
                    </Row>
                </Col>
                <Col xs={8} className='self-center'>
                    <Search/>
                </Col>
                <Col xs={8} className='flex justify-center self-center'>
                    <Button text='SURPRISE ME' image='/assets/images/Confetti.png' backgroundColor='bg-grey' color='text-brown' borderStyle='border-solid' borderColor='border-grey' boxShadow='shadow-md'/>
                </Col>
            </Row>

        </>
    )
}

export default Subheader