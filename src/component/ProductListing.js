// import React, { useState } from "react";
// import { Card, Container, Table, Row, Col, Pagination, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const products = [
//   { id: 1, name: "Namkin", price: 400, quantity: 2, weight: "200g", image: "/images/1.png" },
//   { id: 2, name: "Namkin", price: 500, quantity: 1, weight: "250g", image: "/images/2.png" },
//   { id: 3, name: "Teachers Day Cake", price: 400, quantity: 2, weight: "100g", image: "/images/teachersday.jpg" },
//   { id: 4, name: "Truffle Cake", price: 800, quantity: 4, weight: "400g", image: "/images/trufflecake.jpg" },
 
// ];

// const itemsPerPage = 2;

// function ProductListing() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter products based on search term
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination logic for filtered products
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1); 
//   };

//   return (
//     <div className="login-wrapper">
//       <Container className="mt-5">
//         <Row className="justify-content-center">
//           <Col md={10} lg={10}>
//             <Card className="shadow p-3">
//               <h2 className="text-center mb-4">Product List</h2>

//               {/* Search Box */}
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Search by product name"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//               </Form.Group>

//               <Table responsive bordered hover>
//                 <thead>
//                   <tr className="bg-dark text-white">
//                     <th>S.No</th>
//                     <th>Product Name</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Weight</th>
//                     <th>Image</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentProducts.length > 0 ? (
//                     currentProducts.map((product, index) => (
//                       <tr key={product.id}>
//                         <td>{indexOfFirstItem + index + 1}</td>
//                         <td>{product.name}</td>
//                         <td>{product.price}</td>
//                         <td>{product.quantity}</td>
//                         <td>{product.weight}</td>
//                         <td>
//                           <img src={product.image} width="50" alt={product.name} />
//                         </td>
//                         <td>
//                           <button className="btn btn-sm btn-primary me-2">Edit</button>
//                           <button className="btn btn-sm btn-danger me-2">Delete</button>
//                           <Link to={"/productDetail"}>
//                             <button className="btn btn-sm btn-warning">View</button>
//                           </Link>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="7" className="text-center">No products found</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </Table>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <Pagination className="justify-content-center">
//                   {[...Array(totalPages)].map((_, idx) => (
//                     <Pagination.Item
//                       key={idx + 1}
//                       active={idx + 1 === currentPage}
//                       onClick={() => handlePageChange(idx + 1)}
//                     >
//                       {idx + 1}
//                     </Pagination.Item>
//                   ))}
//                 </Pagination>
//               )}
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ProductListing;

import React, { useState } from "react";
import { Card, Container, Table, Row, Col, Pagination, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

const initialProducts = [
  { id: 1, name: "Namkin", price: 400, quantity: 2, weight: "200g", image: "/images/1.png" },
  { id: 2, name: "Namkin", price: 500, quantity: 1, weight: "250g", image: "/images/2.png" },
  { id: 3, name: "Teachers Day Cake", price: 400, quantity: 2, weight: "100g", image: "/images/teachersday.jpg" },
  { id: 4, name: "Truffle Cake", price: 800, quantity: 4, weight: "400g", image: "/images/trufflecake.jpg" },
];

function ProductListing() {
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic for filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Handle delete product
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this product?")){
      setProducts(products.filter(product => product.id !== id));
      // If current page ends up empty after deletion, go back one page if possible
      if ((currentPage - 1) * itemsPerPage >= filteredProducts.length - 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  // Handle update product (simple demo toggling name here)
  const handleUpdate = (id) => {
    const updatedProducts = products.map(product => {
      if(product.id === id){
        return {
          ...product,
          name: product.name + ""
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        <Row className="justify-content-center mb-3">
          <Col md={6} className="d-flex align-items-center">
            {/* Items per page selector top-left */}
            <Form.Group controlId="itemsPerPageSelect" className="d-flex align-items-center">
              <Form.Label className="me-2 mb-0">Items per page:</Form.Label>
              <Form.Select value={itemsPerPage} onChange={handleItemsPerPageChange} style={{ width: "100px" }}>
                <option value={2}>2</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} className="d-flex justify-content-end">
            <Form.Control
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ maxWidth: "300px" }}
            />
          </Col>
        </Row>

        <Card className="shadow p-3">
          <h2 className="text-center mb-4">Product List</h2>

          <Table responsive bordered hover>
            <thead className="bg-primary text-white">
              <tr >
                <th>S.No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Weight</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.length > 0 ? (
                currentProducts.map((product, index) => (
                  <tr key={product.id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.weight}</td>
                    <td>
                      <img src={product.image} width="50" alt={product.name} />
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleUpdate(product.id)}>Edit</button>
                      <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(product.id)}>Delete</button>
                      <Link to={"/productDetail"}>
                        <button className="btn btn-sm btn-warning">View</button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">No products found</td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* Pagination aligned right */}
          {totalPages > 1 && (
            <Pagination className="justify-content-end">
              {[...Array(totalPages)].map((_, idx) => (
                <Pagination.Item
                  key={idx + 1}
                  active={idx + 1 === currentPage}
                  onClick={() => handlePageChange(idx + 1)}
                >
                  {idx + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          )}
        </Card>
      </Container>
    </div>
  );
}

export default ProductListing;

