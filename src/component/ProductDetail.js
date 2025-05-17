import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductDetail() {
  const productData = {
    name: "Namkin",
    price: "$500",
    quantity:"2",
    weight: "500kg",
    description: "A crunchy and savory namkin snack, perfectly seasoned for a delightful tea-time treat.",
    image: process.env.PUBLIC_URL + "/images/1.png",
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
     <div className="login-wrapper">
    <Container className="mt-5">
      {/* Product Detail Section */}
      <Card className="shadow mb-5 login-card " style={{ width: '100%', margin: '0 auto' ,height: "440px"}}>
        <Row className="g-0">
          <Col md={6}>
            <Card.Img variant="top" src={productData.image} style={{ height: '70%'}} />
          </Col>
          <Col md={6}>
            <Card.Body style={{ margin: '50px'}}>
              <Card.Title style={{ color: 'red' }}>{productData.name}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> {productData.price}<br />
                <strong>Quantity:</strong> {productData.quantity}<br />
                <strong>Weight:</strong> {productData.weight}<br />
                <strong>Description:</strong> {productData.description}
              </Card.Text>
              <div className="mt-5">
                <Link to={"/cart"}>
                  <button className="btn btn-sm btn-success me-3">Add Cart</button>
                </Link>
                <Link to={"/"}>
                  <button className="btn btn-sm btn-danger">Continue Shopping</button>
                </Link>
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
    </div>
  );
}

export default ProductDetail;
