import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch the single product
    axios.get(`http://localhost:8080/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Product not found", err));

    // Fetch all products
    axios.get(`http://localhost:8080/products`)
      .then(res => setAllProducts(res.data))
      .catch(err => console.error("Error fetching products", err));
  }, [id]);

  if (!product) {
    return (
      <Container className="mt-5">
        <h3>Product not found</h3>
        <Link to="/admin/productListing">Go Back</Link>
      </Container>
    );
  }

  // Filter out current product from related products
  const relatedProducts = allProducts.filter(p => p.id !== product.id);

  return (
    <div className="login-wrapper">
      <Container className="mt-5">

        {/* Product Detail Section */}
        <Card className="shadow mb-5 login-card" style={{ width: '100%', height: "440px" }}>
          <Row className="g-0">
            <Col md={6}>
              <Card.Img variant="top" src={`/images/${product.image}`} style={{ height: '70%' }} />
            </Col>
            <Col md={6}>
              <Card.Body style={{ margin: '50px' }}>
                <Card.Title style={{ color: 'red' }}>{product.productName}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {product.price}<br />
                  <strong>Quantity:</strong> {product.quantity}<br />
                  <strong>Weight:</strong> {product.weight}<br />
                  <strong>Description:</strong> {product.description}
                </Card.Text>
                <div className="mt-5">
                  <Link to="/add-product">
                    <button className="btn btn-sm btn-primary me-3">Add Product</button>
                  </Link>
                  <Link to="/admin/productListing">
                    <button className="btn btn-sm btn-danger">Continue Shopping</button>
                  </Link>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        {/* Related Products */}
        <h4 className="mb-5 mt-5 text-start">Related Products</h4>
        <Row className="g-4 justify-content-center">
          {relatedProducts.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm h-90">
                <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Card.Img variant="top" src={`/images/${item.image}`} style={{ height: '150px' }} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1rem', color: 'red' }}>{item.productName}</Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem' }}>
                      <strong>Price:</strong> {item.price}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
