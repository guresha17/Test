import { Row, Col, Typography, Pagination } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDataContext } from './utils/context';
import Statue from '@/interfaces/statuesInterface';

const Card: React.FC = () => {
    const { responseData } = useDataContext();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Adjust the number of items per page as needed

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleItems = responseData.slice(startIndex, startIndex + itemsPerPage);

    const totalItems = responseData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const backgroundColors = ['bg-seagreen', 'bg-lightblue', 'bg-peach']; // Add or modify colors as needed

    return (
        <>
            {visibleItems.map((statue: Statue, index : any) => (
                <Col xs={12} md={12} lg={8} xl={6} key={statue.ID}>
                    <Row className={`rounded h-fit shadow-md mb-4 w-11/12 ${backgroundColors[index % backgroundColors.length]}`}>
                        <Col xs={24} className='h-56'>
                            <img src={statue.thumb} alt={statue.name} className='w-full h-full object-cover' />
                        </Col>
                        <Col xs={24} className='bg-white py-3 px-3'>
                            <Row className='h-10 mb-3'>
                                <Col xs={16} md={18} className='border-b border-darkgrey'>
                                    <Typography className='text-black text-xl font-bitter md:text-lg lg:text-xl'>{statue.name}</Typography>
                                </Col>
                                <Col xs={8} md={6} className='flex justify-end'>
                                    <Typography className='text-xl text-black font-nunito md:text-lg lg:text-xl'>{statue.period}</Typography>
                                </Col>
                            </Row>
                            <Row className='h-14 overflow-hidden'>
                                <Typography className='text-base text-darkgray font-nunito'>{statue.description}</Typography>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            ))}
            <Row justify={'center'} className="mt-4">
                <Pagination current={currentPage} total={totalItems} pageSize={itemsPerPage} onChange={handlePageChange} className='font-nunito' />
            </Row>
        </>
    );
};

export default Card;
