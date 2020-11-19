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


  const UserOrder = () => {

    const [user, setUser, orderService] = useContext(ManageContext); 
    const [vlOrder, setvlOrder] = useState({
      name: '',
      email: '',
      service: '',
      detail: '', 
      price: '' 
    });
    const [file, setFile] = useState(); 

    const classes = useStyles();

    const onchangeName =(event)=> {
        setvlOrder({
          ...vlOrder,
          name: event.target.value,
        })
    }
    const onchangeemail =(event)=> {
      setvlOrder({
        ...vlOrder,
        email: event.target.value,
      })
    }
    const onchangeservice =(event)=> {
      setvlOrder({
        ...vlOrder,
        service: event.target.value,
      })
     }
    const onchangeDetail =(event)=> {
      setvlOrder({
        ...vlOrder,
        detail: event.target.value,
      })
    }
    const onchangePrice =(event)=> {
      setvlOrder({
        ...vlOrder,
        price: event.target.value,
      })}
    const onchangeFile =(event)=> { 
      setFile(event.target.files[0])
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

    
      const ValidityMsg= []; 
      const imgValid = /\.(jpeg|jpg|gif|png)$/.test(file); 
      const re = /\S+@\S+\.\S+/;
      const emailValidity = re.test(vlOrder.email);

      !vlOrder.name  && ValidityMsg.push("Name Empty");
      !vlOrder.email  && ValidityMsg.push("Email Empty");
      !emailValidity && ValidityMsg.push("Email Not Valid")
      !vlOrder.service  && ValidityMsg.push("service Empty");
      !vlOrder.detail  && ValidityMsg.push("Detail Empty");
      !vlOrder.price  && ValidityMsg.push("Price Empty");
     // !imgValid && ValidityMsg.push("Image Not Valid")

      if(vlOrder.name && vlOrder.email && emailValidity && vlOrder.service && vlOrder.detail){

        const data = new FormData()

        data.append('file', file)
        data.append('icon', orderService.icon)
        data.append('name', vlOrder.name)
        data.append('email', vlOrder.email)
        data.append('service', vlOrder.service)
        data.append('detail', vlOrder.detail)
        data.append('price', vlOrder.price)
        data.append('status', "pending")

          fetch('https://shrouded-eyrie-22901.herokuapp.com/orderService', {
            method: 'POST',
            body: data
          })
          .then(res => res.json())
          .then(result => alert("Order Submitted"))
          .catch(err => console.log(err))
          
         console.log( "bangladesh : " +  ValidityMsg === []); 
        } else {
               const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ).join(''); 
               document.getElementById("warningMsg").innerHTML = mapping;  
          } 
    }
 
    useEffect(()=> {
      setvlOrder({
        name: user.name, 
        email: user.email, 
        service: orderService.service,
      })
    },[])
    
    return (
        <div>
            <div className="addEventWrap fwidth">
                <div className="leftWidget left">
                    <Link  to="/" className="logo_3 fwidth"><img  src={require('../../Home/img/logos/logo.png')} /></Link>
                  <div className="dashMenu fwidth">
                  <Link to="/user-order" className="fwidth  active lnk_1"><img className="icon_2" src={require('../img/orderg.png')} />Order</Link>
                    <Link to="/user-servicelist" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/service.png')} />Service List</Link>
                    <Link to="/user-review" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/review.png')} />Review</Link>
              </div>
                </div>
                <div className="rightWidget right">
                  <LoginInfo title="Order"></LoginInfo>
                  <div className="eventForm">
                      <div className="p-4">
                    <form onSubmit={handleSubmit} className="creatOrderForm">
                      <input onBlur={onchangeName} value={user.name}   type="text" placeholder="Your name / company’s name"></input>
                      <input onBlur={onchangeemail}  value={user.email} type="text" placeholder="Your email address"></input>
                      <input onBlur={onchangeservice} value={orderService.service} type="text" placeholder="Graphic service"></input>
                      <textarea onBlur={onchangeDetail} placeholder="Project Details"></textarea>
                      <input onBlur={onchangePrice} className="price_inp" type="number" placeholder="Price"></input>
                      <input onBlur={onchangeFile} className="file_upload" type="file" placeholder="Price"></input>
                      <button className="btn_3 btn btn-dark">Submit</button>
                    </form>
                    <ul id="warningMsg"></ul>
                      </div>
                </div>
                </div>
              </div>
        </div>
    );
};

export default UserOrder;