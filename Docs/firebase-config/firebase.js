import Firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.SENDER_ID,
  // appId: process.env.APP_ID,
  apiKey: 'AIzaSyAzU8hVZVKslQ9y7RVS9c5hgI5hVktDXQQ',
  authDomain: 'papercuts-8b86c.firebaseapp.com',
  projectId: 'papercuts-8b86c',
  storageBucket: 'papercuts-8b86c.appspot.com',
  messagingSenderId: '554966896828',
  appId: '1:554966896828:web:cff09af0782797843200b9',
};
const app = Firebase.initializeApp(firebaseConfig);
export const firebaseStorage = app.storage();
