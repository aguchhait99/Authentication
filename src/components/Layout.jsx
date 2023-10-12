import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Authentication",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "TechX",
};

export default Layout;
