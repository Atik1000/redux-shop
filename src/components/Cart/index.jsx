import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  ListGroupItem,
  ListGroup,
} from "reactstrap";

const index = () => {
  return (
    <div>
      <Container>
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <CardImg style={{ width: "350px", height: "350px" }} src="" fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>product name</ListGroupItem>
              <ListGroupItem> Price :</ListGroupItem>
              <ListGroupItem> Description :</ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>$</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>In Stock</Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
              <ListGroupItem></ListGroupItem>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;
