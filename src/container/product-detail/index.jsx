import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import axios from "axios";
import Loading from "../../components/loader";

const ProductDetail = ({cart,setCart}) => {
  const cartStore=useSelector((state)=>state);
  const dispatch=useDispatch();
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

const addToCart=()=>{
  dispatch({
    type:'ADD_TO_CART',
    payload:cartStore.cart?cartStore.cart+1:1,
  })
}

  return (
    <div className="container">
      {loading === true ? (
        <div>
          <Loading />
        </div>
      ) : found === undefined ? (
        <h1>Page Not Found</h1>
      ) : (
        <div className="container">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={product.image} alt="img" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5>Product Name: {product.title}</h5>
                  <p>
                    <strong>Description:</strong>
                    {product.description}
                  </p>
                  <p>
                    <strong>Description:</strong>
                    {product.category}
                  </p>
                  <p>Price: {product.price}</p>
                  <Link className="btn btn-primary" to="/">
                    back to Home
                  </Link>
                  <button
                    class="btn btn-warning mt-4"
                   onClick={addToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
