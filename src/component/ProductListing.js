import React from "react";
import { Card, Container, Table, Row, Col } from "react-bootstrap";

function ProductListing() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={10}>
          <Card className='shadow p-3'>
            <h2 className="text-center mb-4">Product List</h2>
            <Table responsive bordered hover >
              <thead >
                <tr className="bg-dark">
                  <th>S.No</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Weight</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Namkin</td>
                  <td>400</td>
                  <td>200g</td>
                  <td><img src="/images/1.png" width="50"  alt="" /></td>
                  <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Namkin</td>
                  <td>500</td>
                  <td>250g</td>
                  <td><img src="/images/2.png" width="50"  alt="" /></td>
                  <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Cake</td>
                  <td>400</td>
                  <td>100g</td>
                  <td><img src="/images/bc3.png" width="50"  alt="" /></td>
                  <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>Chocolate</td>
                  <td>800</td>
                  <td>400g</td>
                  <td><img src="/images/bc4.png" width="50"  alt="" /></td>
                  <td> 
                    <button className="btn btn-sm btn-primary me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductListing;
