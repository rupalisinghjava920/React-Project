
import { Button, Container, Form, FormGroup, Label, Row, Col, Card } from 'reactstrap';
import { InputGroup, Input, InputGroupText } from 'reactstrap';
import SideBar from "./SideBar";


function Category() {
    return (
        <div className="d-flex" style={{ height: "auto%", backgroundColor: '#ffffff' }}>
            <SideBar />
            <div className="p-4 flex-grow-1 overflow-auto">
                <Container >
                    <Form>
                        <Row className='justify-content-center'>
                            <Col md={7}>
                                <h4 className="mb-4">Category</h4>
                                <FormGroup>
                                    <Label for="category">Category</Label>
                                    <InputGroup>
                                        <InputGroupText className='icon-style'>
                                            <i className="fas fa-list"></i>
                                        </InputGroupText>
                                        <Input id="category" placeholder="category insert" type="text" className="custom" />
                                    </InputGroup>
                                </FormGroup>
                                <Button type="submit" color="primary" className=' w-100'>
                                     Category
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default Category;
