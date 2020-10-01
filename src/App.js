import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/login">Log In</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/register">Sign Up</Link>
        </Navbar.Brand>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
