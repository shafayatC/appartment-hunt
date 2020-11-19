import React from 'react';
import "./style.scss"; 

const Searchbox = () => {
    return (
        <div className="search_wrap fwidth">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="srcTitle"><h1>FIND YOUR HOUSE RENT</h1></div>
                </div>
                <div className="col-md-12">
                    <div className="searchBox">
                        <input type="text" placeholder="search..."></input>
                        <button className="srcBtn">Find Now</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbox;