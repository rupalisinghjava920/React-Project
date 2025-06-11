
// import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
// import './AddProduct.css';
// import Sidebar from './SideBar';

// function AddProduct() {
//     return (
//         <div className="d-flex " style={{ height: "100vh" }}>
//             <Sidebar/>
//             <div>
//             <Container class="mt-5">

//                      <h4 className='text-center mb-5'>Add Product</h4>
//                     <Form>
//                         <Row>
//                             <Col md={12}>
//                                 <FormGroup>
//                                     <Label for="name">Product Name</Label>
//                                     <Input id="name" placeholder="Enter the product name" type="text"
//                                      className="custom-input"  />
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Label for="exampleEmail">Email</Label>
//                                     <Input id="exampleEmail" placeholder="Email-Id" type="email" 
//                                     className="custom-input"/>
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Label for="examplePassword">Password</Label>
//                                     <Input id="examplePassword" placeholder="password" type="password" 
//                                     className="custom-input" />
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Label for="confirmPassword">Confirm Password</Label>
//                                     <Input id="confirmPassword" placeholder="Confirm password" type="password" 
//                                     className="custom-input" />
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Label for="number">Phone number</Label>
//                                     <Input id="number" placeholder="phone no" type="number" 
//                                     className="custom-input" />
//                                 </FormGroup>


//                                 <FormGroup>
//                                     <Label for="date">Date</Label>
//                                     <Input id="date" placeholder="date" type="date" 
//                                     className="custom-input" />
//                                 </FormGroup>



//                             <Label>Gender</Label>

//                                 <FormGroup check>
//                                     <Input name="gender" type="radio" value="male" id="genderMale" className="custom-input" />
//                                     <Label check for="genderMale">Male</Label>
//                                 </FormGroup>

//                                 <FormGroup check>
//                                     <Input name="gender" type="radio" value="female" id="genderFemale" className="custom-input" />
//                                     <Label check for="genderFemale">Female</Label>
//                                 </FormGroup>




//                                 <FormGroup>
//                                     <Label for="exampleAddress2">Address 2</Label>
//                                     <Input id="exampleAddress2" placeholder="Apartment, studio, or floor" 
//                                     className="custom-input" />
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Label for="exampleCity">City</Label>
//                                     <Input id="exampleCity" className="custom-input" />
//                                 </FormGroup>
//                            </Col>
//                            </Row>
//                         <Button color="primary" block></Button>
//                     </Form>

//             </Container>
//         </div>
//         </div>
//     );
// }

// export default AddProduct;

import React, { useState } from 'react';
import { InputGroup, InputGroupText } from 'reactstrap';

import { Button, Container, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
import './AddProduct.css';
import SideBar from "./SideBar";

function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        date: '',
        image1: '',
        image2: '',
        image3: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="d-flex" style={{ height: "auto%", backgroundColor: '#ffffff' }}>
            <SideBar />
            <div className="p-4 flex-grow-1 overflow-auto">
            <Container >
                <Form onSubmit={handleSubmit}>
                    <Row className='justify-content-center'>
                        <Col md={7}>
                            <h4 className="mb-4">Add Product</h4>

                            <FormGroup>
                                <Label for="name">Product Name</Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-box"></i>
                                    </InputGroupText>
                                    <Input type="text" name="name" id="name" placeholder="Enter product name" className="custom"
                                        value={formData.name} onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label for="description">Description</Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-align-left " ></i>
                                    </InputGroupText>
                                    <Input type="textarea" name="description" id="description" placeholder="Enter product description"
                                        className="custom" value={formData.description} onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label for="price">Price</Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-dollar-sign"></i>
                                    </InputGroupText>
                                    <Input type="number" name="price" id="price" placeholder="Enter price" className="custom"
                                        value={formData.price} onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label for="category">Category</Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-list"></i>
                                    </InputGroupText>
                                    <Input type="select" name="category" id="category" className="custom"
                                        value={formData.category} onChange={handleChange} >
                                        <option value="">Select Category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="books">Books</option>
                                        <option value="food">Food</option>
                                    </Input>
                                </InputGroup>
                            </FormGroup>

 <FormGroup>
                                <Label for="brand">Brand</Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-tags"></i>
                                    </InputGroupText>
                                    <Input type="select" name="brand" id="brand" className="custom"
                                        value={formData.brand} onChange={handleChange} >
                                        <option value="">Select Brand</option>
                                        <option value="zomato">Zomato</option>
                                        <option value="filpkart">Filpkart</option>
                                        <option value="amazon">Amazon</option>
                                        <option value="haldiram">Haldiram</option>
                                    </Input>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label for="stock">Stock Quantity</Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-warehouse"></i>
                                    </InputGroupText>
                                    <Input type="number" name="stock" id="stock" placeholder="Enter stock quantity" className="custom"
                                        value={formData.stock} onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label for="date">Date </Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-calendar"></i>
                                    </InputGroupText>
                                    <Input type="date" name="date" id="date" className="custom" value={formData.date}
                                        onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label for="image">Image1 </Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-image"></i>
                                    </InputGroupText>
                                    <Input type="file" name="image1" id="image" className="custom" value={formData.image1}
                                        onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="image">Image2 </Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-image"></i>
                                    </InputGroupText>
                                    <Input type="file" name="image2" id="image" className="custom" value={formData.image2}
                                        onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="image">Image3 </Label>
                                <InputGroup>
                                    <InputGroupText className='icon-style'>
                                        <i className="fas fa-image"></i>
                                    </InputGroupText>
                                    <Input type="file" name="image3" id="image" className="custom" value={formData.image3}
                                        onChange={handleChange} />
                                </InputGroup>
                            </FormGroup>

                            <Button type="submit" color="primary" className=' w-100'>
                                Add Product
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
        </div>
    );
}

export default AddProduct;

