import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Auth } from "aws-amplify";
import "./Login.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  function validateForm() {
    const passMatch = confirmPassword === password
    return (
      email.length > 0 && password.length > 0
      && confirmPassword.length > 0 && firstName.length > 0
      && lastName.length > 0 && passMatch
    )
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: email,
        password: password,
      });

      alert("Success");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="firstName" bsSize="large">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="lastName" bsSize="large">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="gender" bsSize="large">
          <FormLabel>Gender</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={gender}
            onChange={e => setGender(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
