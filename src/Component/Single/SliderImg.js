import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import './style.scss'; 

const SliderImg = () => {

    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img className="sldThumb" src={require(`./img/sliderImg/slide${i + 1}.png`).default} />
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
          <div>
            <img className="sldImg" src={require('./img/sliderImg/slide1.png').default} />
          </div>
          <div>
          <img className="sldImg"  src={require('./img/sliderImg/slide2.png').default} />
          </div>
          <div>
          <img className="sldImg"  src={require('./img/sliderImg/slide3.png').default} />
          </div>
          <div>
          <img className="sldImg"  src={require('./img/sliderImg/slide4.png').default} />
          </div>
        </Slider>
      </>
    );
};

export default SliderImg;