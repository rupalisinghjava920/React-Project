import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function ProductCard() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weight, setWeight] = useState('');
   const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Price:', price);
    console.log('quantity:', quantity);
    console.log('Weight:', weight);
    console.log('category:', category);
    console.log('discount:', discount);
    console.log('description:', description);
    console.log('Image:', image);


    setName('');
    setPrice('');
    setQuantity('');
    setWeight('');
    setCategory('');
    setBrand('');
    setDiscount('');
    setDescription('');
    setImage('');
    navigate("/productListing");
  };

  return (
    <div className='login-wrapper'>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <Card className='shadow p-3 login-card'>
            <h2 className="text-center mb-4">Add Product</h2>
            <Form>
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
                <Label for="quantity " className="fw-bold text-start d-block">Quantity </Label>
                <Input
                  type="number"
                  id="quantity "
                  placeholder="Enter Quantity " required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
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
                <Label for="category" className="fw-bold text-start d-block">Category</Label>
                <Input
                  type="select"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">-- Select Category --</option>
                  <option value="Choclate Cake">Choclate Cake</option>
                  <option value="Nmikin">Nmikin</option>
                  <option value="Sweet">Sweet</option>
                  <option value="Bread">Bread</option>
                </Input>
              </FormGroup>



              <FormGroup>
                <Label for="brand " className="fw-bold text-start d-block">Brand </Label>
                <Input
                  type="text"
                  id="brand"
                  placeholder="Enter brand" required
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="discount " className="fw-bold text-start d-block">Discount </Label>
                <Input
                  type="text"
                  id="discount "
                  placeholder="Enter Discount" required
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="image" className="fw-bold text-start d-block">Image</Label>
                <Input
                  type="file"
                  id="image"
                  placeholder="upload image" required
                  accept="images/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  // onChange={(e) => setImage(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="description" className="fw-bold text-start d-block">Description</Label>
                <Input
                  type="textarea"
                  id="description"
                  placeholder="Enter product description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </FormGroup>


              <Container className="text-center mt-3">
                <Button color="primary" type="submit" onClick={handleSubmit}>Add Product</Button>
              </Container>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ProductCard;


