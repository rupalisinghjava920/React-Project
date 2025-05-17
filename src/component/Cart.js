
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext); 
  const [showModal, setShowModal] = useState(false);

  const handleBuy = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <Row>
          {cartItems.map((item, index) => (
            <Col key={index} md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>

                  <div className="d-flex justify-content-between">
                    <Button variant="success" onClick={handleBuy}>
                      Buy
                    </Button>

                    <Button variant="danger" onClick={() => removeFromCart(index)}>
                      Remove
                    </Button>

                     <Link to="/">
                      <Button variant="warning" >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>🎉 Order placed successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Cart;

