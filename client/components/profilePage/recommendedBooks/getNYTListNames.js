const axios = require('axios');

const getNYTListNames = async () => {
  const listNames = [];
  try {
  const data = await axios
    .get('http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=0u7qPMbjUFiEb2b8zkQlBRo8TSsk2Avm')
    .then(response => {
      response.data.results.forEach(name => {
        listNames.push(name.list_name_encoded);
      })
    })
    .catch(error => {
      console.error('Could not retrieve encoded list names: ', error.message);
    })
    console.log('this is the length: ', listNames.length);
  } catch (error) {
    console.error('Dang system went down', error.message);
  }
}


