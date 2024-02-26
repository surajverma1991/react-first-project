import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function Header() {

  const user = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto nav-bar-wrapper">
          {
            localStorage.getItem('user-info') ?
            <>
              <Link to="/add">Add Product</Link>
              <Link to="/update">Update Product</Link>
            </>
            :
            <>
              <Link to="/login">Login Product</Link>
              <Link to="/register">Register Product</Link>
            </>
          }
        </Nav>
        {
            localStorage.getItem('user-info') ?
            <Nav>
              <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            : null
        }
      </Navbar>
    </div>
  );
}
