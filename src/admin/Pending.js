



import { Container, Row, Col, Card, CardBody, CardTitle, CardText,CardImg } from "reactstrap";
import { useProducts } from "../context/ProductContext";
import SideBar from "./SideBar";

function Pending() {
    const { products } = useProducts();
    const pendingItems = products.filter(item => {
        const status = item.status.trim().toLowerCase();
        return  status === "approved" || status === "rejected" || status === "pending" ;
    });


    return (
        <div className="d-flex " style={{ minHeight: "100vh", backgroundColor: '#ffffff' }}>
            <SideBar />
            <div className="p-4 flex-grow-1 overflow-auto">
                <Container >
                    <h2>Pending Products ({pendingItems.length})</h2>

                    {pendingItems.length === 0 ? (
                        <p>No pending products.</p>
                    ) : (
                        <Row>
                            {pendingItems.map(item => (
                                <Col md={6} lg={4} key={item.id} className="mb-4">
                                    <Card style={{width: "290px"}} className="mt-3">
                                        <CardBody>
                                            <CardImg
                                                top
                                                src={item.image}
                                                alt={item.name}
                                                style={{ height: '200px', objectFit: 'contain' }}
                                            />
                                            <CardTitle tag="h5" className="mt-3">{item.name}</CardTitle>
                                            <CardText className="text-danger " tag="h6"><storng>Price: ₹</storng>{item.price}</CardText>
                                            <CardText className="text-primary" tag="h6">Status: {item.status}</CardText>
                                            {item.subtitle && <CardText className="text-muted">{item.subtitle}</CardText>}
                                        </CardBody>
                                    </Card>
                                </Col>


                            ))}
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    );
}

export default Pending;
