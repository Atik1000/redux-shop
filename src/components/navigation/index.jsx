import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  Container,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";
import "./style.scss";

const Navigation = () => {
  const cartReducer = useSelector((state) => state.cartStore);
  console.log(cartReducer, "cartReducer Navigation");
  return (
    <>
      <Navbar bg="dark" light expand="md" className={"menu"}>
        <Container>
          <NavbarBrand>
            <Link to="/">FakeShop</Link>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <input type="text" placeholder="Serch product" />
              <NavItem>
                <Link className="ml-4" to="/cart">
                  <i className="fa fa-shopping-cart"></i>
                  CART
                  : {cartReducer.cart}
                </Link>
              </NavItem>
              <NavItem>
                <Link className="ml-4" to="/signin">
                  <i className="fa fa-user"></i>
                  Sign in
                </Link>
              </NavItem>
            </Nav>
        
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
