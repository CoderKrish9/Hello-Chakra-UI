import React from 'react';
import Slider from 'react-slick';
import { Ticket, NextArrow, PrevArrow } from './Tickett';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ticketData = [
  { userName: "Amit Kumar", userNumber: 1, totalUsers: 3,eventName: "57 Community Meals",eventTime: "2023-12-26 (1 pm - 4 pm)",venue: "Near NVCC" },
  { userName: "Nandkumar Hari",userNumber: 2, totalUsers: 3,eventName: "57 Community Meals",eventTime: "2023-12-26 (1 pm - 4 pm)", venue: "Near NVCC" },
  { userName: "Namrup Avatar", userNumber: 3, totalUsers: 3,eventName: "57 Community Meals",eventTime: "2023-12-26 (1 pm - 4 pm)",venue: "Near NVCC" },
];

export const TicketCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
      {ticketData.map((ticket, index) => (
        <div key={index}>
          <Ticket {...ticket} />
        </div>
      ))}
    </Slider>
  );
};
