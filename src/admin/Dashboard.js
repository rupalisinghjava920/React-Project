import {  Outlet } from "react-router-dom";
import { Card, CardText, CardTitle, Container, Row, Col, CardBody } from 'reactstrap';
import SideBar from "./SideBar";

function Dashboard() {
    return (
        <div className="d-flex " style={{ height: "100vh" }}>
             <SideBar/>
            {/* Main Content */}
            <div className="p-5 flex-grow-1 overflow-auto">
                <Container>
                    <h6 className="mb-4 "><i class="fas fa-home" style={{ color: '#ffc107', fontSize: '20px' }}></i> Dashboard</h6>
                    <Row className="g-5"> 
                        <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                            <Card body className="h-100" style={{ width: '15rem' ,border: '1px solid black' , backgroundColor: 'orange'}}>
                                <CardBody>
                                    <CardTitle tag="h5" className="text-white">All Product  <i class="fas fa-box-open" style={{fontSize: '24px' }}></i> </CardTitle>
                                     <CardText>$ 75,000</CardText>
                                    <CardText>
                                        Lists all available products with brief details like name, category, price, and stock status.
                                    </CardText>
                                     <CardTitle tag="h5" className="text-white">Increased by 70%</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                       <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                            <Card body className="h-100" style={{ width: '15rem' ,border: '1px solid black',backgroundColor: 'red'}}>
                                <CardBody>
                                    <CardTitle tag="h5" className="text-white">Product Loss <i class="fas fa-arrow-down" style={{fontSize: '24px' }}></i></CardTitle>
                                     <CardText> 5,000</CardText>
                                    <CardText>
                                       Shows products sold at a loss, where the selling price is less than the cost price.
                                    </CardText>
                                     <CardTitle tag="h5" className="text-white">Decreased  by 10%</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                       <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                            <Card body className="h-100" style={{ width: '15rem' ,border: '1px solid black',backgroundColor: 'blue'}}>
                                <CardBody>
                                    <CardTitle tag="h5" className="text-white">All Order <i class="fas fa-receipt" style={{fontSize: '24px' }}></i></CardTitle>
                                     <CardText> 10,29540</CardText>
                                    <CardText>
                                        Displays a list of all customer orders, including order details, status, and payment info.
                                    </CardText>
                                    <CardTitle tag="h5" className="text-white">Increased by 30%</CardTitle> 
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                            <Card body className="h-100" style={{ width: '15rem' ,border: '1px solid black',backgroundColor: 'green'}}>
                                <CardBody>
                                    <CardTitle tag="h5" className="text-white">Product Profit <i class="fas fa-chart-line" style={{fontSize: '24px'}}></i> </CardTitle>
                                    <CardText> 50,8760</CardText>
                                    <CardText>
                                       Shows the total profit earned from all sold products based on their cost and selling price.
                                    </CardText>
                                    <CardTitle tag="h5" className="text-white">Increased by 80%</CardTitle>
                                </CardBody>
                                {/* <Button color="primary">Go somewhere</Button> */}
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Outlet />
            </div>

        </div>
    );
}

export default Dashboard;
