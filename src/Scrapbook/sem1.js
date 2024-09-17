// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Lightbox from "yet-another-react-lightbox";
// import "./scrapbook.css";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/captions.css";
// import Captions from "yet-another-react-lightbox/plugins/captions";
// import sem1 from "../Scrapbook/scrapbookImages/sem1/1sem1.jpg"
// import sem1Two from "../Scrapbook/scrapbookImages/sem1/2sem1.jpg"
// import sem1Three from "../Scrapbook/scrapbookImages/sem1/3sem1.jpg"
// import sem1Four from "../Scrapbook/scrapbookImages/sem1/4sem1.jpg"
// import sem1Five from "../Scrapbook/scrapbookImages/sem1/5sem1.jpg"
// import sem1Six from "../Scrapbook/scrapbookImages/sem1/6sem1.jpg"
// import sem1Seven from "../Scrapbook/scrapbookImages/sem1/7sem1.jpg"
// import sem1Eight from "../Scrapbook/scrapbookImages/sem1/8sem1.jpg"
// import sem1Nine from "../Scrapbook/scrapbookImages/sem1/9sem1.jpg"
// import sem1Ten from "../Scrapbook/scrapbookImages/sem1/10sem1.jpg"

// function Sem1() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const captionsRef = React.useRef(null);
//   const toggleLightbox = (index) => {
//     setSelectedImageIndex(index); // Set the selected image index
//     setOpen(index !== -1);
//   };

//   const photoNames = [
//     "1sem1.jpg",
//     "2sem1.jpg",
//     "3sem1.jpg",
//     "4sem1.jpg",
//     "5sem1.jpg",
//     "6sem1.jpg",
//     "7sem1.jpg",
//     "8sem1.jpg",
//     "9sem1.jpg",
//     "10sem1.jpg",
//   ]
//   const captions = [
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "1/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "2/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "3/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "4/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "5/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "6/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "7/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "8/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "9/10"],
//     [<strong>Semester 1 Scrapbook</strong>, <br />, "10/10"],
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
//   const sliderImageUrl = [sem1,
//     sem1Two, sem1Three, sem1Four, sem1Five, sem1Six, sem1Seven, sem1Eight, sem1Nine, sem1Ten,
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
//           src: `/scrapbookImages/sem1/${photoName}`,
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
// export default Sem1;
