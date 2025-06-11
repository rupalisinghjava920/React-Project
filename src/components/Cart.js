
import { useCart } from "../context/CartContext";
import { Container, Row, Col, Card, CardBody, Button, CardText, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Total price calculation with discount applied if you want
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="mt-4">
      <h2 className="mb-4" >🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.
             <Link to="/">Continue Shopping</Link></p>
      ) : (
        <>
          <Row>
            {cart.map((item,index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card>
                  <CardBody>
                    {/* Product Image */}
                    <CardImg 
                      top 
                      src={`/${item.image}`} 
                      alt={item.title} 
                      style={{ height: '200px', objectFit: 'contain' }} 
                    />

                    {/* Product Title & Subtitle */}
                    <CardTitle tag="h5" className="mt-3">{item.title}</CardTitle>
                    {item.subtitle && <CardText className="text-muted">{item.subtitle}</CardText>}

                    {/* Product Description */}
                    {item.text && <CardText>{item.text}</CardText>}

                    {/* Rating & Reviews */}
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ backgroundColor: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>
                        {item.rating} ★
                      </span>
                      <span style={{ color: '#878787', marginLeft: '6px', fontSize: '14px' }}>
                        ({item.reviews} reviews)
                      </span>
                    </div>

                    {/* Price with original price and discount */}
                    <div className="mb-2">
                      <span style={{ fontSize: '18px', fontWeight: 'bold' }}>₹{item.price}</span>
                      {item.originalPrice && (
                        <span style={{ textDecoration: 'line-through', margin: '0 8px', color: '#878787' }}>
                          ₹{item.originalPrice}
                        </span>
                      )}
                      {item.discountPercent && (
                        <span style={{ color: '#388e3c', fontWeight: 'bold' }}>
                          {item.discountPercent}% off
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <Button color="danger" onClick={() => removeFromCart(item.id)} className="me-2">
                      Remove
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <h4>Total: ₹{totalAmount}</h4>
          <div className="mt-3">
            <Button color="warning" onClick={clearCart}>Clear Cart</Button>{" "}
            {/* <Button color="success">Proceed to Checkout</Button> */}
            <Button color="success" tag={Link} to="/checkout">Proceed to Checkout</Button>

          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
