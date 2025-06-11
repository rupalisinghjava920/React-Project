
import { Button, Container, Form, FormGroup, Label, Row, Col, Card } from 'reactstrap';
import { InputGroup, Input, InputGroupText } from 'reactstrap';
import SideBar from "./SideBar";


function Brand() {
    return (
        <div className="d-flex" style={{ height: "auto%", backgroundColor: '#ffffff' }}>
            <SideBar />
            <div className="p-4 flex-grow-1 overflow-auto">
                <Container >
                    <Form>
                        <Row className='justify-content-center'>
                            <Col md={7}>
                                <h4 className="mb-4">Brand</h4>
                                <FormGroup>
                                    <Label for="brand">Brand Insert</Label>
                                    <InputGroup>
                                        <InputGroupText className='icon-style'>
                                            <i className="fas fa-tags"></i>
                                        </InputGroupText>
                                        <Input id="brand" placeholder="brand insert" type="text" className="custom" />
                                    </InputGroup>
                                </FormGroup>
                                <Button type="submit" color="primary" className=' w-100'>
                                     Brand Insert
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default Brand;
