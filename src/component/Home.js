
import  { useContext  } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from "../context/CartContext";

function Home() {
const { cartCount, setCartCount } = useContext(CartContext);

  const products = [
    {
      name: "Furit Chocolate Cake",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/furitchocolate.jpg",
    },
    {
      name: "Pineapples Lices Cake",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/pineappleslices.jpg",
    },
    {
      name: "Teachers Day Cake",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/teachersday.jpg",
    },

    {
      name: "Turffle Cake",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/trufflecake.jpg",
    },

    {
      name: "Unicorn Fondant Cake",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/unicornfondant.jpg",
    },
    {
      name: "Burger Stock",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
    },
    {
      name: "Brown Cake",
      price: "$700",
      image: process.env.PUBLIC_URL + "/images/brown - Copy.jpeg",
    },
    {
      name: "Pink Cake",
      price: "$300",
      image: process.env.PUBLIC_URL + "/images/Bcake.jpeg",
    },

    {
      name: "Namikin",
      price: "$300",
      image: process.env.PUBLIC_URL + "/images/1.png",
    },
    {
      name: "Sweet Cake",
      price: "$1000",
      image: process.env.PUBLIC_URL + "/images/bakery - Copy.png",
    },
    {
      name: "Sweet",
      price: "$900",
      image: process.env.PUBLIC_URL + "/images/bc3.png",
    },
    {
      name: "Burger Stock",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/Burger stock.jpeg",
    },
    {
      name: "Brown Cake",
      price: "$700",
      image: process.env.PUBLIC_URL + "/images/brown - Copy.jpeg",
    },

    {
      name: "Bakery Cake",
      price: "$1000",
      image: process.env.PUBLIC_URL + "/images/cake2.jpeg",
    },
    {
      name: "Cake Mlae",
      price: "$900",
      image: process.env.PUBLIC_URL + "/images/Best.jpeg",
    },
    {
      name: "Bread",
      price: "$500",
      image: process.env.PUBLIC_URL + "/images/bread2.jpg",
    },
    {
      name: "Cake Chocolate",
      price: "$700",
      image: process.env.PUBLIC_URL + "/images/cake1.jpeg",
    },
  ];

  const handleAddToCart = () => {
     setCartCount(cartCount + 1);  
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
                  src={product.image}
                  style={{ height: '150px' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: 'red' }}>{product.name}</Card.Title>
                  <Card.Text><strong>Price:</strong> {product.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={handleAddToCart} 
                  >
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

