import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const BookingList = () => {

    const [bookingList, setBookingList] =  useState([]); 

    const updateBookingStatus = val => {
        const value = document.getElementById("status").value; 
    
        fetch(`https://sheltered-forest-41479.herokuapp.com/updateBookingList/${val}`, {
            method: 'PATCH', // patch
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({status: value}),
          })
          .then(response => response.json())
          .then(data => {
            if(data){
              alert("Order Status Update");
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        
    }

    useEffect(()=>{
        fetch('https://sheltered-forest-41479.herokuapp.com/showBookingLIst')
        .then(res => res.json())
        .then(data => setBookingList(data))
    },[])

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
            {bookingList.map(data=>
                    <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.message}</td>
                    <td>
                        <select onChange={()=>updateBookingStatus(data._id)} name="status" id="status">
                            <option className="ongoing" selected={data.status === "ongoing" ? "selected": ""} value="ongoing">On going</option>
                            <option className="pending" selected={data.status === "pending" ? "selected": ""}   value="pending">Pending</option>
                            <option className="done" selected={data.status === "done" ? "selected": ""} value="done">Done</option>
                        </select>
                        {console.log("testing : " + data.status)}
                    </td>
                </tr>
                )}

            </table>
            {bookingList.length === 0 && <div style={{margin: "auto", width: "44px", paddingTop: "20px"}}><CircularProgress /></div>}

        </div>  
        </>
    );
};

export default BookingList;