import { useContext } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartCount } = useContext(CartContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className="text">Shopping Side</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/productCard">Product</Nav.Link>
            <Nav.Link as={Link} to="/productListing">Product List</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
            <span style={{ color: 'white', marginRight: '5px' }}>Cart :</span>
            <Badge bg="">{cartCount}</Badge>
          </Nav.Link>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
