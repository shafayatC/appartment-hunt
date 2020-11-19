import React, { useContext, useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './style.css'; 
import { makeStyles } from '@material-ui/core/styles';
import { ManageContext } from '../../../App';
import CircularProgress from '@material-ui/core/CircularProgress';
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


const UserServiceList = () => {
  const [user] = useContext(ManageContext); 
  const [serviceList, setServiceList] = useState([]); 

   useEffect(()=>{
     fetch(`https://shrouded-eyrie-22901.herokuapp.com/userOrderList/${user.email}`)
     .then(res => res.json())
     .then(data => setServiceList(data))
   },[])
    return (
        <div>
                  <div className="addEventWrap fwidth">
                      <div className="leftWidget left">
                          <Link  to="/" className="logo_3 fwidth"><img  src={require('../../Home/img/logos/logo.png')} /></Link>
                        <div className="dashMenu fwidth">
                        <Link to="/user-order" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/order.png')} />Order</Link>
                         <Link to="/user-servicelist" className="fwidth active lnk_1"><img className="icon_2" src={require('../img/serviceg.png')} />Service List</Link>
                         <Link to="/user-review" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/review.png')} />Review</Link>
                   </div>
                      </div>
                      <div className="rightWidget right">
                        <LoginInfo title="Service List"></LoginInfo>
                        <div className="eventForm">
                            <div className="p-4">
                                <div className="service_list_wrap">

                                  {serviceList.map(result =>
                                      <div className="srv_list">
                                      <div className="srv_top">
                                      <img src={`data:image/png;base64,${result.icon}`}/>
                                  <button class="statusBtn" className={[result.status + " statusBtn"]}>{result.status}</button>
                                      </div>
                                  <h4>{result.service}</h4>
                                  <p>{result.detail}</p>
                                      </div>
                                  )}
                                   
                                {/* loading... */}    
                                {serviceList.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}



                                </div>
                            </div>
                      </div>
                      </div>
                    </div>
        </div>
    );
};

export default UserServiceList;