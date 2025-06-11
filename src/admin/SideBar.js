import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';

function Sidebar() {

    const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);

    const toggleStatusMenu = () => setIsStatusMenuOpen(!isStatusMenuOpen);

    return (
        <div className="bg-primary text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
            <h5 className="mb-4 text-warning"><i class="fas fa-home" style={{ color: '#ffc107', fontSize: '20px' }}></i> Dashboard</h5>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/admin/dashboard" className="nav-link text-white">
                        <i class="fas fa-home" style={{ fontSize: '15px' }}></i> Dashboard Layouts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/category" className="nav-link text-white">
                        <i class="fas fa-list" style={{ fontSize: '15px' }}></i> Category
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/brand" className="nav-link text-white">
                        <i class="fas fa-tags" style={{ fontSize: '15px' }}></i> Brand
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/add-product" className="nav-link text-white">
                        <i class="fas fa-plus-circle"></i> Product
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/view-product" className="nav-link text-white">
                        <i class="fas fa-eye"></i> View Product
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/admin/order" className="nav-link text-white">
                        <i class="fas fa-box"></i> Order
                    </NavLink>
                </li>
                {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-white">
                        <i class="fas fa-info-circle"></i> Status
                    </DropdownToggle>
                    <DropdownMenu right className="bg-primary text-white">
                        <DropdownItem>Pending</DropdownItem>
                        <DropdownItem>Approved</DropdownItem>
                        <DropdownItem divider /> 
                        <DropdownItem>Rejected</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> */}

                <li className="nav-item">
                    <div className="nav-link text-white" style={{ cursor: 'pointer' }} onClick={toggleStatusMenu}>
                         <Link to="/admin/pending" className="text-white text-decoration-none">
                        <i class="fas fa-clock"></i> Pending Product </Link>
                        {/* <i className="fas fa-info-circle"></i> Status <i class="bi bi-caret-down-fill"></i> */}
                    </div>
                    {/* {isStatusMenuOpen && (
                        <ul className=" bg-primary text-white">
                            <li className="list-group-item bg-primary ">
                                <Link to="/admin/pending" className="text-white text-decoration-none"><i class="fas fa-clock"></i> Pending</Link>
                            </li>
                            <li className="list-group-item bg-primary ">
                                <Link to="/admin/approved" className="text-white text-decoration-none"><i className="fas fa-check-circle"></i> Approved</Link>
                            </li>
                            <li className="list-group-item bg-primary ">
                                <Link to="/admin/rejected" className="text-white text-decoration-none"><i class="fas fa-times-circle"></i> Rejected</Link>
                            </li>
                        </ul>
                    )} */}
                </li>

                <li className="nav-item">
                    <NavLink to="/" className="nav-link text-white">
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </NavLink>
                </li>

            </ul>
        </div>
    );
}
export default Sidebar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <>
//       {/* Toggle Button - visible only on small screens */}
//       <button
//         className="btn btn-secondary d-md-none m-2"
//         onClick={toggleSidebar}
//         style={{ position: "fixed", top: "10px", left: "10px", zIndex: 1100 }}
//       >
//         <i className="fas fa-bars"></i>
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`bg-secondary text-white p-3 position-fixed start-0 ${
//           isOpen ? "d-block" : "d-none"
//         } d-md-block`}
//         style={{ width: "250px", height: "100vh", top: "56px", zIndex: 1050 }}
//       >
//         <h5 className="mb-4 text-warning">
//           <i className="fas fa-home" style={{ color: "#ffc107", fontSize: "20px" }}></i>{" "}
//           Dashboard
//         </h5>
//         <ul className="nav flex-column">
//           <li className="nav-item">
//             <NavLink to="/admin/dashboard" className="nav-link text-white" onClick={() => setIsOpen(false)}>
//               <i className="fas fa-home" style={{ fontSize: "15px" }}></i> Dashboard Layouts
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/admin/add-product" className="nav-link text-white" onClick={() => setIsOpen(false)}>
//               <i className="fas fa-plus-circle"></i> Product
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/admin/view-product" className="nav-link text-white" onClick={() => setIsOpen(false)}>
//               <i className="fas fa-eye"></i> View Product
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/admin/detail" className="nav-link text-white" onClick={() => setIsOpen(false)}>
//               <i className="fas fa-file-alt"></i> Detail Product
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/admin/order" className="nav-link text-white" onClick={() => setIsOpen(false)}>
//               <i className="fas fa-box"></i> Order
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/admin/manage-users" className="nav-link text-white" onClick={() => setIsOpen(false)}>
//               <i className="fas fa-user-tie"></i> Manage Users
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/" className="nav-link text-white" onClick={() => setIsOpen(false)}>
//               <i className="fas fa-sign-out-alt"></i> Logout
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Sidebar;
