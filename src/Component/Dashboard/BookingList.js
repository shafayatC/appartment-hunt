import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const BookingList = () => {

    const [eventList, setEventList] =  useState([]); 
    const deletEvent = val => {
    }
    return (
        <>
          
        <div className="userListWrap">
        <table className="table_1">
            <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Phone No</th>
                <th>Massage</th>
                <th>Action</th>
            </tr>
            {eventList.map(data=>
                    <tr>
                    <td>{data.eventname}</td>
                    <td>{data.email}</td>
                    <td>{data.date}</td>
                    <td>{data.description}</td>
                    <td><button onClick={()=>deletEvent(data._id)} className="trash"><img src={require('./img/trash.png')} /></button></td>
                </tr>
                )}

            </table>
            {eventList.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

        </div>  
        </>
    );
};

export default BookingList;