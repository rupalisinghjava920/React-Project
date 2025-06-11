import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Form, Input, Col, InputGroup, InputGroupText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { FaSignInAlt, FaUserPlus, FaUserShield, FaShoppingCart } from "react-icons/fa";

function Header({ searchTerm, setSearchTerm }) {
  // const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { cart } = useCart();


  // if (location.pathname.startsWith('/admin')) {
  //   return null;
  // }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ overflow: 'auto', width: '100%' }}>
      <Navbar color="primary" dark expand="md" >

        <NavbarBrand className='heading'><FaShoppingCart style={{ marginRight: "6px", color: '#ffc107' }} />Online Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href='/'>Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/cart" className="nav-link">
                <FaShoppingCart style={{ marginRight: "5px" }} />Cart <sup>{cart.length}</sup>
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <Nav>
            <Col md={10} className="d-flex justify-content-end">
              <Form inline>
                <InputGroup style={{ maxWidth: "300px" }}>
                  <InputGroupText>
                    <FaSearch />
                  </InputGroupText>
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </InputGroup>
              </Form>
            </Col>
          </Nav>

          <Nav>
            <NavItem>
              <NavLink tag={Link} to='/login' className="text-white">
                <FaSignInAlt style={{ marginRight: "5px" }} />Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/register' className="text-white">
                <FaUserPlus style={{ marginRight: "5px" }} />Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/admin/dashboard' className="text-white">
                <FaUserShield style={{ marginRight: "5px" }} />Admin</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;