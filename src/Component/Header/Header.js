import React from 'react';
import { Link } from "react-router-dom";
import "./style.scss"; 

const Header = () => {
    return (
        <>
    <div className="header_wrap fwidth">

        <div className="container">

            <div className="row">

                    <div className="col-md-4 col-sm-12">
                        <div className="logo">
                            <Link to="/"><img className="fwidth" src={require('./img/logo.png').default}/></Link>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-12">
                        <div  className="menuWrap align-middle">
                        <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Service</Link></li>
                        <li><Link to="/">Concerns</Link></li>
                        <li><Link to="/">Event</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        </ul>
                        <Link to="/admin-service" className="loginBtn">Login</Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    );
};

export default Header;