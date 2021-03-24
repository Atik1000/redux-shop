import React from "react";
import { Link } from "react-router-dom";
import { MenuWrapper } from "./styled";
import {useSelector,useDispatch} from 'react-redux'

const Navigation = ({cart}) => {
  const cartReducer=useSelector((state)=>state)
  console.log(cartReducer,'cartReducer Navigation');
  return (
    <MenuWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product/">Details</Link>
        </li>
     <li>Total cart product:{cartReducer.cart}</li>
      </ul>
    </MenuWrapper>
  );
};

export default Navigation;
