import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loader";

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
      })
      .then(function () {
        console.log("API doenot response plz wait");
      });
  }, []);

  return (
    <>
      <h2 className="mt-3 pt-3 pb-3 text-center ">Product page</h2>
      {loader ? (
        <Loading />
      ) : (
        product.map((product, id) => {
          return (
            <div key={id}>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={product.image}
                        alt={product}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.price}</p>
                        <button
                          onClick={() => clickHandler(product.id)}
                          class="btn btn-primary"
                        >
                          Go somewhere
                        </button>

                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
