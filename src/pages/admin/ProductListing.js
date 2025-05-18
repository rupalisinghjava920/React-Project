
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Table, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching product data", error);
      });
  }, []);

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={12} lg={12}>
            <Card className='shadow p-3'>
              <h2 className="text-center mb-4">Product List</h2>
              <Table responsive bordered hover>
                <thead>
                  <tr className="bg-dark text-white">
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Weight</th>
                    <th>Brand</th>
                    <th>Discount</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.weight}</td>
                      <td>{product.brand}</td>
                      <td>{product.discount}</td>
                      <td>
                        <img src={`/images/${product.image}`} width="50" alt={product.productName} />
                      </td>
                      <td>{product.description}</td>
                      <td>
                        <Link to={`/admin/editProduct/${product.id}`}>
                          <button className="btn btn-sm btn-primary me-2">Edit</button>
                        </Link>
                        <Link to={`/admin/deleteProduct/${product.id}`}>
                          <button className="btn btn-sm btn-danger me-2">Delete</button>
                        </Link>
                        <Link to={`/admin/productDetail/${product.id}`}>
                          <button className="btn btn-sm btn-warning">View</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductListing;

