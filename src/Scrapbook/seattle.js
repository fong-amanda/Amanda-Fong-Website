// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/captions.css";
// import Captions from "yet-another-react-lightbox/plugins/captions";
// import "./scrapbook.css";
// import seattle1 from "../Scrapbook/scrapbookImages/seattle/seattle1.jpg"
// import seattle2 from "../Scrapbook/scrapbookImages/seattle/seattle2.jpg"
// import seattle3 from "../Scrapbook/scrapbookImages/seattle/seattle3.jpg"
// import seattle4 from "../Scrapbook/scrapbookImages/seattle/seattle4.jpg"
// import seattle5 from "../Scrapbook/scrapbookImages/seattle/seattle5.jpg"
// import seattle6 from "../Scrapbook/scrapbookImages/seattle/seattle6.jpg"
// import seattle7 from "../Scrapbook/scrapbookImages/seattle/seattle7.jpg"
// import seattle8 from "../Scrapbook/scrapbookImages/seattle/seattle8.jpg"
// import seattle9 from "../Scrapbook/scrapbookImages/seattle/seattle9.jpg"
// import seattle10 from "../Scrapbook/scrapbookImages/seattle/seattle10.jpg"


// function Seattle() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const captionsRef = React.useRef(null);
//   const toggleLightbox = (index) => {
//     setSelectedImageIndex(index); // Set the selected image index
//     setOpen(index !== -1);
//   };

//   const photoNames = [
//     "seattle1.jpg",
//     "seattle2.jpg",
//     "seattle3.jpg",
//     "seattle4.jpg",
//     "seattle5.jpg",
//     "seattle6.jpg",
//     "seattle7.jpg",
//     "seattle8.jpg",
//     "seattle9.jpg",
//     "seattle10.jpg",
//   ]
//   const captions = [
//     [<strong>Seattle Scrapbook</strong>, <br />, "1/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "2/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "3/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "4/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "5/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "6/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "7/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "8/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "9/10"],
//     [<strong>Seattle Scrapbook</strong>, <br />, "10/10"],
//   ];

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       slidesToSlide: 1
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 3,
//       slidesToSlide: 1
//     },
//     mobile: {
//       breakpoint: { max: 767, min: 464 },
//       items: 2,
//       slidesToSlide: 1
//     }
//   };
//   const sliderImageUrl = [seattle1,
//     seattle2, seattle3, seattle4, seattle5, seattle6, seattle7, seattle8, seattle9, seattle10,
//   ];
//   return (
//     <div className="parent">
//       <Carousel
//         responsive={responsive}
//         swipeable={true}
//         draggable={true}
//         showDots={false}
//         infinite={true}
//         partialVisible={false}
//       >
//         {sliderImageUrl.map((imageUrl, index) => {
//           return (

//             <div
//               className="slider"
//               key={index}
//               onClick={() => toggleLightbox(index)}>
//               <img src={imageUrl} alt="movie" />


//             </div>
//           );
//         })}
//       </Carousel>



//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         className="lightboxPhoto"
//         // photo and captions that show up
//         slides={photoNames.map((photoName, index) => ({
//           src: `/scrapbookImages/seattle/${photoName}`,
//           description: captions[index]
//         }))}

//         // opens associated image lightbox
//         index={selectedImageIndex}

//         // add captions
//         plugins={[Captions]}
//         captions={{ ref: captionsRef }}
//         on={{
//           click: () => {
//             (captionsRef.current?.visible
//               ? captionsRef.current?.hide
//               : captionsRef.current?.show)?.();
//           },
//         }}
//       />
//     </div>
//   );

// }
// export default Seattle;
