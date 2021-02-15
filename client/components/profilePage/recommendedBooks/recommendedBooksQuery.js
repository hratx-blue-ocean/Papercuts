const axios = require('axios');

const nytSelectedLists = [
  'combined-print-fiction',
  'combined-print-nonfiction',
  'series-books',
  'young-adult',
  'audio-fiction',
  'audio-nonfiction',
  'chapter-books'
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

// const getRecommendedBooks = async () => {
//   const trendingBooks = [];
//   const selectBestSellers = [];
//   try {
//     // nytSelectedLists.forEach(async (listName) => {
//       // console.log('is this a list name: ', listName);
//       await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-fiction.json?&api-key=0u7qPMbjUFiEb2b8zkQlBRo8TSsk2Avm`)
//         // { params: { api-key: '0u7qPMbjUFiEb2b8zkQlBRo8TSsk2Avm'}, body: { list: listName}})
//         .then(topTitles => {
//           selectBestSellers.push(parseInt(topTitles.data.results.books[0].primary_isbn10));
//           // console.log(topTitles.data.results.books[0].primary_isbn10);
//           console.log(selectBestSellers);
//         })
//         // })
//         .catch(error => {
//           console.error(`Could not retrieve NYT: `, error.message);
//         })
//     // })
//     // try {
//     //   bestSellers.forEach(isbn => {
//     //     await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//     //       { params: { key: 'AIzaSyArmjVhT3A34knGwXM3oQ-OhQzLrJTjIRA'}})
//     //       .then(bookInfo => {
//     //         trendingBooks.push(bookInfo.data.volumeInfo);
//     //       })
//     //       .catch(error => {
//     //         console.error(`Could not retrieve Google API data for ${isbn}: ` error.message);
//     //       })
//     //   })
//     // } catch (error) {
//     //   console.log(`Google API request failed: `, error.message);
//     // }
//     // console.log(trendingBooks);
//     // return trendingBooks;
//  } catch(error) {
//    console.error(`Trending books retrieval failed overall: `, error.message);
//  }
// }

// Queries top books from NYT Books API lists; using NYT response, queries Google Books API for details
const getRecommendedBooks = async () => {
  const trendingBooks = [];
  const selectBestSellers = [];
  try {
    nytSelectedLists.forEach(async (listName) => {
      await axios
        .get('http://localhost:3000/book/bestsellers', { params: { list: 42 }})
        .then(topTitles => {
          // console.log(topTitles);
          // selectBestSellers.push(parseInt(topTitles.data.results.books[0].primary_isbn10));
        })
        .catch(error => {
          // console.error(`Could not retrieve NYT ${listName}: `, error.message);
        })
    });
    try {
      bestSellers.forEach(isbn => {
        axios.get('/book/trending',
        { params: { isbn: isbn, apikey: 'AIzaSyArmjVhT3A34knGwXM3oQ-OhQzLrJTjIRA' }})
          .then(bookInfo => {
            trendingBooks.push(bookInfo.data.volumeInfo);
          })
          .catch(error => {
            console.error(`Could not retrieve Google API data for ${isbn}: ` error.message);
          })
      })
    } catch (error) {
      console.log(`Google API request failed: `, error.message);
    }
    // console.log('this are the trending books: ', selectBestSellers);
 } catch(error) {
  //  console.error(`Trending books retrieval failed overall: `, error.message);
 }
}

getRecommendedBooks();

