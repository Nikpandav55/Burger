import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';  //bootstarp css import
import "bootstrap-icons/font/bootstrap-icons.css";   // import the icon link
import { Link } from "react-router-dom";
//import logo from "../../assets/logo/logo.png"
import logo from "../../assets/newlogo.png"
import './Header.css'

export default function Header() {

  const [nav, setnav] = useState(false);

  const changscroll = () => {
    const scrollvalue = document?.documentElement?.scrollTop;
    scrollvalue > 100 ? setnav(true) : setnav(false)
  }
  window.addEventListener("scroll",changscroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`} >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/Menu">our Menu</Nav.Link>
              <Nav.Link as={Link} to="/Shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/Concat">Concat</Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="Cart">
                  <i class="bi bi-bag fs-5"></i>
                  <em className="roundpoint"></em>
                </div></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
      
  );

}