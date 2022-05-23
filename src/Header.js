import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Nav.Item><Link to="/" className="nav-link">Home</Link></Nav.Item>
        <Nav.Item><Link to="/about" className="nav-link">About</Link></Nav.Item>
      </Navbar>
    )
  }
}

export default Header;
