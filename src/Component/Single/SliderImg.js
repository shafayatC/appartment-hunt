import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import './style.scss'; 

const SliderImg = ({img}) => {

    const settings = {
        customPaging: function(i) {
          return (
            
            <a>
            {/* porps image use here*/}
            <img className="sldThumb" src={img[i+0]} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb shs_slider",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
      <>
        <Slider {...settings}>
        {/* props image map loop */}
          {img.map(images=>
              <div>
               <img className="sldImg"  src={images} />
              </div>
             )}

        </Slider>
      </>
    );
};

export default SliderImg;