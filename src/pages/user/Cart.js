
import { useContext, useEffect } from 'react';
import { CartContext } from '../../CartContext';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cart() {

    const { cartItems, fetchCart, removeFromCart } = useContext(CartContext);
    console.log("CartContext:", cartItems);
    const userId = localStorage.getItem("userId");


    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    console.log("cartItems in Cart:", cartItems);


    const handleBuy = (productId) => {
        axios.delete(`http://localhost:8080/cart/2/${productId}`)
            .then(() => {
                alert("Order placed successfully!");
                fetchCart(); // update UI after delete
            })
            .catch(console.error);
    };


    return (
        <Container className="mt-5">
            <Row>
                <h3>Your Shopping Cart</h3>
                {Array.isArray(cartItems) && cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems?.map((item, index) => (
                        <Card key={index} className="mb-3 p-3">
                            <Row>
                                <Col md={4}>
                                    <img
                                        src={`/images/${item.product?.image}`}
                                        alt={item.product?.productName}
                                        className="img-fluid"
                                        width="150"
                                    />
                                </Col>
                                <Col md={6}>
                                    <h5>{item.product?.productName}</h5>
                                    <p>Price: ₹{item.product?.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </Col>
                                <Col md={2}>
                                    <div className="d-flex flex-column text-center gap-2 mt-4">
                                        <Button
                                            variant="danger"
                                            onClick={() => removeFromCart(userId, item.product?.id)}
                                            disabled={!item.product?.id}
                                        >
                                            Remove
                                        </Button>
                                        <Button
                                            variant="success"
                                            onClick={() => handleBuy(item.product?.id)}
                                            disabled={!item.product?.id}
                                        >
                                            Buy Now
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    ))

                )}
                {/* {cartItems.length > 0 && ( */}
                {Array.isArray(cartItems) && cartItems.length > 0 && (
                    <div className="d-flex justify-content-between mt-4">
                        <Link to="/home">
                            <Button variant="secondary">Continue Shopping</Button>
                        </Link>

                    </div>
                )}
            </Row>
        </Container >
    );
};

export default Cart;




