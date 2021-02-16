import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const ChangePasswordForm = () => {
  let user = useParams();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [err, setErr] = useState(null);
  const [noMatch, setNoMatch] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChangePassword = () => {
    axios
      .post(`/reset/${user.email}/${user.token}/${password}`)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (response) {
    return <div>{response}</div>;
  }
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleChangePassword();
      }}
    >
      Reset password for: {user.user}
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
      {noMatch && <span style={{ fontSize: '14px', color: 'red' }}>Passwords do not match</span>}
      <Form.Group controlId='formBasicConfirmPassword'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            e.target.value !== password ? setNoMatch(true) : setNoMatch(false);
          }}
          type='password'
          placeholder='Password'
          required
        />
      </Form.Group>
      {err ? (
        <span style={{ fontSize: '14px', color: 'red' }}>
          {err}
          <br></br>
        </span>
      ) : null}
      <Button disabled={noMatch} variant='primary' type='submit'>
        Change Password
      </Button>
    </Form>
  );
};
