// import React, { useState, useEffect } from 'react';
// import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

// function EditProduct() {
//   const [product, setProduct] = useState({
//     productName: '',
//     price: '',
//     quantity: '',
//     weight: '',
//     brand: '',
//     discount: '',
//     description: ''
//   });

//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();
//   const { id } = useParams(); // Product ID from URL

//   // ✅ FETCH PRODUCT DATA ON MOUNT
//   useEffect(() => {
//     axios.get(`http://localhost:8080/products/${id}`)
//       .then((response) => {
//         setProduct(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching product:", error);
//       });
//   }, [id]);

//   // ✅ HANDLE INPUT CHANGES
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // ✅ SUBMIT UPDATED DATA
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("product", new Blob([JSON.stringify(product)], { type: "application/json" }));
//     if (image) {
//       formData.append("image", image);
//     }

//     axios.put(`http://localhost:8080/products/${id}`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//       .then(() => {
//         alert("Product updated successfully!");
//         navigate("/admin/productListing");
//       })
//       .catch(error => {
//         console.error("Error updating product", error);
//         alert("Update failed.");
//       });
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card className="p-4 shadow">
//             <h2 className="text-center mb-4">Edit Product</h2>
//             <Form onSubmit={handleSubmit} encType="multipart/form-data">
//               <FormGroup>
//                 <Label>Product Name</Label>
//                 <Input
//                   type="text"
//                   name="productName"
//                   value={product.productName}
//                   onChange={handleChange}
                  
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Price</Label>
//                 <Input
//                   type="number"
//                   name="price"
//                   value={product.price}
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Quantity</Label>
//                 <Input
//                   type="number"
//                   name="quantity"
//                   value={product.quantity}
//                   onChange={handleChange}
                  
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Weight</Label>
//                 <Input
//                   type="text"
//                   name="weight"
//                   value={product.weight}
//                   onChange={handleChange}
                  
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Brand</Label>
//                 <Input
//                   type="text"
//                   name="brand"
//                   value={product.brand}
//                   onChange={handleChange}
                  
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Discount</Label>
//                 <Input
//                   type="text"
//                   name="discount"
//                   value={product.discount}
//                   onChange={handleChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Description</Label>
//                 <Input
//                   type="textarea"
//                   name="description"
//                   value={product.description}
//                   onChange={handleChange}
                  
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label>Image (Choose only if changing)</Label>
//                 <Input
//                   type="file"
//                   onChange={(e) => setImage(e.target.files[0])}
//                 />
//               </FormGroup>
//               <div className="text-center">
//                 <Button color="primary" type="submit">Update Product</Button>
//               </div>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default EditProduct;

import React, { useState, useEffect } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row, Col, Card } from 'reactstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
  const [product, setProduct] = useState({
    productName: '',
    price: '',
    quantity: '',
    weight: '',
    brand: '',
    discount: '',
    description: ''
  });

  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // Product ID from URL

  // ✅ FETCH PRODUCT DATA ON MOUNT
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  // ✅ HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ SUBMIT UPDATED DATA
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product", new Blob([JSON.stringify(product)], { type: "application/json" }));
    if (image) {
      formData.append("image", image);
    }

    axios.put(`http://localhost:8080/products/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        alert("Product updated successfully!");
        navigate("/admin/productListing");
      })
      .catch(error => {
        console.error("Error updating product", error);
        alert("Update failed.");
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Edit Product</h2>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <FormGroup>
                <Label>Product Name</Label>
                <Input
                  type="text"
                  name="productName"
                  value={product.productName}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Quantity</Label>
                <Input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Weight</Label>
                <Input
                  type="text"
                  name="weight"
                  value={product.weight}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Brand</Label>
                <Input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Discount</Label>
                <Input
                  type="text"
                  name="discount"
                  value={product.discount}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Image (Choose only if changing)</Label>
                <Input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </FormGroup>
              <div className="text-center">
                <Button color="primary" type="submit">Update Product</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EditProduct;
