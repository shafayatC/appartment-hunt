
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
import { AddToUser } from '../Redux/actions/userActionss';
import { connect } from 'react-redux';


const Login = (props) => {
    
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
    /* redux data */
    const {user, AddToUser} = props; 

  /*flip login to registration */ 
  const [newUser, setNewUser] = useState(false);
  const [creatUser, setCreatUser] = useState({
    fname : '',
    lname : '',
    email : '', 
    password : '',
    repassword : ''

})

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

const RegSubmitValidity =() => {
           
    const emailValid = /\S+@\S+\.\S+/.test(creatUser.email);
    const passMinLengtth = creatUser.password > 6; 
    const passMatch = creatUser.password == creatUser.repassword; 

    const Fname = document.getElementById("fname");
    const Lname = document.getElementById("lname");
    const mailId = document.getElementById("email");
    const passId = document.getElementById("pass");
    const rePassId =  document.getElementById("repass");
    const ValidityMsg= []; 
    
    creatUser.fname ?  Fname.classList.remove("warning") : Fname.classList.add("warning");
    !creatUser.fname && ValidityMsg.push("First Name Empty");
    emailValid ?  mailId.classList.remove("warning") : mailId.classList.add("warning");
   !emailValid && ValidityMsg.push("Email Not Valide");
    passMatch ?  passId.classList.remove("warning") : passId.classList.add("warning");
    passMatch ?  rePassId.classList.remove("warning") : rePassId.classList.add("warning");
    passMinLengtth ?  passId.classList.remove("warning") : passId.classList.add("warning");
    !passMinLengtth && ValidityMsg.push("Password Lenght Minimum 6 Character");
    !passMatch && ValidityMsg.push("Password Not Match");
  //creatUser.lname ?  Lname.classList.remove("warning") : Lname.classList.add("warning");
    
    if(emailValid && passMinLengtth && passMatch && creatUser.fname){
        RegSubmit();
        console.log(true)
    }else {
        console.log(ValidityMsg); 
        const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ); 
        document.getElementById("warningMsg").innerHTML = mapping; 
        console.log(false);
    }
    console.log(emailValid , passMinLengtth, passMatch) ;

}
const RegSubmit=()=>{

    fire.auth().createUserWithEmailAndPassword(creatUser.email, creatUser.password).then((u)=>{

        const fullname = creatUser.fname + " " +  creatUser.lname;

       /* setLoginUser({
            name : fullname,
            email: creatUser.email,
        });
        */
        var user = fire.auth().currentUser;

        user.updateProfile({
            displayName: fullname,
        })
        history.replace(from);
       console.log("sucess");
    }).catch((error)=>{
        console.log(error);
    })
}
   
const signIn=(event)=>{
    event.preventDefault(); 

        fire.auth().signInWithEmailAndPassword(creatUser.email,creatUser.password).then(result=>{

        var user = result.user;
        const {displayName, email} = user; 

        AddToUser(displayName, email);

        history.replace(from);
        console.log("logIn");
      }).catch((error)=>{
        alert('username or password wrong');
      });
}
    
const fbLogin=()=>{

    fire.auth().signInWithPopup(fbProvider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        const {displayName, email, photoURL} = user; 

        AddToUser(displayName, email, photoURL);
        
        history.replace(from);
        console.log(user);


      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode)
      });          
}

const googleLogin =() => {
    fire.auth().signInWithPopup(provider).then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        const {displayName, email, photoURL} = user; 

        AddToUser(displayName, email, photoURL);

        /*
        setUser({
            name : displayName,
            email: email,
            photo: photoURL, 
        });
        */
        history.replace(from);
        console.log(user); 

      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log('error \n'+ error)
      });
      
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

const mapStateToProps = state =>{
    return{
        user: state.user
    }
}
const mapDispatchToProps  = {
    AddToUser : AddToUser    
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
