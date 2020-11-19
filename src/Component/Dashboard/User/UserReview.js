import React, { useContext, useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './style.css'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ManageContext } from '../../../App';
import LoginInfo from '../Login/LoginInfo';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


  const UserReview = () => {
    const [user] = useContext(ManageContext); 

    const [review, setReview] = useState({
      name: '',
      designation: '',
      description: '', 
      photo: ''
    });
    const classes = useStyles();

    const onchangeName =(event)=> {
      setReview({
          ...review,
          name: event.target.value,
        })
    }
    const onchangeDesignation =(event)=> { 
      setReview({
        ...review,
        designation: event.target.value,
      })
    }
    const onchangeDes =(event)=> { 
      setReview({
        ...review,
        description: event.target.value,
      })
    }

  const handleSubmit = (e) =>{
        e.preventDefault();
        
      const ValidityMsg= []; 

      !review.description  && ValidityMsg.push("Description Empty");
      !review.designation  && ValidityMsg.push("designation Empty");

        
      if(review.designation && review.description){

          fetch('https://shrouded-eyrie-22901.herokuapp.com/addReview', {
            method: 'POST', // or 'PUT'
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(review),
          })
          .then(response => response.json())
          .then(data => {if(data){alert("New Event Created Successfully");}})
          .catch((error) => {console.error('Error:', error);});
          
        }else {
               const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ); 
               document.getElementById("warningMsg").innerHTML = mapping;  
          }
    }

  useEffect(()=>{
    setReview({
      name: user.name,
      photo: user.photo
    })
  },[])

    return (
        <div>
                  <div className="addEventWrap fwidth">
                      <div className="leftWidget left">
                          <Link  to="/" className="logo_3 fwidth"><img  src={require('../../Home/img/logos/logo.png')} /></Link>
                        <div className="dashMenu fwidth">
                        <Link to="/user-order" className="fwidth   lnk_1"><img className="icon_2" src={require('../img/order.png')} />Order</Link>
                         <Link to="/user-servicelist" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/service.png')} />Service List</Link>
                         <Link to="/user-review" className="fwidth active lnk_1"><img className="icon_2" src={require('../img/reviewg.png')} />Review</Link>
                    </div>
                      </div>
                      <div className="rightWidget right">
                        <LoginInfo title="Review"></LoginInfo>
                        <div className="eventForm">
                            <div className="p-4">
                         
                          <form onSubmit={handleSubmit} className="creatOrderForm">
                            <input onBlur={onchangeName} value ={user.name} type="text" placeholder="Your name"></input>
                            <input onBlur={onchangeDesignation} type="text" placeholder="Company’s name, Designation"></input>
                            <textarea onBlur={onchangeDes} placeholder="Description"></textarea>

                            <button className="btn_3 btn btn-dark" >Submit</button>
                          </form>
                          <ul id="warningMsg"></ul>
                            </div>
                      </div>
                      </div>
                    </div>
        </div>
    );
};

export default UserReview;