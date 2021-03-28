import React from "react";
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
import Auth from "./components/Auth";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Layout >
          <Switch>
            <Route exact path={"/"}>
              <Product />
            </Route>
            <Route exact path={"/productDeteil/:id"}>
              <ProductDetail  />
            </Route>
            <Route exact path={"/signin"}>
              <Auth />
            </Route>
            <Route exact path={"/cart"}>
              <Cart />
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


