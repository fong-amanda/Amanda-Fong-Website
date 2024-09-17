import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "./scrapbook.css";
import tasa1 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa1.jpg";
import tasa2 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa2.jpg";
import tasa3 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa3.jpg";
import tasa4 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa4.jpg";
import tasa5 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa5.jpg";
import tasa6 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa6.jpg";
import tasa7 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa7.jpg";
import tasa8 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa8.jpg";
import tasa9 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa9.jpg";
import tasa10 from "../Scrapbook/scrapbookImages/tasaRetreat/tasa10.jpg";

function TasaRetreat() {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const captionsRef = React.useRef(null);

  const toggleLightbox = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const captions = [
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "1/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "2/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "3/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "4/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "5/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "6/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "7/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "8/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "9/10"],
    [<strong>Tasa Retreat Scrapbook</strong>, <br />, "10/10"],
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const sliderImageUrl = [
    tasa1, tasa2, tasa3, tasa4, tasa5,
    tasa6, tasa7, tasa8, tasa9, tasa10,
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
        {sliderImageUrl.map((imageUrl, index) => (
          <div
            className="slider"
            key={index}
            onClick={() => toggleLightbox(index)}
          >
            <img src={imageUrl} alt={`Tasa Retreat ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        className="lightboxPhoto"
        slides={sliderImageUrl.map((imageUrl, index) => ({
          src: imageUrl,
          description: captions[index],
        }))}
        index={selectedImageIndex}
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
}

export default TasaRetreat;
