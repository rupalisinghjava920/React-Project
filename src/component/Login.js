import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card, CardBody } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Z](?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
    return passwordRegex.test(password);
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("Password must start with a capital letter, contain at least one number, one special character, and be at least 8 characters long.");
      return;
    }

    setError("");
    console.log('Email:', email);
    console.log('Password:', password);
    navigate("/productCard");
  };

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs="12" sm="10" md="8" lg="6" xl="5">
            <Card className='shadow p-3 login-card'>
              <CardBody>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                  <FormGroup>
                    <Label for="email" className="fw-bold text-start d-block">Email address</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter email" required
                      // pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password" className="fw-bold text-start d-block">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter password" required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    {password && !validatePassword(password) && (
                      <div style={{ color: 'red', fontSize: '14px' }}>
                        {error}
                      </div>
                    )}
                  </FormGroup>

                  <Container className="text-center mt-3">
                    <Button color="primary" type="submit" onClick={handleLogin}>Login</Button>
                    <Link to="/sign-up" className='no-underline'> Created  new account? Sign up</Link>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
