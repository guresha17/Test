
import React, { useState, useEffect, createContext } from 'react'
import Header from '../components/header'
import Subheader from '../components/subheader'
import MainContent from '../components/mainContent'
import Footer from '../components/footer'
import Statue from '../interfaces/statuesInterface'
import axios from 'axios'
import { DataProvider, useDataContext } from '@/components/utils/context'


const page: React.FC = () => {

  const { setResponseData } = useDataContext();



  const fetchData = async () => {
    console.log("Hello world")
    try {
      const response = await axios.get<Statue[]>('http://localhost:3004/items');
      console.log(response, "response data");
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [])



  return (
    <main className='h-screen w-screen bg-grey'>
      <Header />
      <Subheader />
      <MainContent />
      <Footer />
    </main>
  )
}

export default page