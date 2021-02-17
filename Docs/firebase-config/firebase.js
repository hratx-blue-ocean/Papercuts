import Firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyAzU8hVZVKslQ9y7RVS9c5hgI5hVktDXQQ',
  authDomain: 'papercuts-8b86c.firebaseapp.com',
  projectId: 'papercuts-8b86c',
  storageBucket: 'papercuts-8b86c.appspot.com',
  messagingSenderId: '554966896828',
  appId: '1:554966896828:web:cff09af0782797843200b9',
};

const app = Firebase.initializeApp(firebaseConfig);

export const firebaseStorage = app.storage();
