import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      <Header/>
      <main style={{ minHeight: "90vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
