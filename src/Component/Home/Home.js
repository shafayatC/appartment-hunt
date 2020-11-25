import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RentVeiwGrid from './RentVeiwGrid';
import Searchbox from './Searchbox';
import ServiceWidget from './ServiceWidget';
import "./style.scss"; 
import { AddToUser } from '../Redux/actions/userActionss';
import {connect} from 'react-redux';

const Home = (props) => {

    const {user, products, AddToUser} = props; 


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
const mapStateToProps = state =>{
    return {
        user : state.user
        }
}

const mapDispatchToProps = {
    AddToUser: AddToUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);