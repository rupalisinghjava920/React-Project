import React, { useState } from 'react';
import { Button,Container,Form,FormGroup,Input,Label,Row,Col, Card} from 'reactstrap';
// import {Link} from 'react-router-dom';

function ProductCard() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Price:', price);
    console.log('Weight:', weight);
    console.log('Image:', image);
    alert('Product Add Successfully!');

    setName('');
    setPrice('');
    setWeight('');
    setImage('');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
        <Card className='shadow p-3'>
          <h2 className="text-center mb-4">Add Product</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name" className="fw-bold text-start d-block">Product Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter product name" required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="price" className="fw-bold text-start d-block">Price</Label>
              <Input
                type="number"
                id="number"
                placeholder="Enter price" required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="weight" className="fw-bold text-start d-block">Weight</Label>
              <Input
                type="text"
                id="weight"
                placeholder="Enter weight" required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="image" className="fw-bold text-start d-block">Image</Label>
              <Input
                type="file"
                id="image"
                placeholder="upload image" required
                accept="image/*"
                // onChange={(e) => setImage(e.target.files[0])}
                onChange={(e) => setImage(e.target.value)}
              />
            </FormGroup>

            <Container className="text-center mt-3">
              <Button color="primary" type="submit">Add Product</Button>
              {/* <Link to="/sign-up" className='no-underline'> Created  new account? Sign up</Link> */}
            </Container>
          </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCard;
