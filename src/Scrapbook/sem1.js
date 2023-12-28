import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./scrapbook.css";
import sem1 from "../Scrapbook/scrapbookImages/sem1/1sem1.jpg"
import sem1Two from "../Scrapbook/scrapbookImages/sem1/2sem1.jpg"
import sem1Three from "../Scrapbook/scrapbookImages/sem1/3sem1.jpg"
import sem1Four from "../Scrapbook/scrapbookImages/sem1/4sem1.jpg"
import sem1Five from "../Scrapbook/scrapbookImages/sem1/5sem1.jpg"
import sem1Six from "../Scrapbook/scrapbookImages/sem1/6sem1.jpg"
import sem1Seven from "../Scrapbook/scrapbookImages/sem1/7sem1.jpg"
import sem1Eight from "../Scrapbook/scrapbookImages/sem1/8sem1.jpg"
import sem1Nine from "../Scrapbook/scrapbookImages/sem1/9sem1.jpg"
import sem1Ten from "../Scrapbook/scrapbookImages/sem1/10sem1.jpg"

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
const sliderImageUrl = [  sem1,
  sem1Two, sem1Three, sem1Four, sem1Five, sem1Six, sem1Seven, sem1Eight, sem1Nine, sem1Ten,
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
