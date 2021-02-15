import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export const TestPage = () => {
  const testImg = useRef();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(testImg.current.files[0]);

    try {
      let fileData = new FormData();
      fileData.set('image', testImg.current.files[0]);

      await axios({
        method: 'post',
        url: '/ttt',
        data: fileData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>---</h1>
      <Form onSubmit={submitHandler}>
        <Form.Label>Test Img</Form.Label>
        <Form.File label="IMG HERE" custom ref={testImg} />
        <hr />
        <Button type="submit" variant="primary">
          SUbmit
        </Button>
      </Form>
      <h1>---</h1>
    </>
  );
};
