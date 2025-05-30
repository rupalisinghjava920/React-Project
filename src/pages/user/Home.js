

import { useEffect, useState, useContext } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from '../../CartContext';


function Home({ searchTerm = '' }) {
  const [products, setProducts] = useState([]);
 const {  setCartCount } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    fetch('http://localhost:8080/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: 2,
            quantity: product.quantity,
            product: {
                id: product.id   
            }
        }),
    })
    .then(res => res.text())
    .then(data => {
        console.log("Cart Add Response:", data);
        setCartCount(prev => prev + 1);
      });
  };

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        <Row>
          {filteredProducts.map((product, index) => (
            <Col key={index} md={4} lg={3} sm={6} xs={12} className="mb-4">
              <Card className="shadow-sm login-card" style={{ height: '100%' }}>
                <Card.Img
                  variant="top"
                  src={`/images/${product.image}`} width="50" alt={product.productName}
                  style={{ height: '150px' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: 'red' }}>{product.productName}</Card.Title>
                  <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
                  <Button variant="danger" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
