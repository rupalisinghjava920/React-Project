// import React from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';
// import {Link} from 'react-router-dom';

// function ProductDetail() {
//   const productData = {
//     name: "Namkin",
//     price: "$500",
//     quantity:"2",
//     weight: "500kg",
//     description: "A crunchy and savory namkin snack, perfectly seasoned for a delightful tea-time treat.",
//     image: process.env.PUBLIC_URL + "/images/1.png",
//   };

//   const productList = [
//     {
//       name: "Burger Stock",
//       price: "$500",
//       image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
//     },
//     {
//       name: "Pizza Supreme",
//       price: "$700",
//       image: process.env.PUBLIC_URL + "/images/brown - Copy.jpeg",
//     },
//     {
//       name: "French Fries",
//       price: "$300",
//       image: process.env.PUBLIC_URL + "/images/Bcake.jpeg",
//     },
//     {
//       name: "Namikin",
//       price: "$300",
//       image: process.env.PUBLIC_URL + "/images/1.png",
//     },
    
//     // Add more if needed
//   ];

//   return (
//      <div className="login-wrapper">
//     <Container className="mt-5">
//       {/* Product Detail Section */}
//       <Card className="shadow mb-5 login-card " style={{ width: '100%', margin: '0 auto' ,height: "440px"}}>
//         <Row className="g-0">
//           <Col md={6}>
//             <Card.Img variant="top" src={productData.image} style={{ height: '70%'}} />
//           </Col>
//           <Col md={6}>
//             <Card.Body style={{ margin: '50px'}}>
//               <Card.Title style={{ color: 'red' }}>{productData.name}</Card.Title>
//               <Card.Text>
//                 <strong>Price:</strong> {productData.price}<br />
//                 <strong>Quantity:</strong> {productData.quantity}<br />
//                 <strong>Weight:</strong> {productData.weight}<br />
//                 <strong>Description:</strong> {productData.description}
//               </Card.Text>
//               <div className="mt-5">
//                 <Link to={"/productCard"}>
//                   <button className="btn btn-sm btn-primary me-3">Add Product</button>
//                 </Link>
//                 <Link to={"/"}>
//                   <button className="btn btn-sm btn-danger">Continue Shopping</button>
//                 </Link>
//               </div>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>
      

//       {/* Related Products Section */}
//       <h4 className="mb-5 mt-5 text-start">Related Products</h4>
//       <Row className="g-4 justify-content-center">
//         {productList.map((product, index) => (
//           <Col key={index} xs={12} sm={6}  md={4} lg={3}>
//             <Card className="shadow-sm h-100">
//               <Card.Img
//                 variant="top"
//                 src={product.image}
//                 style={{ height: '150px' }}
//               />
//               <Card.Body>
//                 <Card.Title style={{ fontSize: '1rem' ,color: 'red'}}>{product.name}</Card.Title>
//                 <Card.Text style={{ fontSize: '0.9rem' }}>
//                   <strong>Price:</strong> {product.price}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//     </div>
//   );
// }

// export default ProductDetail;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

// Sample product data (can also come from a database or API)
const productList = [
  {
    id: "1",
    name: "Namkin",
    price: "$500",
    quantity: "2",
    weight: "500kg",
    description: "A crunchy and savory namkin snack, perfectly seasoned for a delightful tea-time treat.",
    image: process.env.PUBLIC_URL + "/images/1.png",
  },
  {
    id: "2",
    name: "Burger Stock",
    price: "$400",
    quantity: "1",
    weight: "300g",
    description: "Juicy burger with soft buns and cheese.",
    image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
  },
  {
    id: "3",
    name: "Brown Cake",
    price: "$700",
    quantity: "1",
    weight: "450g",
    description: "Loaded with cheese, veggies, and meat toppings.",
    image: process.env.PUBLIC_URL + "/images/brown - Copy.jpeg",
  },
  {
    id: "4",
    name: "French Fries",
    price: "$300",
    quantity: "1",
    weight: "200g",
    description: "Crispy golden fries served with ketchup.",
    image: process.env.PUBLIC_URL + "/images/Bcake.jpeg",
  },

  {
    id: "5",
    name: "Teachers Day Cake",
    price: "$300",
    quantity: "1",
    weight: "200g",
    description: " Very tasty.",
    image: process.env.PUBLIC_URL + "/images/teachersday.jpg",
  },
   {
    id: "6",
    name: "Truffle Cake",
    price: "$1000",
    quantity: "1",
    weight: "500g",
    description: "So tasty.",
    image: process.env.PUBLIC_URL + "/images/trufflecake.jpg",
  },
  
];

function ProductDetail() {
  const { id } = useParams(); // Read product ID from URL

  const product = productList.find((p) => p.id === id);

  if (!product) {
    return (
      <Container className="mt-5">
        <h3>Product not found</h3>
        <Link to="/admin/productListing">Go Back</Link>
      </Container>
    );
  }

  // Filter related products (excluding current)
  const products = productList.filter((p) => p.id !== id);

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        {/* Product Detail Section */}
        <Card className="shadow mb-5 login-card" style={{ width: '100%', height: "440px" }}>
          <Row className="g-0">
            <Col md={6}>
              <Card.Img variant="top" src={product.image} style={{ height: '70%' }} />
            </Col>
            <Col md={6}>
              <Card.Body style={{ margin: '50px' }}>
                <Card.Title style={{ color: 'red' }}>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Price:</strong> {product.price}<br />
                  <strong>Quantity:</strong> {product.quantity}<br />
                  <strong>Weight:</strong> {product.weight}<br />
                  <strong>Description:</strong> {product.description}
                </Card.Text>
                <div className="mt-5">
                  <Link to={"/add-product"}>
                    <button className="btn btn-sm btn-primary me-3">Add Product</button>
                  </Link>
                  <Link to={"/admin/productListing"}>
                    <button className="btn btn-sm btn-danger">Continue Shopping</button>
                  </Link>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        {/* Related Products Section */}
        <h4 className="mb-5 mt-5 text-start">Related Products</h4>
        <Row className="g-4 justify-content-center">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm h-100">
                <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '150px'}}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1rem', color: 'red' }}>{product.name}</Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem' }}>
                      <strong>Price:</strong> {product.price}
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
