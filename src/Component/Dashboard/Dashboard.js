import React, { useEffect, useState } from 'react';
import {
    Link,   Route,   Switch,
  } from "react-router-dom";
  import './style.scss'; 
import Home from '../Home/Home';
import BookingList from './BookingList';

const Dashboard = (props) => {

  const [activeLink, setActiveLink] = useState();

  const menuActive=(vl)=>{
      setActiveLink(vl);
  }
    /*
    const [eventList, setEventList] =  useState([]); 
    const deletEvent = val => {
    }
    

    const deletEvent = val => {
        console.log(val);
        fetch(`https://radiant-coast-19512.herokuapp.com/userEventDelete/${val}`, {
          method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => {
          if(res){
            fetch("https://radiant-coast-19512.herokuapp.com/allRegEvent")
            .then(res => res.json())
            .then(data =>setEventList(data))
          }
        })
      }

    useEffect(()=>{
        fetch("https://radiant-coast-19512.herokuapp.com/allRegEvent")
        .then(res => res.json())
        .then(data =>setEventList(data))
    },[])
*/
    return (
        <div>
            <div className="addEventWrap fwidth">
                <div className="leftWidget left">
                    <Link  to="/" className="logo_3 fwidth"><img src={require('../Header/img/logo.png').default} /></Link>
                <div className="dashMenu fwidth">
                    <Link to="/booking-list" onClick={()=>menuActive('booking')} className={`fwidth lnk_1 ${activeLink==='booking' ?"active":""}`}><img className="icon_2" src={require('./img/bkicong.png').default} />Booking List</Link>
                    <Link to="/event-create"  onClick={()=>menuActive('addHouse')}  className={`fwidth lnk_1 ${activeLink==='addHouse' ?"active":""}`}><img className="icon_2" src={require('./img/plusb.png').default} />Add House</Link>
                    <Link to="/rent-list"  onClick={()=>menuActive('rent')}  className={`fwidth lnk_1 ${activeLink==='rent' ?"active":""}`}><img className="icon_2" src={require('./img/rentb.png').default} />My Rent</Link>
                </div>
                </div>
                <div className="rightWidget right">
                <h2 class="dashHeading">{props.name}</h2>
                <div className="eventForm">

                    {props.component}

                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;