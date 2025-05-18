import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function AddProduct() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("weight", product.weight);
    formData.append("brand", product.brand);
    formData.append("discount", product.discount);
    formData.append("description", product.description);
    formData.append("image", image);

    axios.post("http://localhost:8080/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        navigate("/admin/productListing");
      })
      
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Add Product</h2>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <FormGroup>
                <Label>Product Name</Label>
                <Input type="text" onChange={(e) => setProduct({ ...product, productName: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label>Price</Label>
                <Input type="number" onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label>Quantity</Label>
                <Input type="number" onChange={(e) => setProduct({ ...product, quantity: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label>Weight</Label>
                <Input type="text" onChange={(e) => setProduct({ ...product, weight: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label>Brand</Label>
                <Input type="text" onChange={(e) => setProduct({ ...product, brand: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label>Discount</Label>
                <Input type="text" onChange={(e) => setProduct({ ...product, discount: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" onChange={(e) => setProduct({ ...product, description: e.target.value })} required />
              </FormGroup>
              <FormGroup>
                <Label>Image</Label>
                <Input type="file" onChange={(e) => setImage(e.target.files[0])} required />
              </FormGroup>
              <div className="text-center">
                <Button color="primary" type="submit" className='me-5'>Add Product</Button>
                <Link to={"/admin/productListing"}>
                  <Button color="primary" type="submit">Product List</Button>
                </Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProduct;
