import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RentVeiwGrid from './RentVeiwGrid';
import Searchbox from './Searchbox';
import ServiceWidget from './ServiceWidget';
import "./style.scss"; 

const Home = () => {
    return (
        <>
            <Header></Header>
            <Searchbox></Searchbox>
            <div className="bgColor fwidth">
              <RentVeiwGrid></RentVeiwGrid>
              <ServiceWidget></ServiceWidget>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;