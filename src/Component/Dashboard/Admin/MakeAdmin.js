import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './style.css'; 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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


  const MakeAdmin = () => {

    const [admin, setAdmin] = useState([]);

    const classes = useStyles();

    const onchangeEmail =(event)=> {
      setAdmin({
          ...admin,
          email: event.target.value,
        })
    }
    
    const submitAdmin = ()=> {
      
      fetch('https://shrouded-eyrie-22901.herokuapp.com/addAdmin', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(admin),
      })
      .then(response => response.json())
      .then(data => {
        if(data){
          alert("Admin created successfully");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    const handleClick =(e) => {
      e.preventDefault();
    }

    return (
        <div>
            <div className="addEventWrap fwidth">
                <div className="leftWidget left">
                    <Link  to="/" className="logo_3 fwidth"><img  src={require('../../Home/img/logos/logo.png')} /></Link>
                    <div className="dashMenu fwidth">
                        <Link to="/admin-service" className="fwidth   lnk_1"><img className="icon_2" src={require('../img/service.png')} />Service list</Link>
                        <Link to="/admin-addservice" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/plus.png')} /> Add Service</Link>
                        <Link to="/admin-makeadmin" className="fwidth active lnk_1"><img className="icon_2" src={require('../img/addg.png')} /> Make Admin</Link>
                  </div>
                </div>
                  <div className="rightWidget right">
                    <LoginInfo title="Make Admin"></LoginInfo>
                    <div className="eventForm">
                      <form onSubmit={handleClick} className="creatForm">
                      <div className="formWrap">
                        <div className="createAdmin">
                            <p className="p_1">Email</p>
                            <input onBlur={onchangeEmail} type="text" placeholder="example@gmail.com"></input>
                            <button className="eventSubmitBtn" onClick={submitAdmin}>Submit</button>
                        </div>
                        
                        </div>

                      </form>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default MakeAdmin;