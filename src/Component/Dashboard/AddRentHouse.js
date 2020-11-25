import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
import ReactDOM from 'react-dom';
import { Editor } from '@tinymce/tinymce-react'; 

const AddRentHouse = () => {

    const [addRent, setAddRent] = useState({
      title: '', 
      location: '',
      bathroom: '',
      bedroom: '', 
      price: '', 
      propertyDetail: ''
    })
    const [file, setFile] = useState([]);

    /* multiple image upload  */
    const crop = {
      unit: '%',
      aspect: 4 / 2,
      width: '100'
    };
   
    const [images, setImages] = useState([]);

    /* end multiple image upload */

    const onchangeTitle=(event)=>{
      setAddRent({
        ...addRent,
        title: event.target.value,
      })
    }
    const onchangeLocation=(event)=>{
      setAddRent({
        ...addRent,
        location: event.target.value,
      })
    }
    const onchangeBath=(event)=>{
      setAddRent({
        ...addRent,
        bathroom: event.target.value,
      })
    }
    const onchangeBed=(event)=>{
      setAddRent({
        ...addRent,
        bedroom: event.target.value,
      })
    }
    const onchangePrice=(event)=>{
      setAddRent({
        ...addRent,
        price: event.target.value,
      })
    }

    const onchangePropertyDetail= (content, editor) =>{
      //const rs = JSON.stringify(event);

      console.log(content);

      setAddRent({
        ...addRent,
        propertyDetail: content,
      })
    }
    const onchangeImg = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
      console.log(newFile);
      console.log("state : "+ file.name);

    }


    const handleClick =(e) => {
        e.preventDefault();
      }

    const submitEvent = (e) =>{
        e.preventDefault();

      
      const ValidityMsg= []; 
      const imgValid = /\.(jpeg|jpg|gif|png)$/.test(file); 

      !addRent.title  && ValidityMsg.push("Title Empty");
      !addRent.location  && ValidityMsg.push("Location Empty");
      !addRent.bathroom  && ValidityMsg.push("Bathrom number not set");
      !addRent.bedroom  && ValidityMsg.push("Bedroom number not set");
      !addRent.price  && ValidityMsg.push("Price Empty");
      !addRent.propertyDetail  && ValidityMsg.push("Property Detail Empty");
      !imgValid && ValidityMsg.push("Image Not Valid")

      console.log("Image is valied " + imgValid + " check image : " +  file)

        if(addRent.title && addRent.location && addRent.bathroom && addRent.bedroom && addRent.price && addRent.propertyDetail){
        const time = new Date(); 
        const data = new FormData()
        data.append('file', file)
        data.append('title', addRent.title)
        data.append('location', addRent.location)
        data.append('bathroom', addRent.bathroom)
        data.append('bedroom', addRent.bedroom)
        data.append('price', addRent.price)
        data.append('propertyDetail', addRent.propertyDetail)
        data.append('time', time.getTime())        
        for (const property in images) {
          data.append('images'+[property], images[property])
        }

      //  console.log("multiple img : " + typeof(Object.keys(images)) );

        fetch('https://sheltered-forest-41479.herokuapp.com/addRent', {
          method: 'POST',
          body: data
        })
        .then(res => res.json())
        .then(result =>{
          if(result === true ){
              alert("Submit Sucessfully")
          }})
        .catch(err => console.log(err))
      }else {
        /* error messages */
        const mapping =  ValidityMsg.map(res=> '<li>' + res + '</li>' ).join(''); 
        document.getElementById("warningMsg").innerHTML = mapping;  
        alert("Invalid form submit")
       } 
      }

    return (
        <>

          <form onSubmit={handleClick} className="creatForm">
            <div className="formWrap">

              <div className="formLeft">
                <p className="p_1">Service Title</p>
                <input type="text"onBlur={onchangeTitle} placeholder="Enter title"></input>

                <p className="p_1">Location</p>
                <input type="text" onBlur={onchangeLocation} placeholder="Enter location"></input>

                <p className="p_1">No of Bathroom</p>
                <input type="number" onBlur={onchangeBath} placeholder="Enter no of bathroom"></input>
                
                <p className="p_1">No of Bedroom</p>
                <input type="number" onBlur={onchangeBed} placeholder="Enter no of bedroom"></input>
                  
           
              <p className="p_1">Price</p>
                <input type="number" onBlur={onchangePrice} placeholder="Price"></input>
 
              </div>
              <div className="formRight">

              <p className="p_1">Property Detail</p>
               {/*  <textarea className="textarea_2" onBlur={onchangePropertyDetail} placeholder="Enter property detail"></textarea> */} 
               <Editor
                  initialValue=""
                  init={{
                    height: 200,
                    menubar: false
                  }}
                  onEditorChange={onchangePropertyDetail}
               />

              <p className="p_1">Thumbnail</p>
              {/** <input onBlur={onchangeImg} className="file_upload_2" type="file"></input> */}
              
              <MultiImageInput
                images={images}
                setImages={setImages}
                cropConfig={{ crop, ruleOfThirds: true }}
                max={4}
                theme={{
                  background: '#deffed',
                  outlineColor: '#009444',
                  textColor: '#009444',
                  buttonColor: '#009444',
                  modalColor: '#ffffff'
                }}
              />

              </div>



              <ul id='warningMsg' style={{float:"left", width:"100%"}}></ul>

              </div>

              <button className="eventSubmitBtn" onClick={submitEvent}>Submit</button>
              
            </form>  
        </>
    );
};

export default AddRentHouse;