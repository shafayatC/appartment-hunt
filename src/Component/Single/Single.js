import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BookingForm from './BookingForm';
import HeadingPage from './HeadingPage';
import SliderImg from './SliderImg';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import CircularProgress from '@material-ui/core/CircularProgress';

const Single = () => {
    const {id} = useParams(); 

    const [postDetail, setPostDetail] = useState([]);
    
    useEffect(()=>{
        fetch(`https://sheltered-forest-41479.herokuapp.com/post/${id}`)
        .then(res => res.json())
        .then(data => setPostDetail(data))

      //  console.log(postDetail.title);
    },[])

    return (
        <>
        
          <Header></Header>
          <HeadingPage></HeadingPage>
          <div className="singlePost_wrap fwidth">
              <div className="container">
                  <div className="row">


                  {postDetail.map(vl =>
                  <div className="col-md-8 col-sm-12 post_detail_wrap">

                    <SliderImg img={vl.image}></SliderImg>

                    {/* post details */}

                    <div className="post_detail fwidth">
                        <div className="heading_price fwidth">
                            <h1>{vl.title}</h1>
                             <h2 className="price_3">${vl.price}</h2>
                        </div>
                        <div className="postDescription fwidth">
                          {/*
                          * property detail 
                          * use htm parser 
                          */}
                            {ReactHtmlParser(vl.propertyDetail)}
                        </div>
                    </div>
                    
                  </div>
                )}
                
                {postDetail.length === 0 && <div className="col-md-8 col-sm-12 post_detail_wrap"><div className="loader mt-5"><CircularProgress /></div></div>}

                    <div className="col-md-4  col-sm-12 sidebasre">
                        {/* booking form */}
                        <BookingForm postId={id}></BookingForm>
                    </div>
                  </div>
              </div>
          </div>
          <Footer></Footer>
        </>
    );
};

export default Single;