import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children}) => {
  console.log(children, "==children");
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
