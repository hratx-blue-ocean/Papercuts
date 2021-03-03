import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const ChangePasswordForm = () => {
  const { email, token } = useParams();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [err, setErr] = useState('');
  const [noMatch, setNoMatch] = useState('');
  const [response, setResponse] = useState(null);

  return response ? (
    <div>{response}</div>
  ) : (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleChangePassword(email, token, password, setResponse);
      }}
    >
      Reset password for: {email}
      <br />
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type='password'
          placeholder='Password'
          required
        />
      </Form.Group>
      <span className='text-danger font-weight-bold'>{noMatch}</span>
      <Form.Group controlId='formBasicConfirmPassword'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            e.target.value !== password ? setNoMatch('Passwords do not match') : setNoMatch('');
          }}
          type='password'
          placeholder='Password'
          required
        />
      </Form.Group>
      <span className='text-danger font-weight-bold'>
        {err}
        <br></br>
      </span>
      <Button disabled={noMatch} variant='primary' type='submit'>
        Change Password
      </Button>
    </Form>
  );
};

const handleChangePassword = (email, token, password, setResponse) => {
  axios
    .post(`/reset/${email}/${token}/${password}`)
    .then((res) => {
      setResponse(res.data);
      setTimeout(() => {
        sendLogin(email, password);
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendLogin = (email, password) => {
  axios
    .post(`/api/auth/login?email=${email}&password=${password}`, null, {
      withCredentials: true
    })
    .then(() => {
      window.location.reload(false);
    })
    .catch((err) => {
      setErr(err.response.data.message);
    });
};
