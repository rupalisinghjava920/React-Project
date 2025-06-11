import { Container, Form, FormGroup, Label, Input, Button, Card, Row, Col } from "reactstrap";
import { useCart } from "../context/CartContext";

function Checkout() {
    const { cart, clearCart } = useCart();

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // For now, just clear cart and show alert
        clearCart();
        alert("Order Placed Successfully!");
    };

    return (

        <div className='input-text'>
            <Container style={{ width: '600px', height: '500px' }}>
                <Card className="p-5 shadow-sm" style={{ backgroundColor: "rgb(212, 203, 203)" }}>
                    <h4 className='text-center mb-4 ' style={{ marginTop: "-15px" }}>📝 Checkout </h4>
                    <Form onSubmit={handlePlaceOrder}>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input id="name" placeholder="Enter the name" type="text"
                                        className="custom-input" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input id="exampleEmail" placeholder="Email-Id" type="email"
                                        className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="number">Phone number</Label>
                                    <Input id="number" placeholder="phone no" type="number"
                                        className="custom-input" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="payment">Payment Method</Label>
                                    <Input type="select" name="payment" id="payment" required>
                                        <option>Credit/Debit Card</option>
                                        <option>UPI</option>
                                        <option>Cash on Delivery</option>
                                        <option>Net Banking</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleAddress">Address</Label>
                                    <Input id="exampleAddress" placeholder="Enter the first address"
                                        className="custom-input" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleAddress2">Address 2</Label>
                                    <Input id="exampleAddress2" placeholder="Apartment, studio, or floor"
                                        className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input id="exampleCity" className="custom-input" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleState">State</Label>
                                    <Input id="exampleState" className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="country">Country</Label>
                                    <Input id="country" className="custom-input" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleZip">Postal Code</Label>
                                    <Input id="exampleZip" className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="notes">Order Notes (Optional)</Label>
                                    <Input type="textarea" name="notes" id="notes" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button color="success" type="submit">Place Order</Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default Checkout;
