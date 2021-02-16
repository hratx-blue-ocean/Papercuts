//use this template for how to uploading your image to Firebase storage and get a image url back
// don't edit this file, this file is for template use only
import React, { useRef, useState } from 'react';
import { firebaseStorage } from './firebase'; // make sure import the right path.

const Test = () => {
  const [url, setUrl] = useState('');
  const fileRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const storageRef = firebaseStorage.ref(fileRef.current.files[0].name);
    storageRef.put(fileRef.current.files[0]).then((snapShot) => {
      setUrl(snapShot.ref.getDownloadURL());
      console.log('what is url', url); // you should have a promise that returns a url of the image;
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload image
          <input type="file" name="image" ref={fileRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
