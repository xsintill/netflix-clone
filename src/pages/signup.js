import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || emailAddress === '' || password === '';

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .then((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              autcomplete="off"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              type="email"
            />
            <Form.Input
              placeholder="Password"
              autocomplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?
              <Form.Link to={ROUTES.SIGN_IN}> Sign in.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer>signup</FooterContainer>
    </>
  );
}
