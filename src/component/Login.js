// import React, { useState } from 'react';
// import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card, CardBody } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import '../App.css';
// import axios from 'axios';
// import base_url from '../api/base_url';

// function Login() {
//   const [user, setUser] = useState({});
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const validatePassword = (password) => {
//     const passwordRegex = /^[A-Z](?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!validatePassword(user.password)) {
//       setError("Password must start with a capital letter, contain at least one number, one special character, and be at least 8 characters long.");
//       return;
//     }
//     console.log("Login request: ", user);

//     axios.post(`${base_url}/login`, user)
//       .then((response) => {
//         const authority = response.data.authority;

//         // const role = response?.data?.role;
//         if (authority === "ROLE_USER") {
//           localStorage.setItem("authenticated", true);
//           navigate('/home');
//         } else if (authority === "ROLE_ADMIN") {
//           localStorage.setItem("authenticated", true);
//           navigate('/add-product');
//         }
//         else {
//           setError("Unknown role. Cannot login.");
//         }
//       })
//   };

//   return (
//     <div className="login-wrapper">
//       <Container className="mt-5">
//         <Row className="justify-content-center">
//           <Col xs="12" sm="10" md="8" lg="6" xl="5">
//             <Card className='shadow p-3 login-card'>
//               <CardBody>
//                 <h2 className="text-center mb-4">Login</h2>
//                 <Form onSubmit={handleLogin}>
//                   <FormGroup>
//                     <Label for="email" className="fw-bold text-start d-block">Email </Label>
//                     <Input type="email" id="email" required
//                       onChange={(e) => setUser({ ...user, email: e.target.value })}
//                     />
//                   </FormGroup>

//                   <FormGroup>
//                     <Label for="password" className="fw-bold text-start d-block">Password</Label>
//                     <Input type="password" id="password" required
//                       onChange={(e) => setUser({ ...user, password: e.target.value })} />

//                     {user.password && !validatePassword(user.password) && (
//                       <div style={{ color: 'red', fontSize: '14px' }}> {error} </div>
//                     )}
//                   </FormGroup>



//                   <Container className="text-center mt-3">
//                     <Button color="primary" type="submit" >Login</Button>
//                     <Link to="/sign-up" className='no-underline'> Created  new account? Sign up</Link>
//                   </Container>
//                 </Form>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import base_url from '../api/base_url';

function Login({ setIsLoggedIn, setAuthority }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Z](?=.*[!@#$%^&*])(?=.*\d).{7,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validatePassword(user.password)) {
      setError("Password must start with a capital letter, contain at least one number, one special character, and be at least 8 characters long.");
      return;
    }

    axios.post(`${base_url}/login`, user)
      .then((response) => {
        const authority = response.data.authority;

        if (authority === "ROLE_USER" || authority === "ROLE_ADMIN") {
          // Update React app state here!
          setIsLoggedIn(true);
          setAuthority(authority);

          // Also save to localStorage (optional, but good for persistence)
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("authority", authority);

          if (authority === "ROLE_USER") {

            navigate('/home');
          } else if (authority === "ROLE_ADMIN") {

            navigate('/add-product');
          }
        } else {
          setError("Unknown role. Cannot login.");
        }
      })
      .catch(() => {
        setError("Invalid credentials or server error.");
      });
  };

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs="12" sm="10" md="8" lg="6" xl="5">
            <Card className='shadow p-3 login-card'>
              <CardBody>
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleLogin}>
                  <FormGroup>
                    <Label for="email" className="fw-bold text-start d-block">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      required
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password" className="fw-bold text-start d-block">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      required
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    {user.password && !validatePassword(user.password) && (
                      <div style={{ color: 'red', fontSize: '14px' }}>{error}</div>
                    )}
                  </FormGroup>

                  <Container className="text-center mt-3">
                    <Button color="primary" type="submit">Login</Button>
                    <Link to="/sign-up" className="d-block mt-2">Create new account? Sign up</Link>
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
