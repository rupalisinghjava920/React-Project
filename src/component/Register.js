import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import base_url from '../api/base_url';

function Register() {
  const [user, setUser] = useState({}); // name, email, password, role
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Z](?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!validatePassword(user.password)) {
      setError("Password must start with a capital letter, contain at least one number, one special character, and be at least 8 characters long.");
      return;
    }

    axios.post(`${base_url}/register`, user)
      .then((response) => {
        console.log("User registered:", response.data);
        navigate('/login');
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setError("Registration failed. Please try again.");
      });
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
                  <Label for="name">Name</Label>
                  <Input type="text" id="name" required
                    onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email address</Label>
                  <Input type="email" id="email" required
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" id="password" required
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                  {user.password && !validatePassword(user.password) && (
                    <div style={{ color: 'red', fontSize: '14px' }}>{error}</div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label for="authority">Role</Label>
                  <Input
                    type="text"
                    id="authority"
                    required
                    value={user.authorities?.[0]?.authority || ''}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        authorities: [{ authority: e.target.value }]
                      })
                    }
                  />
                </FormGroup>


                <Container className="text-center mt-3">
                  <Button color="primary" type="submit">Sign up</Button>
                  <Link to="/login" className='no-underline ms-3'>Already have an account? Login</Link>
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
