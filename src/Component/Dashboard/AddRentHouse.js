import React from 'react';

const AddRentHouse = () => {
    //upload btn function 
    const uploadImbBtn = () => {
        document.getElementById("uploadBtn").style.display= "none"; 
        document.getElementById("inputimg").style.display= "block"; 
        }
    const handleClick =(e) => {
        e.preventDefault();
        }
    const submitEvent = (e) =>{
        e.preventDefault();
        }

    return (
        <>
          
          <form onSubmit={handleClick} className="creatForm">
            <div className="formWrap">

              <div className="formLeft">
                <p className="p_1">Service Title</p>
                <input type="text" placeholder="Enter title"></input>

                <p className="p_1">Location</p>
                <input type="text" placeholder="Enter location"></input>

                <p className="p_1">No of Bathroom</p>
                <input type="text" placeholder="Enter no of bathroom"></input>
              </div>
              <div className="formRight">
 
                <p className="p_1">Price</p>
                <input type="text" placeholder="Price"></input>
                
                <p className="p_1">No of Bedroom</p>
                <input type="number" placeholder="Enter no of bedroom"></input>

              <p className="p_7">Thumbnail</p>
              <button onClick={uploadImbBtn} id="uploadBtn" className="upload" ><img  src={require('./img/cloud-upload-2.png').default} /><span>Upload Image</span></button>
              <input id="inputimg" placeholder="Input image url" type="text"></input>
              </div>
              <ul id='warningMsg' style={{float:"left", width:"100%"}}></ul>

              </div>

              <button className="eventSubmitBtn" onClick={submitEvent}>Submit</button>
            </form>  
        </>
    );
};

export default AddRentHouse;