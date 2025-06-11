// import { Container, Row, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Col } from "reactstrap";

// function Home() {
//     return (
//         <div className="mt-5 ">
//             <Container>
//                 <Row className="g-5">
//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className=" mb-5  d-flex flex-column">
//                             <img alt="apple" src="images/apple.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                     Apple
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                     Green Apple
//                                 </CardSubtitle>
//                                 <CardText>
//                                     A healthy, sweet fruit that is crunchy and comes in red, green, and yellow colors. Great for snacks and full of vitamins.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>

//                     </Col>
//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className="mb-5">
//                             <img alt="chol" src="images/chol.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                     Cholcolate
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                     Mix Cholcolate
//                                 </CardSubtitle>
//                                 <CardText>
//                                     A sweet, delicious treat made from cocoa beans. Loved worldwide and perfect for desserts and snacks.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>

//                     </Col>

//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className="mb-5">
//                             <img alt="frock" src="images/frock.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                     Frock
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                     Gril Forck
//                                 </CardSubtitle>
//                                 <CardText>
//                                     A comfortable and stylish dress, perfect for casual or formal occasions.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>

//                     </Col>

//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className=" mb-5">
//                             <img alt="fruit" src="images/fruit.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                     Apple
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                     Red Apple
//                                 </CardSubtitle>
//                                 <CardText>
//                                     A healthy, sweet fruit that is crunchy and comes in red, green, and yellow colors. Great for snacks and full of vitamins.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>

//                     </Col>


//                 </Row>
//                 <Row className="g-5">
//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className="mb-5">
//                             <img alt="frock1" src="images/frock1.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                    Long Frock
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                     Gril Frock
//                                 </CardSubtitle>
//                                 <CardText>
//                                     A comfortable and stylish dress, perfect for casual or formal occasions.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>

//                     </Col>

//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className="mb-5">
//                             <img alt="jens" src="images/jens.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                      Jens
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                     Men Jens
//                                 </CardSubtitle>
//                                 <CardText>
//                                     Durable and trendy pants made from denim, suitable for everyday wear.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>

//                     </Col>


//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className="mb-5">
//                             <img alt="milk" src="images/milk.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                     Milk
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                                    Cow Milk 
//                                 </CardSubtitle>
//                                 <CardText>
//                                    A nutritious white liquid from cows, rich in calcium and vitamins.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>

//                     </Col>


//                     <Col md={3}>
//                         <Card style={{ width: '18rem' }} className=" mb-5">
//                             <img alt="juice" src="images/juice.jpg" style={{ height: '300px', objectFit: 'cover' }}/>
//                             <CardBody>
//                                 <CardTitle tag="h5">
//                                     Juice
//                                 </CardTitle>
//                                 <CardSubtitle className="mb-2 text-muted " tag="h6">
//                                     Orange Juice
//                                 </CardSubtitle>
//                                 <CardText>
//                                     A refreshing drink made from fresh fruits, full of natural flavors and vitamins.
//                                 </CardText>
//                                 <Button>
//                                     Button
//                                 </Button>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// }
// export default Home;




import { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import ExtraNavbar from "./ExtraNavbar";
import { productData } from "./productData";

function Home({ searchTerm }) {
  const [category, setCategory] = useState("all");

  const filteredProducts = productData
  .filter((item) => category === "all" || item.category === category)
  .filter((item) =>
    (item.title?.toLowerCase() || "").includes((searchTerm || "").toLowerCase())
  );

  return (
    <div className="mt-5">
      <Container>
        <ExtraNavbar setCategory={setCategory} />
        <Row className="g-5 mt-3 justify-content-center">
          {filteredProducts.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card style={{ width: '18rem' }} className="mb-5">
                  <img alt={product.title} src={product.image} style={{ height: '230px', objectFit: 'cover' }} />
                  <CardBody>
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{product.subtitle}</CardSubtitle>
                    <CardText className="card-text">{product.text}</CardText>
                    {/* <Button color="primary">Add To Cart</Button> */}
                    {/* ⭐ Rating and reviews */}
                    <div className="mb-2">
                      <span style={{ backgroundColor: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>
                        {product.rating} ★
                      </span>
                      <span style={{ color: '#878787', marginLeft: '6px', fontSize: '14px' }}>
                        ({product.reviews})
                      </span>
                    </div>

                    {/* 💰 Price and Discount */}
                    <div className="mb-2">
                      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>₹{product.price}</span>
                      <span style={{ textDecoration: 'line-through', margin: '0 8px', color: '#878787' }}>₹{product.originalPrice}</span>
                      <span style={{ color: '#388e3c', fontWeight: 'bold' }}>{product.discountPercent}% off</span>
                    </div>

                    {/* 🚚 Free Delivery */}
                    <div style={{ fontSize: '14px', color: '#212121', marginBottom: '10px' }}>
                      Free delivery
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}


export default Home;
