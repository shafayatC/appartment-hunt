import React from 'react';
import './style.scss'; 

const BookingForm = () => {
    return (
        <>
          <div className="booking_form">
            <form className="bkForm">
                <input type="text" placeholder="Full Name"></input>
                <input type="text" placeholder="Phone No."></input>
                <input type="text" placeholder="Email Address"></input>
                <textarea placeholder="Message"></textarea>
                <button>Request Booking</button>
            </form>
          </div>  
        </>
    );
};

export default BookingForm;