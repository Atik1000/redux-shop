import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Loading from "../../components/loader";
import {
  Col,
  Container,
  Row,
  Image,
  CardImg,
  ListGroup,
  Item,
  ListGroupItem,
  Card,
  Button,
} from "reactstrap";

const ProductDetail = ({ cart, setCart }) => {
  const cartStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [found, setFound] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.herokuapp.com/products/${id}/`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.data);
        setLoading(false);
        setFound(err.data);
      });
  }, []);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: cartStore.cart ? cartStore.cart + 1 : 1,
    });
  };

  return (
    <>
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : found === undefined ? (
        <h1>Page Not Found</h1>
      ) : (
        <Container>
          <Link to="/" className="btn btn-light my-3">
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <CardImg
                style={{ width: "350px", height: "350px" }}
                src={product.image}
                alt={product.name}
                fluid
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>{product.title}</ListGroupItem>
                <ListGroupItem> Price : ${product.price}</ListGroupItem>
                <ListGroupItem>
                  {" "}
                  Description : {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
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
                <ListGroupItem>
                  <Button onClick={addToCart} className='btn-block' type='button'>Add to Cart</Button>
                </ListGroupItem>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;

