// // Read user cookie
// export default function getTrendingBooksCookie(trendingBooksToStore) {
//   // Split cookie string and get all individual name=value pairs in an array
//   // var cookieArr = document.cookie.split(";");
//   let storedTrendingBooks = document.cookie.match('trendingBooks');
//   console.log(document.cookie.match('trendingBooks'));

//     // let storedTrendingBooks = document.cookie.match(new RegExp('trendingBooks' + '=([^;]+)'));
//   if (storedTrendingBooks) {
//     storedTrendingBooks && (storedTrendingBooks = JSON.parse(storedTrendingBooks[1]));
//     return storedTrendingBooks
//   } else {
//     setTrendingBooksCookie(storedTrendingBooks)
//   }
// };

// // Create user cookie
// function setTrendingBooksCookie(value) {
//   // Encode value in order to escape semicolons, commas, and whitespace
//   let date = new Date();
//   date.setHours(date.getHours() + 1);
//   expires = "; expires" + date.toGMTString();

//   let trendingBooks = JSON.stringify(value);
//   let cookieName = 'TRENDING_BOOKS='

//   document.cookie = cookieName + '=' + trendingBooks + expires + '; path=/; SameSite=Strict';

//   // let cookie = ['trendingBooks=', JSON.stringify(value), '; expires=', (date), '; SameSite=Strict'].join('');

//   // let booksCookie = `trendingBooks= ${JSON.stringify(value)}; expires=${date}; SameSite=Strict`

//   let booksCookie = 'trendingBooks= 0; SameSite=Strict';
//   document.cookie = booksCookie;
// };


const setTrendingBooksCookie = (name = 'TRENDING_BOOKS', value, hours = 1, path = '/') => {
  const expires = new Date(Date.setHours(Date.getHours + hours)).toUTCString();
  // document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path + '; SameSite=Strict';
  sessionStorage.setItem(document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path + '; SameSite=Strict');
}

export default function getTrendingBooksCookie(booksToStore) {

  name = 'TRENDING_BOOKS';

  const cookie = document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=')
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '')

  if (cookie) {
    return cookie;
  }
}