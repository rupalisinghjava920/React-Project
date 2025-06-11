
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import { FaEnvelope, FaLock, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className='input-text '>
            <Container style={{ width: '500px', height: '400px' }}>
                <Card className="p-5 shadow-sm" style={{ backgroundColor: "rgb(212, 203, 203)", height: "580px" }}>
                    <h4 className='text-center mb-4' style={{ marginTop: "-25px" }}>🔐 Login</h4>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleEmail"><FaEnvelope style={{ marginRight: "5px" }} />Email</Label>
                                    <Input id="exampleEmail" placeholder="Email-Id" type="email" className="custom-input" />
                                </FormGroup>
                            </Col>
                        </Row>
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
                        <div className="forgot-password">
                            <Link to="/forgoutpassword" className="no-underline">Forgot password?</Link>
                        </div>

                        <Button color="primary" block>Login</Button>

                    </Form>

                    <div className='text-center mb-5'>
                        <p className="social-text">Or Sign Up Using</p>
                        <Link to="/register" className='no-underline'> Already have an account? Login</Link>
                        <div className="social-icons">
                            <FaFacebookF className="social fb ml-2" />
                            <FaTwitter className="social tw ml-2" />
                            <FaGoogle className="social gl" />
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Login;
