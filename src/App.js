import React, { useState } from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Product from "./container/home";
import ProductDetail from "./container/product-detail";
import NotFound from "./container/404";
import Layout from "./components/Layout";



const App = () => {
const [cart,setCart]=useState(0)

  return (
    <>
      <Router>
        <Layout cart={cart} >
          <Switch>
            <Route exact path={"/"}>
              <Product />
            </Route>
            <Route exact path={"/productDeteil/:id"}>
              <ProductDetail cart={cart} setCart={setCart}/>
            </Route>

            <Route exact path={"/404"}>
              <NotFound />
            </Route>
            <Route path={"*"} render={() => <Redirect to="/404" />} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
