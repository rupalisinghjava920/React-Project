// import React from 'react';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';

// function Home() {
//   const products = [
//     {
//       name: "Burger Stock",
//       price: "$500",
//       image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
//     },
//     {
//       name: "Brown Cake",
//       price: "$700",
//       image: process.env.PUBLIC_URL + "/images/brown - Copy.jpeg",
//     },
//     {
//       name: "Pink Cake",
//       price: "$300",
//       image: process.env.PUBLIC_URL + "/images/Bcake.jpeg",
//     },

//     {
//       name: "Namikin",
//       price: "$300",
//       image: process.env.PUBLIC_URL + "/images/1.png",
//     },
//     {
//       name: "Sweet Cake",
//       price: "$1000",
//       image: process.env.PUBLIC_URL + "/images/bakery - Copy.png",
//     },
//     {
//       name: "Sweet",
//       price: "$900",
//       image: process.env.PUBLIC_URL + "/images/bc3.png",
//     },
//     {
//       name: "Burger Stock",
//       price: "$500",
//       image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
//     },
//     {
//       name: "Brown Cake",
//       price: "$700",
//       image: process.env.PUBLIC_URL + "/images/brown - Copy.jpeg",
//     },

//     {
//       name: "Bakery Cake",
//       price: "$1000",
//       image: process.env.PUBLIC_URL + "/images/cake2.jpeg",
//     },
//     {
//       name: "Cake Mlae",
//       price: "$900",
//       image: process.env.PUBLIC_URL + "/images/Best.jpeg",
//     },
//     {
//       name: "Bread",
//       price: "$500",
//       image: process.env.PUBLIC_URL + "/images/bread2.jpg",
//     },
//     {
//       name: "Cake Chocolate",
//       price: "$700",
//       image: process.env.PUBLIC_URL + "/images/cake1.jpeg",
//     },
//   ];

//   return (
//     <div className="login-wrapper">
//       <Container className="mt-5">
//         <Row>
//           {products.map((product, index) => (
//             <Col key={index} md={4} lg={3} sm={6} xs={12} className="mb-4">
//               <Card className="shadow-sm login-card" style={{ height: '100%' }}>
//                 <Card.Img
//                   variant="top"
//                   src={product.image}
//                   style={{ height: '150px' }}
//                 />
//                 <Card.Body>
//                   <Card.Title style={{ color: 'red' }}>{product.name}</Card.Title>
//                   <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
//                   <Button variant="danger text-center">Add to Cart</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Home;

import { useEffect, useState, useContext } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from '../../CartContext';


function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    axios.post("http://localhost:8080/cart", {
      userId: 1,
      productId: product.id,
      quantity: 1
    })
      .then(() => {
        addToCart();
      })
      .catch(error => {
        console.error("Error adding to cart:", error);
      });
  };

  return (
    <div className="login-wrapper">
      <Container className="mt-5">
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={4} lg={3} sm={6} xs={12} className="mb-4">
              <Card className="shadow-sm login-card" style={{ height: '100%' }}>
                <Card.Img
                  variant="top"
                  src={`/images/${product.image}`} width="50" alt={product.productName}
                  style={{ height: '150px' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: 'red' }}>{product.productName}</Card.Title>
                  <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
                  <Button variant="danger" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
