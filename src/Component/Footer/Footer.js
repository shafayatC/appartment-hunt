import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss"; 

const Footer = () => {
    return (
        <>
            <div className="footer_wrap fwidth">
                <div className="container">
                    <div className="row">
                        
                    <div className="col-md-5 col-sm-12 address_wrap">
                            <img className="icon_2" src={require('./img/map-white.png').default}/>
                            <p>H#340 (4th Floor), Road #24,<br></br>
                                New DOHS, Mohakhali, Dhaka, Bangladesh<br></br>
                                Phone: 018XXXXXXXX <br></br>
                                E-mail: info@company.com</p>
                    </div>
                    <div className="col-md-2 col-sm-6 companyLink">
                        <div className="title_3">Company</div>
                        <ul className="linkList">
                            <li><Link to="">About</Link></li>
                            <li><Link to="">Site Map</Link></li>
                            <li><Link to="">Support Center</Link></li>
                            <li><Link to="">Terms Conditions</Link></li>
                            <li><Link to="">Submit Listing</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6 quickLink">
                        <div className="title_3">Quick Links</div>
                        <ul className="linkList">
                            <li><Link to="">Quick Links</Link></li>
                            <li><Link to="">Rentals</Link></li>
                            <li><Link to="">Sales</Link></li>
                            <li><Link to="">Contact</Link></li>
                            <li><Link to="">Terms Conditions</Link></li>
                            <li><Link to="">Our blog</Link></li>
                        </ul>                        
                    </div>
                    <div className="col-md-3 col-sm-12 aboutUs">
                        <div className="title_3">Quick Links</div>
                        <p className="about">We are the top real estate 
                        agency in Sydney, with agents 
                        available to answer any 
                        question 24/7.</p>
                        <div className="socialLink">
                            <Link className="sclLink" to=""><img src={require('./img/fb.png').default}/></Link>
                            <Link className="sclLink" to=""><img src={require('./img/Vector-1.png').default}/></Link>
                            <Link className="sclLink" to=""><img src={require('./img/linkdin.png').default}/></Link>
                            <Link className="sclLink" to=""><img src={require('./img/youtube.png').default}/></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;