import Firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};
const app = Firebase.initializeApp(firebaseConfig);
export const firebaseStorage = app.storage();
