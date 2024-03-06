import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "./scrapbook.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import one from "../Scrapbook/scrapbookImages/sem3/1sem3.jpg"
import two from "../Scrapbook/scrapbookImages/sem3/2sem3.jpg"
import three from "../Scrapbook/scrapbookImages/sem3/3sem3.jpg"
import four from "../Scrapbook/scrapbookImages/sem3/4sem3.jpg"
import five from "../Scrapbook/scrapbookImages/sem3/5sem3.jpg"
import six from "../Scrapbook/scrapbookImages/sem3/6sem3.jpg"
import seven from "../Scrapbook/scrapbookImages/sem3/7sem3.jpg"
import eight from "../Scrapbook/scrapbookImages/sem3/8sem3.jpg"
import nine from "../Scrapbook/scrapbookImages/sem3/9sem3.jpg"

function Sem3() {
  const [open, setOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const captionsRef = React.useRef(null);
  const toggleLightbox = (index) => {
    setSelectedImageIndex(index); // Set the selected image index
    setOpen(index !== -1);
  };

  const photoNames = [
    "1sem3.jpg",
    "2sem3.jpg",
    "3sem3.jpg",
    "4sem3.jpg",
    "5sem3.jpg",
    "6sem3.jpg",
    "7sem3.jpg",
    "8sem3.jpg",
    "9sem3.jpg",
  ]
  const captions = [
    [<strong>Semester 3 Scrapbook</strong>, <br />, "1/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "2/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "3/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "4/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "5/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "6/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "7/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "8/9"],
    [<strong>Semester 3 Scrapbook</strong>, <br />, "9/9"],
  ];
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
  const sliderImageUrl = [one,
    two, three, four, five, six, seven, eight, nine,
  ];
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div
              className="slider"
              key={index}
              onClick={() => toggleLightbox(index)}
            >
              <img src={imageUrl} alt="movie" />
            </div>
          );
        })}
      </Carousel>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        className="lightboxPhoto"
        // photo and captions that show up
        slides={photoNames.map((photoName, index) => ({
          src: `/scrapbookImages/sem3/${photoName}`,
          description: captions[index]
        }))}

        // opens associated image lightbox
        index={selectedImageIndex}

        // add captions
        plugins={[Captions]}
        captions={{ ref: captionsRef }}
        on={{
          click: () => {
            (captionsRef.current?.visible
              ? captionsRef.current?.hide
              : captionsRef.current?.show)?.();
          },
        }}
      />
    </div>
  );
};
export default Sem3;
