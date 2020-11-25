import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";

const RentVeiwGrid = () => {    

   const [rentData, setRentData] = useState([]);
   const history = useHistory();

   const goToPost=(vl)=>{
     history.push(`/post/${vl}`);
   }
    useEffect(()=>{
        fetch(`http://localhost:4000/rentList/6`)
        .then(res => res.json())
        .then(data =>setRentData(data))
    },[])

    return (
        <>
            <div className="heading fwidth">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>House Rent</h4>
                            <h2>Discover the latest Rent <br></br>available today</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail_grid_view fwidth">
                <div className="container">
                    <div className="row">

                    {rentData.map(data => 
                        <div className="col-md-4 houseDetal">
                            <img className="thumb" src={data.image[0]} />
                            <div className="detail fwidth">
                                <h3>{data.title }</h3>
                            <div className="location fwidth">
                                <img src={require('./img/map.png').default}/><p className="hrDetail">{data.location}</p>
                            </div>
                            <div className="roomDetail fwidth">
                                <div className="row">
                                    <div className="col-md-6"><img className="icon_1" src={require('./img/bed.png').default}/><p className="rmDetail">{data.bedroom} Bedrooms</p></div>
                                    <div className="col-md-6"><img className="icon_1" src={require('./img/bed.png').default}/><p className="rmDetail">{data.bathroom} Bathroom</p></div>
                                </div>
                            </div>
                            <div className="priceBtn fwidth">
                                <h5>${data.price}</h5>
                                <button onClick={()=>goToPost(data._id)} className="goDetail">View Details</button>
                            </div>
                            </div>
                        </div>
                    )}
                    {rentData.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

                    </div>
                </div>
            </div>
        </>
    );
};

export default RentVeiwGrid;