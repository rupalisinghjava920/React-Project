// import { Navbar, Nav, Container, Badge } from "react-bootstrap";
// import { Link, useNavigate } from 'react-router-dom';
// import { CartContext } from '../CartContext';
// import { useContext } from 'react';


// function Header() {
//   const navigate = useNavigate();
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   const authority = localStorage.getItem("authority");
//   const { cartCount } = useContext(CartContext);


//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand>🛒 Shopping Site</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {!isLoggedIn && (
//               <>
//                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                 <Nav.Link as={Link} to="/sign-up">Register</Nav.Link>
//               </>
//             )}

//             {isLoggedIn && authority === "ROLE_ADMIN" && (
//               <>
//                 <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
//                 <Nav.Link as={Link} to="/productListing">Product List</Nav.Link>
//                 <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//               </>
//             )}

//             {isLoggedIn && authority === "ROLE_USER" && (
//               <>
//                 <Nav.Link as={Link} to="/home">Home</Nav.Link>  
//                 <Nav.Link as={Link} to="/cart" style={{ color: 'white' }}>
//                   Cart <Badge bg="">{cartCount}</Badge>
//                 </Nav.Link>
//                 <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;


// import { Navbar, Nav, Container, Badge } from "react-bootstrap";
// import { Link, useNavigate } from 'react-router-dom';

// function Header({ cartCount, isLoggedIn, setIsLoggedIn, authority, setAuthority }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("authority");
//     // You can also clear token or other auth data if used
//     setIsLoggedIn(false);
//     setAuthority("");
//     navigate("/login");
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand>🛒 Shopping Site</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                 <Nav.Link as={Link} to="/sign-up">Register</Nav.Link>
//                 <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
//                 <Nav.Link as={Link} to="/admin/productListing">Product List</Nav.Link>
//                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                 <Nav.Link as={Link} to="/user/cart">
//                   Cart <Badge bg="">{cartCount}</Badge>
//                 </Nav.Link>
//                 <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
             

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;


import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

function Header({ cartCount, isLoggedIn, setIsLoggedIn, authority, setAuthority }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authority");
    // You can also clear token or other auth data if used
    setIsLoggedIn(false);
    setAuthority("");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>🛒 Shopping Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn ? (
          <>
            {authority === "ROLE_ADMIN" ? (
              <>
                <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
                <Nav.Link as={Link} to="/admin/productListing">Product List</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/user/cart">
                  Cart <Badge bg="secondary">{cartCount}</Badge>
                </Nav.Link>
              </>
            )}
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
          </>
        )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
