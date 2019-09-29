import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const MainCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true
      };
    return (
        <div>
        <h2> </h2>
        <Slider {...settings} >
          <div className = "carousel-text" > The Hotel
            <img className = "carousel-image" src = {require("../assets/photos/hotel-front.jpeg")} alt = "hotel front" />
          </div>
          <div className = "carousel-text" >Hotel Lobby
            <img className = "carousel-image" src = {require("../assets/photos/hotel-lobby.jpeg")} alt = "hotel lobby" />
          
          </div>
          <div className = "carousel-text" >King Suite
            <img className = "carousel-image" src = {require("../assets/photos/hotel-room.jpeg")} alt = "hotel room" />
            
          </div>
          <div className = "carousel-text" >King Suite
            <img className = "carousel-image" src = {require("../assets/photos/hotel-king.jpeg")} alt = "hotel room" />
          
          </div>
          <div className = "carousel-text"  >
            <img className = "carousel-image" src = {require("../assets/photos/hotel-bathroom.jpeg")} alt = "hotel restroom" />
          
          </div>
          <div className = "carousel-text"  >Pool
            <img className = "carousel-image" src = {require("../assets/photos/hotel-pool.jpeg")} alt = "hotel pool" />
          
          </div>
        </Slider>

        </div>
    )
}

export default MainCarousel