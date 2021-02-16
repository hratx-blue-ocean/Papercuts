const axios = require('axios');
const Promise = require('bluebird');

// const nytSelectedLists = [
//   'combined-print-fiction',
//   'combined-print-nonfiction',
//   'series-books',
//   'young-adult',
//   'audio-fiction',
//   'audio-nonfiction',
//   'chapter-books'
// ]

const nytSelectedLists = [
  'combined-print-fiction'
]


const nytAllLists = [
  'combined-print-and-e-book-fiction',
  'combined-print-and-e-book-nonfiction',
  'hardcover-fiction',
  'hardcover-nonfiction',
  'trade-fiction-paperback',
  'mass-market-paperback',
  'paperback-nonfiction',
  'e-book-fiction',
  'e-book-nonfiction',
  'hardcover-advice',
  'paperback-advice',
  'advice-how-to-and-miscellaneous',
  'hardcover-graphic-books',
  'paperback-graphic-books',
  'manga',
  'combined-print-fiction',
  'combined-print-nonfiction',
  'chapter-books',
  'childrens-middle-grade',
  'childrens-middle-grade-e-book',
  'childrens-middle-grade-hardcover',
  'childrens-middle-grade-paperback',
  'paperback-books',
  'picture-books',
  'series-books',
  'young-adult',
  'young-adult-e-book',
  'young-adult-hardcover',
  'young-adult-paperback',
  'animals',
  'audio-fiction',
  'audio-nonfiction',
  'business-books',
  'celebrities',
  'crime-and-punishment',
  'culture',
  'education',
  'espionage',
  'expeditions-disasters-and-adventures',
  'fashion-manners-and-customs',
  'food-and-fitness',
  'games-and-activities',
  'graphic-books-and-manga',
  'hardcover-business-books',
  'health',
  'humor',
  'indigenous-americans',
  'relationships',
  'mass-market-monthly',
  'middle-grade-paperback-monthly',
  'paperback-business-books',
  'family',
  'hardcover-political-books',
  'race-and-civil-rights',
  'religion-spirituality-and-faith',
  'science',
  'sports',
  'travel',
  'young-adult-paperback-monthly'
]

const selectBestSellers = [];
const trendingBooks = [];

// Queries top books from NYT Books API lists; using NYT response, queries Google Books API for details
// const getRecommendedBooks = async () => {
//   const trendingBooks = [];
//   const selectBestSellers = [];
//   try {
//     nytSelectedLists.forEach(async (currentList) => {
//       await axios
//         .get('http://localhost:3000/book/bestsellers', { params: { apikey: '0u7qPMbjUFiEb2b8zkQlBRo8TSsk2Avm', list: currentList }})
//         .then(topTitle => {
//           selectBestSellers.push(parseInt(topTitle.data.results.books[0].primary_isbn10));
//           console.log(selectBestSellers);
//         })
//         .catch(error => { console.error(`Could not retrieve NYT ${currentList}: `, error.message) })
//     });
//     try {
//       selectBestSellers.forEach( (isbn) => {
//         axios.get('http://localhost:3000/book/trending',
//             { params: { bookIsbn: isbn, apikey: 'AIzaSyArmjVhT3A34knGwXM3oQ-OhQzLrJTjIRA' }})
//           .then(bookInfo => {
//             console.log('bookInfo: ', bookInfo)
//             trendingBooks.push(bookInfo);
//             console.log('trending books ', trendingBooks)
//           })
//           .catch(error => { console.error(`Could not retrieve Google API data for ${isbn}: `, error.message); })
//       })
//     } catch (error) {
//       console.log(`Google API request failed: `, error.message);
//     }
//     console.log('these are the trending books: ', trendingBooks);
//   } catch(error) {
//     console.error(`Trending books retrieval failed overall: `, error.message);
//   }
// }

// getRecommendedBooks();

const getRecommendedBooks = () => {
  // try {
    nytSelectedLists.forEach(async (currentList) => {
      await axios
        .get('http://localhost:3000/book/bestsellers', { params: { apikey: '0u7qPMbjUFiEb2b8zkQlBRo8TSsk2Avm', list: currentList }})
        .then(topTitle => {
          selectBestSellers.push(parseInt(topTitle.data.results.books[0].primary_isbn10));
          console.log(selectBestSellers);
        })
        .catch(error => { console.error(`Could not retrieve NYT ${currentList}: `, error.message) })
    })
  // } catch(error) {
  //   console.error(`Trending books retrieval failed overall: `, error.message);
  // }
};

const getBookInfo = ((resolve, reject) => {
  // try {
    selectBestSellers.forEach(async (isbn) => {
      await axios.get('http://localhost:3000/book/trending',
          { params: { bookIsbn: isbn, apikey: 'AIzaSyArmjVhT3A34knGwXM3oQ-OhQzLrJTjIRA' }})
        .then(bookInfo => {
          console.log('bookInfo: ', bookInfo)
          trendingBooks.push(bookInfo.data);
          // console.log('trending books ', trendingBooks)
        })
        .catch(error => { console.error(`Could not retrieve Google API data for ${isbn}: `, error.message); })
    })
  // } catch (error) {
  //   console.error('didnt work: ', error)
  // }
})

const getTrendingBooks = async () => {
  const bookISBNs = await getRecommendedBooks();

  Promise.all(
    bookISBNs.map(async (isbn) => {
      console.log(isbn);
    })
  )
}

// const getTrendingBooks = () => {
//   return Promise.all(getRecommendedBooks)
//     .then(promiseArray => { getBookInfo })
//     // .then(param => { console.log('anything here?', trendingBooks)})
//     .catch(error => { console.error('shucks: ', error)})
// }

getTrendingBooks()




const getRecommendedBooks = new Promise((resolve, reject) => {
  // try {
    nytSelectedLists.forEach(async (currentList) => {
      await axios
        .get('http://localhost:3000/book/bestsellers', { params: { apikey: '0u7qPMbjUFiEb2b8zkQlBRo8TSsk2Avm', list: currentList }})
        .then(topTitle => {
          selectBestSellers.push(parseInt(topTitle.data.results.books[0].primary_isbn10));
          console.log(selectBestSellers);
        })
        .catch(error => { console.error(`Could not retrieve NYT ${currentList}: `, error.message) })
    })
  // } catch(error) {
  //   console.error(`Trending books retrieval failed overall: `, error.message);
  // }
});