// import { Navbar, Nav, Container, Badge } from "react-bootstrap";
// import { Link, useNavigate } from 'react-router-dom';
// import { CartContext } from '../CartContext';
// import { useContext, useState } from 'react';
// import MiniProfileCard from "../pages/user/MiniProfileCard";
// import { FaUserCircle } from 'react-icons/fa';

// function Header({ setSearchTerm, isLoggedIn, setIsLoggedIn, authority, setAuthority }) {
//   const navigate = useNavigate();
//   const { cartCount } = useContext(CartContext);
//   const [showProfile, setShowProfile] = useState(false);
//   const userId = localStorage.getItem("userId");

//   const toggleProfile = () => {
//     setShowProfile(prev => !prev);
//   };
//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };


//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("authority");
//     setIsLoggedIn(false);
//     setAuthority("");
//     navigate("/login");
//   };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand className="text">🛒 Shopping Site</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <input type="text" placeholder="Search" onChange={handleChange} />
//           <Nav className="ms-auto">
//             {isLoggedIn ? (
//               <>
//                 {authority === "ROLE_ADMIN" ? (
//                   <>
//                     <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
//                     <Nav.Link as={Link} to="/admin/productListing">Product List</Nav.Link>
//                   </>
//                 ) : (
//                   <>
//                     <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                     <Nav.Link as={Link} to="/user/cart">
//                       Cart <Badge bg="">{cartCount}</Badge>
//                     </Nav.Link>
//                   </>
//                 )}
//                 <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//               </>
//             ) : (
//               <>
//                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                 <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
//               </>
//             )}
//             {/* <ul className="navbar-nav ms-auto">
//               <li className="nav-item position-relative"> */}
//             <span className="nav-link" style={{ cursor: 'pointer' }} onClick={toggleProfile}>
//               <FaUserCircle /> My Profile
//             </span>
//             {showProfile && (
//               <div style={{ position: 'absolute', top: '60px', right: '20px', backgroundColor: 'white', padding: '10px', zIndex: 999 }}>
//                 <MiniProfileCard userId={userId} onClose={() => setShowProfile(false)} />
//               </div>
//             )}
//             {/* </li>
//             </ul> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;


import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { useContext, useState } from 'react';
import MiniProfileCard from "../pages/user/MiniProfileCard";
import { FaUserCircle } from 'react-icons/fa';

function Header({ setSearchTerm, isLoggedIn, setIsLoggedIn, authority, setAuthority }) {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  const [showProfile, setShowProfile] = useState(false);
  const userId = localStorage.getItem("userId");

  const toggleProfile = () => {
    setShowProfile(prev => !prev);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("authority");
    setIsLoggedIn(false);
    setAuthority("");
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container style={{ position: 'relative' }}>
        <Navbar.Brand className="text">🛒 Shopping Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <input type="text" placeholder="Search" onChange={handleChange} />
          <Nav className="ms-auto">
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
                      Cart <Badge bg="">{cartCount}</Badge>
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
            <span className="nav-link" style={{ cursor: 'pointer' }} onClick={toggleProfile}>
              <FaUserCircle /> My Profile
            </span>
          </Nav>
        </Navbar.Collapse>

        {/* Floating MiniProfileCard */}
        {showProfile && (
          <div
            style={{
              position: 'absolute',
              top: '60px',
              right: '20px',
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 999,
              width: '250px'
            }}
          >
            <MiniProfileCard userId={userId} onClose={() => setShowProfile(false)} />
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;

