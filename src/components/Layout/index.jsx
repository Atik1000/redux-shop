import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children,cart }) => {
  console.log(children, "==children");
  return (
    <>
      <Header cart={cart} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
