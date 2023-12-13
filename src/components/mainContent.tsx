import React from 'react'
import MainPage from './mainPage'
import Sidebar from './sidebar'
import { Row, Col } from 'antd'

const MainContent: React.FC = () => {
    return (
        <>
            <Row className='flex h-fit bg-grey'>
                <Col xs={6}>
                    <Sidebar />
                </Col>
                <Col xs={18}>
                    <MainPage />
                </Col>
            </Row>
        </>
    )

}

export default MainContent