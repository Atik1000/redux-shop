import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loader";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const history = useHistory();
  const clickHandler = (id) => {
    history.push(`/productDeteil/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.herokuapp.com/products")
      .then(function (response) {
        setProduct(response.data);
         setLoader(false);
        console.log(response.data, "==success");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

    return (
      <>
        {loader ? (
          <Loading />
        ) : (
          product.map((product, id) => {
            return (
              <>
              <div key={id} onClick={() => clickHandler(product.id)}>
                <>
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={product.image}
                        alt={product}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.price}</p>
                      </div>
                    </div>
                  </Col>
                </>
              </div>
              </>
            );
          })
        )}
      </>
    );
  }

//   return (
//     <Container>
//       <h3 className="p-3 ml-4">Llatest product</h3>
//       <Row>
//         {product.map((product, id) => (
//           <Col key={id} sm={12} md={6} lg={4} xl={3}>
//             <Card
//               style={{ height: "410px" }}
//               className="my-3 p-3 rounded"
//               onClick={() => clickHandler(product.id)}
//             >
//               <CardImg
//                 style={{ width: "200px", height: "200px" }}
//                 src={product.image}
//                 alt="Card image cap"
//               />
//               <CardBody>
//                 <CardTitle tag="h6">
//                   {" "}
//                   <strong>{product.title}</strong>{" "}
//                 </CardTitle>
//                 <CardSubtitle tag="p" className="mb-2 text-muted">
//                   $ {product.price}
//                 </CardSubtitle>
//                 <CardText className="text-danger">{product.category}</CardText>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }
