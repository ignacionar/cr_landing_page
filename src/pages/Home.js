import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageLinks from '../components/ImageLinks/ImageLinks';

const Home = () => {
  return (
    <>
      <Header/>
        <BackgroundImage/>
        <ImageLinks/>
      <Footer/>
    </>
    
  )
}

export default Home
