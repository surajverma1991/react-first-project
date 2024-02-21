import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
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
      </Navbar>
    </div>
  );
}
