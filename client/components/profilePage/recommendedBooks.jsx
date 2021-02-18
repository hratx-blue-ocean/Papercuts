import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import '../../../node_modules/react-multi-carousel/lib/styles.css';
import './profileStyles.css';

// export default function RecommendedBooks() {
// const items = [
//   <img className="recommendedBookBody" src="http://books.google.com/books/content?id=xUNEAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />,
//   <img className="recommendedBookBody" src="http://books.google.com/books/content?id=IV5HDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />,
//   <img className="recommendedBookBody" src="http://books.google.com/books/content?id=qzzLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />,
//   <img className="recommendedBookBody" src="http://books.google.com/books/content?id=zocZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />,
//   <img className="recommendedBookBody" src="http://books.google.com/books/content?id=iYTcDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />,
//   <img className="recommendedBookBody" src="http://books.google.com/books/content?id=dhkSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />,
//   <img className="recommendedBookBody" src="http://books.google.com/books/content?id=gI2RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />

// ]

// <img src="http://books.google.com/books/content?id=zocZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />,
// <img src="http://books.google.com/books/content?id=iYTcDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />,
// <img src="http://books.google.com/books/content?id=dhkSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />,
// <img src="http://books.google.com/books/content?id=gI2RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />

//   const responsiveSettings = {
//     0: {
//         items: 5,
//     },
//     1024: {
//         items: 3
//     },
//     2000: {
//       items: 5
//     },
//     3000: {
//       items: 5
//     },
//     5000: {
//       items: 5
//     }
//   }

//   return(
//     <div className="recommendedBooksContainer">
//       <AliceCarousel responsive={responsiveSettings} items={items} />
//     </div>
//   )

// }

// const slideCount = {
//   0: {
//     items: 3
//   },
//   800: {
//     items:
//   }
//   1024: {
//     items: 5
//   }
// }
// return(
//   <AliceCarousel
//     items={items}
//     responsive={slideCount}
//   />
// )

export default function RecommendedBooks() {
  const books = [];

  const responsiveSettings = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5
    }
  };

  return (
    <div className='recommendedBooksContainer'>
      <h1>Recommended Books</h1>
      <Carousel
        className='recommendedBookBody'
        responsive={responsiveSettings}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true}
        infinite={true}
        itemClass='carousel-item-padding-40-px'
        autoPlay={true}
        autoPlaySpeed={5000}
        // renderButtonGroupOutside={true}
      >
        <img
          className='recommendedBookImage'
          src='http://books.google.com/books/content?id=xUNEAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        />
        <img
          className='recommendedBookImage'
          src='http://books.google.com/books/content?id=IV5HDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        />
        <img
          className='recommendedBookImage'
          src='http://books.google.com/books/content?id=qzzLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        />
        <img
          className='recommendedBookImage'
          src='http://books.google.com/books/content?id=dhkSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        />
        <img
          className='recommendedBookImage'
          src='http://books.google.com/books/content?id=gI2RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        />
        <img
          className='recommendedBookImage'
          src='http://books.google.com/books/content?id=zocZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        />
      </Carousel>
    </div>
  );
}
