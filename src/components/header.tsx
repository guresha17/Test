import { Col, Row, Typography } from 'antd'
import React from 'react'


const Header: React.FC = () => {
    return (
        <>
            <Row className='bg-white h-24 w-full'>
                <Col xs={12} md={7} xl={12}>
                    <Row className='h-full flex'>
                        <Col xs={4} md={5} className='flex justify-center self-center'>
                            <img src="/assets/images/Group 19292.png" alt="MVerse"/>
                        </Col>
                        <Col xs={20} md={19} className='self-center'>
                            <img src="/assets/images/Group 19291.png" alt="MueseumVerse"/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={17}  xl={12}>
                    <Row className='h-full'>
                        <Col xs={6}>
                            <Row className='h-full flex'>
                                <Col xs={4} md={4} className='self-center'>
                                    <img src="/assets/images/House.png" alt="House" />
                                </Col>
                                <Col xs={20} md={20} className='self-center'>
                                    <Typography className='font-nunito text-xl md:text-lg'>HOME</Typography>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <Row className='h-full flex'>
                                <Col xs={4} md={4} className='self-center'>
                                    <img src="/assets/images/CodesandboxLogo.png" alt="Artifacts" />
                                </Col>
                                <Col xs={20} md={20} className='self-center'>
                                    <Typography className='font-nunito text-xl md:text-lg'>ARTIFACTS</Typography>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <Row className='h-full flex'>
                                <Col xs={4} md={4} className='self-center'>
                                    <img src="/assets/images/Storefront.png" alt="Store" />
                                </Col>
                                <Col xs={20} md={20} className='self-center'>
                                    <Typography className='font-nunito text-xl md:text-lg'>SHOP</Typography>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <Row className='h-full flex'>
                                <Col xs={4} md={4} className='self-center'>
                                    <img src="/assets/images/CircleWavyWarning.png" alt="About" />
                                </Col>
                                <Col xs={20} md={20} className='self-center'>
                                    <Typography className='font-nunito text-xl md:text-lg'>ABOUT</Typography>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </>
    )
}

export default Header