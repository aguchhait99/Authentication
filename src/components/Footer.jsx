import React from "react";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import { Grid } from "@mui/material";
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ bgcolor: "#2D2D2D" }}
      >
        <Grid item xs={12}>
          <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>
            All Right Reserved &copy; Authentication
          </h2>
        </Grid>
        <Grid item xs={12}>
          <Link href="#" underline="hover" sx={{color: '#FFFFFF', ml: 80, fontSize: 20}}>
            Home 
          </Link> 
          <Link href="#" underline="hover" sx={{color: '#FFFFFF', fontSize: 20, ml: 5}}>
            About 
          </Link> 
          <Link href="#" underline="hover" sx={{color: '#FFFFFF', fontSize: 20, ml: 5}}>
            Contact Us  
          </Link> 
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
