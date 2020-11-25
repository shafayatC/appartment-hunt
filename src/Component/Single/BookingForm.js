import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './style.scss'; 

const BookingForm = ({postId, user}) => {

    const [booking, setBooking] = useState({
      name: '', 
      email: '', 
      postId: postId
    }); 

    const onchangeName = (event) =>{setBooking({...booking, name: event.target.value})}
    const onchangePhone = (event) =>{setBooking({...booking, phone: event.target.value})}
    const onchangeEmail = (event) =>{setBooking({...booking, email: event.target.value})}
    const onchangeMsg = (event) =>{setBooking({...booking, message: event.target.value})}

    
    const submitBooking =(e) => {
      e.preventDefault();

      const ValidityMsg= []; 

      const emailValidity = /\S+@\S+\.\S+/.test(booking.email);

      !booking.name  && ValidityMsg.push("Name Empty");
      !booking.email  && ValidityMsg.push("Email Empty");
      !emailValidity &&  ValidityMsg.push("Email Not Valide");
      !booking.message  && ValidityMsg.push("Message Empty");

      if(booking.name && booking.email && emailValidity && booking.message ){
      
        fetch('https://sheltered-forest-41479.herokuapp.com/booking', {
          method: 'POST', // or 'PUT'
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(booking),
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert("Booking request sent successfully")
              }
          })
        .catch(err => console.log(err))

        warningMessage(false, null); 

      }else {
        const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ).join(''); 
 
        warningMessage(true, mapping); 

        alert("Invalid form submit")
      }

    } 

    const warningMessage =(bool, value = null)=>{

      const showMessage = document.getElementById("warningMsg");

      if(bool == true){
        showMessage.style.display = "block"
        showMessage.innerHTML = value;
      }else {
        showMessage.style.display = "none"
      }
    }
    useEffect(()=>{

      if(user){
        user.map(data => setBooking({
          name: data.name,
          email: data.email
        }))
      }

    },[])

    return (
        <>
        {console.log("myL :" + booking.name)}
          <div className="booking_form">

            <form onSubmit={submitBooking} className="bkForm">
              {user.length ?
                <input type="text" value={booking.name} disabled onBlur={onchangeName} placeholder="Full Name"></input>
                :
                <input type="text" onBlur={onchangeName} placeholder="Full Name"></input>
              }
              
            <input type="text" onBlur={onchangePhone} placeholder="Phone No."></input>

              {user.length ?
              <input type="text" value={booking.email} disabled onBlur={onchangeEmail} placeholder="Email Address"></input>
                : 
                <input type="text" onBlur={onchangeEmail} placeholder="Email Address"></input>
              }
                <textarea onBlur={onchangeMsg} placeholder="Message"></textarea>
                <button>Request Booking</button>
                <ul id='warningMsg' style={{float:"left", width:"100%"}}></ul>

            </form>

          </div>  
        </>
    );
};

const mapStateToProps = state =>{
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(BookingForm);