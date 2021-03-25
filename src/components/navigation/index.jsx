import React from "react";
import { Link } from "react-router-dom";
import { MenuWrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
} from "reactstrap";
import "./style.scss";

const Navigation = () => {
  const cartReducer = useSelector((state) => state);
  console.log(cartReducer, "cartReducer Navigation");
  return (
    <>
      {/* <ul  className='Container'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product/">Details</Link>
        </li>
     <li>Total cart product:{cartReducer.cart}</li>
      </ul> */}
      <Navbar bg="dark" light expand="md" className={"menu"}>
        <Container>
          <NavbarBrand>
       
            <Link to="/">FakeShop</Link>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <input type="text"  placeholder='Serch product'/>
              <NavItem>
                <NavLink className="ml-4" href="/components/">
                <i className="fa fa-shopping-cart"></i>
                  CART
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ml-4" href="/components/">
                <i className="fa fa-user"></i>
                  Sign in
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText> <i className="fa fa-shopping-cart"></i>{cartReducer.cart}</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
