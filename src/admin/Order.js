import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import SideBar from "./SideBar";
import { useCart } from "../context/CartContext";

function Order() {
    const { cart } = useCart();

    return (
        <div className="d-flex " style={{ minHeight: "100vh", backgroundColor: '#ffffff' }}>
            <SideBar />
            <div className="p-4 flex-grow-1 overflow-auto">
                <Container >
                    <h2 className="mb-4">📝 Order Summary</h2>

                    {cart.length === 0 ? (
                        <p>No products ordered yet. Please <a href="/">shop more</a>.</p>
                    ) : (
                        <Row>
                            {cart.map((item, index) => (
                                <Col md={6} lg={4} key={index} className="mb-4">
                                    <Card>
                                        <CardBody>
                                            <CardImg
                                                top
                                                src={`/${item.image}`}
                                                alt={item.title}
                                                style={{ height: '200px', objectFit: 'contain' }}
                                            />
                                            <CardTitle tag="h5" className="mt-3">{item.title}</CardTitle>
                                            <CardText>Price: ₹{item.price}</CardText>
                                            {item.subtitle && <CardText className="text-muted">{item.subtitle}</CardText>}
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>

            </div>
        </div >
    );
}

export default Order;
