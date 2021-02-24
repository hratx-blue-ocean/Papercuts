import React, { useState, useRef } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { firebaseStorage } from '../../../Docs/firebase-config/firebase'; // make sure import the right path.

export default function CreateBookClub({ user }) {
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);
  const fileRef1 = useRef();
  const fileRef2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return setShow(true);
    const storageRef1 = firebaseStorage.ref(fileRef1.current.files[0].name);
    const storageRef2 = firebaseStorage.ref(fileRef2.current.files[0].name);
    Promise.all([
      storageRef1.put(fileRef1.current.files[0]).then((snapShot) => snapShot.ref.getDownloadURL()),
      storageRef2.put(fileRef2.current.files[0]).then((snapShot) => snapShot.ref.getDownloadURL())
    ]).then((urls) => {
      return axios.post('/bookclub', {
        ...formData,
        owner: user._id,
        smallThumbnail: urls[0],
        thumbnail: urls[1]
      });
    });
    console.log('CLUB CREATED');
  };

  return (
    <Container className='py-4 my-5'>
      {show && (
        <Alert variant='danger' onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Please log in to create a book club.</p>
        </Alert>
      )}
      <h1>Create a Book Club</h1>
      <Form autoComplete='off' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type='input'
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type='textarea'
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Small Thumbnail</Form.Label>
          <Form.Control required type='file' name='smallThumbnail' ref={fileRef1} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control required type='file' name='thumbnail' ref={fileRef2} />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}
