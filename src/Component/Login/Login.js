
import React, { useEffect, useState } from 'react';
import fb from './img/fb.png';
import google from './img/google.png'
import './style.scss'; 
import fire, { fbProvider, provider }  from '../../Fire';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


const Login = () => {
    
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  /*flip login to registration */ 
  const [newUser, setNewUser] = useState(false);
  const [creatUser, setCreatUser] = useState({
    fname : '',
    lname : '',
    email : '', 
    password : '',
    repassword : ''

})
const RegSubmitValidity =() => {}
const signIn=()=>{}
const fbLogin=()=>{}
const googleLogin=()=>{}

const changeFname=(event)=>{
    setCreatUser({...creatUser,
        fname: event.target.value })  
}
const changeLname=(event)=>{
    setCreatUser({...creatUser,
        lname: event.target.value })
}  
const changeEmail=(event)=>{
    setCreatUser({...creatUser, email: event.target.value })
}  
const changePass=(event)=>{
    setCreatUser({...creatUser, password: event.target.value })
}  
const changeRepass=(event)=>{
    setCreatUser({...creatUser, repassword: event.target.value })
}  
const logHandler=(event)=>{
    event.preventDefault(); 
}

const regHandler=(event)=>{
    event.preventDefault();

}
    return (
        <>
        <div className="logOrRegWrapper fwidth">
          <div className="loginOrRegForm">
              {!newUser &&
                <div className="menualRegistration fwidth">
                    <form onClick={regHandler} > 
                    <h5 className="formTitle fwidth">Create an account</h5>  
                    <input id="fname" onChange={changeFname}  type="text" name="fname" placeholder="First Name"></input>
                    <input id="lname" onChange={changeLname} type="text" name="lname" placeholder="Last Name"></input>
                    <input id="email" onChange={changeEmail}  type="text" name="email"  placeholder="Email"></input>
                    <input id="pass" onChange={changePass} type="password"  name="password" placeholder="Password"></input>
                    <input id="repass" onChange={changeRepass} type="password"  name="confPassword" placeholder="Confirm Password"></input>
                    <button onClick={RegSubmitValidity} className="signupBtn">Create and account</button>
                    <ul id='warningMsg'></ul>

                    <p>Already have an account ? <button className="switchBtn" onClick={()=> setNewUser(!newUser)}>Login</button></p>
                    </form>
                </div>
}
                { newUser &&
                <div className="menualRegistration fwidth">
                    <form onClick={logHandler}> 
                    <h5 className="formTitle fwidth">Login</h5>  
                    <input onChange={changeEmail} className="inpt_1" type="text" name="email"  placeholder="Email"></input>
                    <input onChange={changePass} className="inpt_1" type="password"  name="password" placeholder="Password"></input>
                    <div className="fwidth">
                        <div class="remember">
                            <input type="checkbox" id="remember" name="rem" ></input>
                            <label htmlFor="vehicle1"> Remember Me</label>
                        </div>
                    <button className="forget">Forgot Password</button>
                    </div>
                    <button onClick={signIn} className="signupBtn">Login</button>
                    <p>Dont' have an account ? <button className="switchBtn"  onClick={()=> setNewUser(!newUser)}>Create an account</button></p>
                    </form>
                </div>
                }
                <p className="divid fwidth">Or</p>  
                <div className="socialLogin fwidth">
                <button onClick={fbLogin} className="socialBtn fwidth"><img src={fb}></img><span>Continue with Facebook</span></button>
                <button onClick={googleLogin} className="socialBtn fwidth"><img src={google}></img><span>Continue with Google</span></button>
                </div>
            </div>
            <div className="space fwidth"></div>

    </div>
        </>
    );
};

export default Login;
