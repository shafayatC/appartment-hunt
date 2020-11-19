import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './style.css'; 
import { makeStyles } from '@material-ui/core/styles';
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

  const AddService = () => {

    const [vlService, setvlService] = useState({
      name: '',
      description: '',
    });
    const [file, setFile] = useState(null);

    const classes = useStyles();

    const onchangeEventName =(event)=> {
        setvlService({
          ...vlService,
          name: event.target.value,
        })
    }
    const onchangeDes =(event)=>{
      setvlService({
        ...vlService,
        description: event.target.value,
      })
    }
    const onchangeImg = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
    }
     const submitEvent = (e) =>{
        e.preventDefault();
        
      const ValidityMsg= []; 
      const imgValid = /\.(jpeg|jpg|gif|png)$/.test(vlService.image); 

      !vlService.name  && ValidityMsg.push("Event Title Empty");
      !vlService.description  && ValidityMsg.push("Description Empty");
     // !imgValid && ValidityMsg.push("Add valide image")

        
      if(vlService.name && vlService.description){

            const data = new FormData()
            data.append('file', file)
            data.append('name', vlService.name)
            data.append('description', vlService.description)

              fetch('https://shrouded-eyrie-22901.herokuapp.com/addService', {
                method: 'POST',
                body: data
              })
              .then(res => res.json())
              .then(result => alert(result))
              .catch(err => console.log(err))
        
        }else {
               const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ); 
               document.getElementById("warningMsg").innerHTML = mapping;  
          }
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
                         <Link to="/admin-addservice" className="fwidth active lnk_1"><img className="icon_2" src={require('../img/plusg.png')} /> Add Service</Link>
                         <Link to="/admin-makeadmin" className="fwidth  lnk_1"><img className="icon_2" src={require('../img/add.png')} /> Make Admin</Link>
                   </div>
                      </div>
                      <div className="rightWidget right">
                        <LoginInfo title="Add Service"></LoginInfo>
                        <div className="eventForm">
                          <form onSubmit={handleClick} className="creatForm">
                          <div className="formWrap">

                           <div className="formLeft">
                             <p className="p_1">Service Title</p>
                           <input onBlur={onchangeEventName} type="text"></input>

                           <p className="p_2">Description</p>
                           <textarea onBlur={onchangeDes}> </textarea>

                           </div>
                           <div className="formRight">
                              <p className="p_7">Icon {vlService.image}</p>
                            <input onBlur={onchangeImg} className="file_upload_2" type="file"></input>
                            </div>
                            <ul id='warningMsg' style={{float:"left", width:"100%"}}></ul>

                            </div>
                            <button className="eventSubmitBtn" onClick={submitEvent}>Submit</button>
                          </form>
                      </div>
                      </div>
                    </div>
        </div>
    );
};

export default AddService;