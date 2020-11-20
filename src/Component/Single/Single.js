import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BookingForm from './BookingForm';
import HeadingPage from './HeadingPage';
import SliderImg from './SliderImg';

const Single = () => {
    return (
        <>
          <Header></Header>
          <HeadingPage></HeadingPage>
          <div className="singlePost_wrap fwidth">
              <div className="container">
                  <div className="row">
                  <div className="col-md-8 col-sm-12 post_detail_wrap">
                    <SliderImg></SliderImg>

                    <div className="post_detail fwidth">
                        <div className="heading_price fwidth">
                            <h1>Family Apartment Three</h1>
                            <h2 className="price_3">$256</h2>
                        </div>
                        <div className="postDescription fwidth">
                            <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                            <h3>Price Details-</h3>
                            <p>Rent/Month: $550 (negotiable) <br></br>
                                Service Charge : 8,000/= Tk per month, subject to change <br></br>
                                Security Deposit : 3 month’s rent <br></br>
                                Flat Release Policy : 3 months earlier notice required</p>
                                <h3>Property Details-</h3>
                                <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                                Flat Size : 3000 Sq Feet. <br></br>
                                Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)<br></br>
                                Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                                Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br></br>
                                Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                            </p>

                        </div>
                    </div>
                    
                  </div>
                    <div className="col-md-4  col-sm-12 sidebasre">
                        <BookingForm></BookingForm>
                    </div>
                  </div>
              </div>
          </div>
          <Footer></Footer>
        </>
    );
};

export default Single;