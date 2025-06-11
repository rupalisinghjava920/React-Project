import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Forgotpassword() {
    return (
        <div className='input-text '>
            <Container style={{ width: '500px', height: '300px' }}>
                <Card className="p-5 shadow-sm" style={{ backgroundColor: "rgb(212, 203, 203)", height: "380px" }}>
                    <h4 className='text-center mb-4' style={{ marginTop: "-25px" }}>🔐 Forgot Password</h4>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="password"><FaLock style={{ marginRight: "5px" }} />Password</Label>
                                    <Input id="password" placeholder="Enter the password" type="password" className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="comfirmpassword">Confirm Password</Label>
                                    <Input id="comfirmpassword" placeholder="Confirm password" type="password" className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className='text-center mb-2 text-end'>
                            <Link to="/login" className='no-underline'>Login</Link>
                        </div>
                        <Button color="primary" block>Forgot password</Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default Forgotpassword;