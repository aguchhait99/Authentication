import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Layout title={'Home'}>
      <h1 style={{ textAlign: "center" }}>Authentication with MUI</h1>
      <img src="logo512.png" alt="" style={{ marginLeft: "600px", height: "300px" }} />
      </Layout>
    </>
  );
};

export default Home;
