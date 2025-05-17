import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [className, setClassName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Z](?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
    return passwordRegex.test(password);
  };

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    // if (!gmailPattern.test(email)) {
    //   setError("Only Gmail addresses are allowed.");
    //   return;
    // }

    if (!validatePassword(password)) {
      setError("Password must start with a capital letter, contain at least one number, one special character, and be at least 8 characters long.");
      return;
    }

    setError("");
    console.log('Name:', className);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/login');
  };

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={6}>
            <Card className='shadow p-3 login-card'>
              <h2 className="text-center mb-4">Sign Up</h2>

              <Form onSubmit={handleSignup}>
                <FormGroup>
                  <Label for="name" className="fw-bold text-start d-block">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter name" required
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                  />
                </FormGroup>
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
                  <Button color="primary" type="submit" >Sign up</Button>
                  <Link to="/login" className='no-underline'> Already have an account? Login</Link>
                </Container>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
