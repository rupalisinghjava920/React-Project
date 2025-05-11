import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function ProductDetail() {
  const productData = {
    name: "Burger Stock",
    price: "$500",
    weight: "500g",
    description: "A delicious Burger stock with creamy layers.",
    image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
  };

  const productList = [
    {
      name: "Burger Stock",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
    },
    {
      name: "Pizza Supreme",
      price: "$700",
      image: process.env.PUBLIC_URL + "/images/brown - Copy.jpeg",
    },
    {
      name: "French Fries",
      price: "$300",
      image: process.env.PUBLIC_URL + "/images/Bcake.jpeg",
    },
    {
      name: "Namikin",
      price: "$300",
      image: process.env.PUBLIC_URL + "/images/1.png",
    },
    
    // Add more if needed
  ];

  return (
    <Container className="mt-5">
      {/* Product Detail Section */}
      <Card className="shadow mb-5" style={{ width: '100%', margin: '0 auto' }}>
        <Row className="g-0">
          <Col md={6}>
            <Card.Img variant="top" src={productData.image} style={{ height: '100%'}} />
          </Col>
          <Col md={6}>
            <Card.Body style={{ margin: '50px'}}>
              <Card.Title style={{ color: 'red' }}>{productData.name}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> {productData.price}<br />
                <strong>Weight:</strong> {productData.weight}<br />
                <strong>Description:</strong> {productData.description}
              </Card.Text>
              <div className="mt-5">
                <button className="btn btn-sm btn-primary me-3">Add Product</button>
                <button className="btn btn-sm btn-danger">Continue Shopping</button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Related Products Section */}
      <h4 className="mb-5 mt-5 text-start">Related Products</h4>
      <Row className="g-4 justify-content-center">
        {productList.map((product, index) => (
          <Col key={index} xs={12} sm={6}  md={4} lg={3}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: '150px' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' ,color: 'red'}}>{product.name}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>
                  <strong>Price:</strong> {product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductDetail;
