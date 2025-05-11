import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Header(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="text">Shopping Side</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav"/>
                        <Navbar.Collapse id="navbar-nav"/>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/productCard">Product</Nav.Link>
                                <Nav.Link as={Link} to="/productListing">Product List</Nav.Link>
                                <Nav.Link as={Link} to="/productDetail">Product Detail</Nav.Link>
                                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                            </Nav>
            </Container>
        </Navbar>
    )
}
export default Header;