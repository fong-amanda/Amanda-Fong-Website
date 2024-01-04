import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./scrapbook.css";
import one from "../Scrapbook/scrapbookImages/sem3/1sem3.jpg"
import two from "../Scrapbook/scrapbookImages/sem3/2sem3.jpg"
import three from "../Scrapbook/scrapbookImages/sem3/3sem3.jpg"
import four from "../Scrapbook/scrapbookImages/sem3/4sem3.jpg"
import five from "../Scrapbook/scrapbookImages/sem3/5sem3.jpg"
import six from "../Scrapbook/scrapbookImages/sem3/6sem3.jpg"
import seven from "../Scrapbook/scrapbookImages/sem3/7sem3.jpg"
import eight from "../Scrapbook/scrapbookImages/sem3/8sem3.jpg"
import nine from "../Scrapbook/scrapbookImages/sem3/9sem3.jpg"

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
const sliderImageUrl = [  one,
  two, three, four, five, six, seven, eight, nine,
];
const Sem1 = () => {
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
export default Sem1;
