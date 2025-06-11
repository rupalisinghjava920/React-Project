import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useLocation } from "react-router-dom";

function ExtraNavbar({ setCategory }) {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' && (
                <Nav fill pills className="bg-light p-2">
                    <NavItem >
                        <NavLink className="text-black" href="#" onClick={() => setCategory("jens")}>Jens</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#" onClick={() => setCategory("fruit")}>Fruit</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#" onClick={() => setCategory("frock")}>Frock</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#" onClick={() => setCategory("milk")}>Milk</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#" onClick={() => setCategory("shoes")}>Shoes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-black" href="#" onClick={() => setCategory("fast food")}>Fast Food</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="text-black" onClick={() => setCategory("all")}>
                            All
                        </NavLink>
                    </NavItem>
                </Nav>
            )}
        </>
    );
}

export default ExtraNavbar;
