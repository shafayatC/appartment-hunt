import React, { useContext } from 'react';
import './style.css'
import fire,{provider} from '../../../Fire'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { ManageContext } from '../../../App';

const AdminLogin = () => {

    let history = useHistory();
    let location = useLocation();
  
    const [user, setUser] = useContext(ManageContext);
    let { from } = location.state || { from: { pathname: "/" } };

    const googleLogin =() => {
        fire.auth().signInWithPopup(provider).then(result => {
            var token = result.credential.accessToken;
            var user = result.user;
            const {displayName, email, photoURL} = user; 

            fetch('https://shrouded-eyrie-22901.herokuapp.com/adminCheck', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
                .then(res => res.json())
                .then(data => {
                    if(data){  setUser({
                        name : displayName,
                        email: email,
                        photo: photoURL, 
                        admin: data
                    });
                    
                    history.replace(from);
                    console.log(user); 
                }else {
                    alert("Allow Only Admin")
                }
                })   

            }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log('error \n'+ error)
          });
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="loginWrap">
                        <Link className="logo_2" to="/"><img  src={require('../../Home/img/logos/logo.png')}></img></Link>
                        <div className="loginForm fwidth">
                            <h2>Login With</h2>
                            <button onClick={googleLogin} className="socialBtn">
                                <img src={require('./img/google.png')}></img>
                                <span>Continue with Google</span>
                            </button>
                            <p>Don't have account ? <span onClick={googleLogin} style={{cursor: "pointer"}}>Create and account</span></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;