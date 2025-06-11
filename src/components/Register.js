
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import './Login.css';

function Register() {
    return (
        <div className='input-text'>
            <Container style={{ width: '600px', height: '500px'}}>
                <Card className="p-5 shadow-sm" style={{ backgroundColor: "rgb(212, 203, 203)" }}>
                     <h4 className='text-center mb-4' style={{ marginTop: "-25px" }}>📝 Register</h4>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input id="name" placeholder="Enter the name" type="text"
                                     className="custom-input"  />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input id="exampleEmail" placeholder="Email-Id" type="email" 
                                    className="custom-input"/>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input id="examplePassword" placeholder="password" type="password" 
                                    className="custom-input" />
                                </FormGroup>
                            </Col>

                            <Col md={6}>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input id="confirmPassword" placeholder="Confirm password" type="password" 
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
                                    <Label for="date">Date</Label>
                                    <Input id="date" placeholder="date" type="date" 
                                    className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Label>Gender</Label>
                            <Col md={6}>
                                <FormGroup check>
                                    <Input name="gender" type="radio" value="male" id="genderMale" className="custom-input" />
                                    <Label check for="genderMale">Male</Label>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup check>
                                    <Input name="gender" type="radio" value="female" id="genderFemale" className="custom-input" />
                                    <Label check for="genderFemale">Female</Label>
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
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input id="exampleCity" className="custom-input" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState">State</Label>
                                    <Input id="exampleState" className="custom-input"  />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="country">Country</Label>
                                    <Input id="country" className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleZip">Zip</Label>
                                    <Input id="exampleZip" className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup check className="mb-3">
                            <Input id="termsCheck" type="checkbox" />
                            <Label check for="termsCheck">I agree to terms and conditions</Label>
                        </FormGroup>

                        <Button color="primary" block>Sign up</Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default Register;
