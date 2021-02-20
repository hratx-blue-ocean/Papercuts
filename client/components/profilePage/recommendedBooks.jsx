import React, { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import BookDetail from '../global/BookDetail.jsx';
import Carousel from 'react-multi-carousel';
import '../../../node_modules/react-multi-carousel/lib/styles.css';
import './profileStyles.css';

export default function RecommendedBooks() {

  // useEffect(() => {
  //   updateKeyword('');
  // }, []);

  const { trendingBooks } = useContext(AppContext);
  const [selectedBook, setselectedBook] = useState(books);
  const [clickedBook, setClickedBook] = useState();
  const [show, setShow] = useState(false);

  const books = [];

  const responsiveSettings = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1500, min: 700 },
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
      <div className="recommendedBooksContainer">
      <h1>Recommended Books</h1>
      {trendingBooks &&
        <div>{trendingBooks.title}</div>
      }
      <Carousel
        responsive={responsiveSettings}
        swipeable={true}
        draggable={true}
        showDots={true}
        itemClass='carousel-item-padding-40-px'

        // renderButtonGroupOutside={true}
      >
        {trendingBooks &&
          trendingBooks.map(book => {
            return (
              <div className="recommendedBookBody" key={book.industryIdentifiers[0].identifier}>
                <img
                  className='recommendedBookImage'
                  src={book.imageLinks.thumbnail}
                  onClick={() => {
                    setClickedBook(book);
                    setShow(true);
                  }}
                />
                { !trendingBooks ?
                  <Spinner animation='border' role='status'>
                    <span className='sr-only'>Loading...</span>
                  </Spinner> :
                  <BookDetail
                    handleClose={() => {
                      setShow(false);
                    }}
                    show={show}
                    book={clickedBook}
                  />
                }
              </div>
            )
          })
        }

        {/* <img className="recommendedBookImage" src="http://books.google.com/books/content?id=xUNEAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
        <img className="recommendedBookImage" src="http://books.google.com/books/content?id=IV5HDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <img className="recommendedBookImage" src="http://books.google.com/books/content?id=qzzLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <img className="recommendedBookImage" src="http://books.google.com/books/content?id=dhkSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <img className="recommendedBookImage" src="http://books.google.com/books/content?id=gI2RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <img className="recommendedBookImage" src="http://books.google.com/books/content?id=zocZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" /> */}
      </Carousel>
    </div>
  );
}

