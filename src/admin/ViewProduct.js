import { Container, Row, Col, Table } from "reactstrap";
import SideBar from "./SideBar";
import { useState ,useEffect} from "react";
import { Pagination ,Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

// const initialProducts = [
//   { id: 1, name: "Apple", description: "A healthy, sweet fruit...", price: 400, category: "Furit", stockquantity: 2, image: "/images/apple.jpg", status: "panding" },
//   { id: 2, name: "Choloclate", description: "A sweet, delicious treat...", price: 800, category: "Cholo", stockquantity: 1, image: "/images/chol5.jpg", status: " panding" },
//   { id: 3, name: "Frock", description: "A comfortable and stylish dress...", price: 500, category: "Frock", stockquantity: 2, image: "/images/frock.jpg", status: "panding" },
//   { id: 4, name: "Red Apple", description: "A healthy, sweet fruit...", price: 400, category: "Furit", stockquantity: 2, image: "/images/fruit.jpg", status: "panding" },
//   { id: 5, name: "Long Frock", description: "A comfortable and stylish dress...", price: 300, category: "Frock", stockquantity: 2, image: "/images/frock1.jpg", status: " panding" },
//   { id: 6, name: "Men Jens", description: "Durable and trendy pants made,...", price: 7000, category: "Jens", stockquantity: 3, image: "/images/jens1.jpg", status: "panding" },
//   { id: 7, name: "Milk", description: "Refreshing and full of vitamins...", price: 600, category: "Milk", stockquantity: 1, image: "/images/milk.jpg", status: "panding" },
//   { id: 8, name: "Orange Juice", description: "Refreshing and full of vitamins...", price: 500, category: "Juice", stockquantity: 1, image: "/images/juice.jpg", status: "panding" },
//   { id: 9, name: "Mix Juice", description: "Refreshing and full of vitamins...", price: 500, category: "Juice", stockquantity: 1, image: "/images/juice2.jpg", status: "panding" },
//   { id: 10, name: "Chain Noodle", description: "Tasty and quick-cooking noodles, ....", price: 800, category: "Fast Food", stockquantity: 4, image: "/images/noodle1.jpg", status: "panding" },
//   { id: 11, name: "Lady Jens", description: "Durable and trendy pants made,...", price: 10000, category: "Jens", stockquantity: 2, image: "/images/jens3.jpg", status: "panding" },
//   { id: 12, name: "Shoes", description: "Comfortable and stylish shoes ...", price: 1000, category: "Shoes", stockquantity: 1, image: "/images/shoes.jpg", status: "panding" },
// ];
function ViewProduct() {
  // const [products, setProducts] = useState(initialProducts);
  const { products, setProducts, handleStatusChange } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
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
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(product => product.id !== id));
      // If current page ends up empty after deletion, go back one page if possible
      if ((currentPage - 1) * itemsPerPage >= filteredProducts.length - 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

//    const handleDelete = (id) => {
//   if (window.confirm("Are you sure you want to delete this product?")) {
//     const updatedProducts = products.filter(product => product.id !== id);
//     setProducts(updatedProducts);
//   }
// };


  //pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  //select page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  //status
  // const handleStatusChange = (id, newStatus) => {
  //   const updatedProducts = products.map(product =>
  //     product.id === id ? { ...product, status: newStatus } : product
  //   );
  //   setProducts(updatedProducts);
  // };


  return (
    <div className="d-flex " style={{ minHeight: "100vh", backgroundColor: '#ffffff' }}>
      <SideBar />
       <div className="p-4 flex-grow-1 overflow-auto">
      <Container>
        <Row>
          <Col md={12}>
            {/* <h4 className="text-center">View Product</h4> */}
            {/* Items per page selector + search input */}
            <Row className="justify-content-center mb-3">
              <Col md={6} className="d-flex align-items-center">
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
            <div style={{ overflowX: "auto" }}>
              <Table bordered responsive>
                <thead className="table-dark">
                  <tr>
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>St.Quantity</th>
                    <th>Image</th>
                    <th>Action</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {currentProducts.length > 0 ? (
                    currentProducts.map((product, index) => (
                      <tr key={product.id}>
                        <td>{indexOfFirstItem + index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.stockquantity}</td>
                        <td>
                          <img src={product.image} width="50" alt={product.name} />
                        </td>
                        <td>
                          {/* Actions can be added here later */}
                          {/* <button className="btn btn-sm btn-primary me-2" onClick={() => handleUpdate(product.id)}><i class="fas fa-edit" style={{ color: '#ffc107', fontSize: '20px' }}></i></button> */}
                          <button className="btn btn-sm  me-2"><i class="fas fa-edit" style={{ color: 'blue', fontSize: '18px' }}></i></button>
                          <button className="btn btn-sm  me-2" onClick={() => handleDelete(product.id)}><i class="fas fa-trash-alt" style={{ color: 'red', fontSize: '18px' }}></i></button>
                          <Link to={`/product/${product.id}`} className="btn btn-sm me-2">
                            <i className="fas fa-eye text-success"></i>
                          </Link>
                        </td>
                        <td>
                          <Form.Select
                            value={product.status}
                            onChange={(e) => handleStatusChange(product.id, e.target.value)}
                            style={{ width: "120px" }}
                          >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </Form.Select>
                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9">No products found.</td>
                    </tr>
                  )}
                </tbody>

              </Table>
            </div>
            {/* Pagination aligned right */}
            {/* {totalPages > 1 && (
              <Pagination className="justify-content-center">
                <Pagination.Prev
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />

                {[...Array(totalPages)].map((_, idx) => (
                  <Pagination.Item
                    key={idx + 1}
                    active={idx + 1 === currentPage}
                    onClick={() => handlePageChange(idx + 1)}
                  >
                    Previous
                  </Pagination.Item>
                ))}

                <Pagination.Next
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            )} */}

            {totalPages > 1 && (
              <Pagination className="justify-content-center">
                <Pagination.Item
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Pagination.Item>

                {[...Array(totalPages)].map((_, idx) => (
                  <Pagination.Item
                    key={idx + 1}
                    active={idx + 1 === currentPage}
                    onClick={() => handlePageChange(idx + 1)}
                  >
                    {idx + 1}
                  </Pagination.Item>
                ))}

                <Pagination.Item
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Pagination.Item>
              </Pagination>
            )}
          </Col>
        </Row>
      </Container >
      </div>
    </div >
  );
}

export default ViewProduct;



