import React, { useState } from 'react';
import { Button,Container,Form,FormGroup,Input,Label,Row,Col, Card} from 'reactstrap';
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Login Successfully!');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
        <Card className='shadow p-3'>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email" className="fw-bold text-start d-block">Email address</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter email" required
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
            </FormGroup>

            <Container className="text-center mt-3">
              <Button color="primary" type="submit">Login</Button>
              <Link to="/sign-up" className='no-underline'> Created  new account? Sign up</Link>
            </Container>
          </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
