import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
  import './style.css'; 
  import CircularProgress from '@material-ui/core/CircularProgress';
import LoginInfo from '../Login/LoginInfo';

const AdminService = () => {
    const [serviceList, setserviceList] =  useState([]); 
    const [updateService, SetUpdateService] =  useState();

    const updateOrderStatus = (val) => {
        const value = document.getElementById("status").value; 
    
        fetch(`https://shrouded-eyrie-22901.herokuapp.com/updateOrderStatus/${val}`, {
            method: 'PATCH', // patch
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({status: value}),
          })
          .then(response => response.json())
          .then(data => {
            if(data){
              alert("Order Status Update");
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        
        }

    useEffect(()=>{
        fetch("https://shrouded-eyrie-22901.herokuapp.com/userOrderList")
        .then(res => res.json())
        .then(data =>setserviceList(data))
    },[])

    return (
        <div>
            <div className="addEventWrap fwidth">
                <div className="leftWidget left">
                    <Link  to="/" className="logo_3 fwidth"><img  src={require('../../Home/img/logos/logo.png')} /></Link>
                <div className="dashMenu fwidth">
                    <Link to="/admin-service" className="fwidth  active lnk_1"><img className="icon_2" src={require('../img/serviceg.png')} />Service list</Link>
                    <Link to="/admin-addservice" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/plus.png')} /> Add Service</Link>
                    <Link to="/admin-makeadmin" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/add.png')} /> Make Admin</Link>
                </div>
                </div>
                <div className="rightWidget right">
                    <LoginInfo title="Volunteer register list"></LoginInfo>
                <div className="eventForm">
                    <div className="userListWrap">

                    <table className="table_1">
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Project Details</th>
                            <th>Status</th>
                        </tr>
                        {serviceList.map(data=>
                                <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.service}</td>
                                <td>{data.detail}</td>
                                <td><select onChange={()=>updateOrderStatus(data._id)} name="status" id="status">
                                    <option className="ongoing" selected={data.status === "ongoing" ? "selected": ""} value="ongoing">On going</option>
                                    <option className="pending" selected={data.status === "pending" ? "selected": ""}   value="pending">Pending</option>
                                    <option className="done" selected={data.status === "done" ? "selected": ""} value="done">Done</option>
                                </select></td>
                            </tr>
                            )}
                    
                        </table>
                        {serviceList.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AdminService;