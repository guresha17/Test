import { Col, Row, Typography } from 'antd'
import React from 'react'

const Footer: React.FC = () => {

    const footerMenuItems = [
        {
            item: 'STORE'
        },
        {
            item: 'ABOUT US'
        },
        {
            item: 'FAQ'
        },
        {
            item: 'CONTACT US'
        }
    ]

    const socialMediaIcons = [

        {
            icon: '/assets/images/facebook-logo.png',
            text: 'facebook_logo'
        },
        {
            icon: '/assets/images/twitter-logo.png',
            text: 'twitter_logo'
        },
        {
            icon: '/assets/images/instagram-logo.png',
            text: 'instagram_logo'
        }

    ]


    const contactDetails = [

        {
            icon: '/assets/images/phone-icon.png',
            text: '+91 9560787318',
            alt: 'phone_icon'
        },
        {
            icon: '/assets/images/map-icon.png',
            text: 'B-103, Fourth Floor, Behind Triveni Complex, Panchsheel Vihar, New Delhi, 110017',
            alt: 'map_icon'
        },
        {
            icon: '/assets/images/mail-icon.png',
            text: 'orders@varameuseum.com',
            alt: 'mail_icon'
        }

    ]


    return (
        <>
            <Row className='bg-darkblue h-fit w-screen pt-8 pb-8'>
                <Row className='flex justify-center w-full h-12 mb-8'>
                    {footerMenuItems.map((menuItem, index) => (
                        <Col key={index} xs={3} className='border-b border-white flex justify-center'>
                            <Typography className='text-white font-nunito'>
                                {menuItem.item}
                            </Typography>
                        </Col>
                    ))}
                </Row>
                <Row className='flex justify-center w-full h-12 mb-8'>
                    {socialMediaIcons.map((socialMediaIcon, index) => (
                        <Col key={index} xs={2} className='flex justify-center self-center'>
                            <img src={socialMediaIcon.icon} alt={socialMediaIcon.text} className='text-white' />
                        </Col>
                    ))}
                </Row>
                <Row className='flex justify-center w-full h-24 border-b border-white mb-8'>
                    {contactDetails.map((detail, index) => (
                        <>
                            <Col key={index} xs={6} md={8} className='flex justify-center self-center'>
                                <Row>
                                    <Col xs={2} md={2}>
                                        <img src={detail.icon} alt={detail.alt} className='text-white' />
                                    </Col>
                                    <Col xs={22} md={22}>
                                        <Typography className='text-white font-nunito'>{detail.text}</Typography>
                                    </Col>
                                </Row>
                            </Col>

                        </>
                    ))}
                </Row>
                <Row className='flex justify-center w-full'>
                    <Typography className='text-white font-nunito'>Copyright &copy; 2000, Mueseumware, All rights reserved</Typography>
                </Row>
            </Row>
        </>
    )
}

export default Footer