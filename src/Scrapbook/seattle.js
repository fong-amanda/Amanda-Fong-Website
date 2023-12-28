import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./scrapbook.css";
import seattle1 from "../Scrapbook/scrapbookImages/seattle/seattle1.jpg"
import seattle2 from "../Scrapbook/scrapbookImages/seattle/seattle2.jpg"
import seattle3 from "../Scrapbook/scrapbookImages/seattle/seattle3.jpg"
import seattle4 from "../Scrapbook/scrapbookImages/seattle/seattle4.jpg"
import seattle5 from "../Scrapbook/scrapbookImages/seattle/seattle5.jpg"
import seattle6 from "../Scrapbook/scrapbookImages/seattle/seattle6.jpg"
import seattle7 from "../Scrapbook/scrapbookImages/seattle/seattle7.jpg"
import seattle8 from "../Scrapbook/scrapbookImages/seattle/seattle8.jpg"
import seattle9 from "../Scrapbook/scrapbookImages/seattle/seattle9.jpg"
import seattle10 from "../Scrapbook/scrapbookImages/seattle/seattle10.jpg"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 
  }
};
const sliderImageUrl = [  seattle1,
  seattle2, seattle3, seattle4, seattle5, seattle6, seattle7, seattle8, seattle9, seattle10,
];
const Seattle = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        // dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Seattle;
