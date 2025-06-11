import React from "react";
import { Link, useParams } from "react-router-dom";
import { productData } from "./productData";
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useCart } from "../context/CartContext";

function ProductDetail() {
    const { id } = useParams();
    const product = productData.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();


    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container className="mt-5">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ maxWidth: '900px', width: '100%', padding: '25px' }} >
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        {/* Left: Image */}
                        <div style={{ flex: '1 1 100%', display: 'flex', justifyContent: 'center' }}>
                            <img alt={product.title} src={`/${product.image}`}
                                style={{ width: '100%', maxWidth: '300px', height: 'auto', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Right: Content */}
                        <div style={{ flex: '2 1 100%', paddingLeft: '20px', marginTop: '20px' }}>
                            <CardBody>
                                <CardTitle tag="h2">{product.title}</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h5">{product.subtitle}</CardSubtitle>
                                <CardText className="mt-3">{product.text}</CardText>


                                <div className="mb-2">
                                    <span style={{ backgroundColor: '#388e3c', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' }}>
                                        {product.rating} ★
                                    </span>
                                    <span style={{ color: '#878787', marginLeft: '6px', fontSize: '14px' }}>
                                        ({product.reviews})
                                    </span>
                                </div>


                                <div className="mb-2">
                                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>₹{product.price}</span>
                                    <span style={{ textDecoration: 'line-through', margin: '0 8px', color: '#878787' }}>₹{product.originalPrice}</span>
                                    <span style={{ color: '#388e3c', fontWeight: 'bold' }}>{product.discountPercent}% off</span>
                                </div>


                                <div style={{ fontSize: '14px', color: '#212121', marginBottom: '10px' }}>
                                    Free delivery
                                </div>

                                <div className="d-flex flex-column mt-3">
                                    <Button color="primary" className="mb-2" onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </Button>

                                    <Button color="warning" tag={Link} to="/">Continue Shopping</Button>
                                </div>


                            </CardBody>
                        </div>
                    </div>
                </Card>
            </div>
        </Container>
    );
}

export default ProductDetail;
