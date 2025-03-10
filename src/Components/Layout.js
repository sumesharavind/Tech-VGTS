import React from "react";
import { Box, Typography } from "@mui/material";
import Home from "./Home"; 
import Cards from "./Cards"; 
import BreadcrumbsNav from "./BreadcrumbsNav"; 
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>

      
      <Box sx={{ padding: "10px 40px" }}>
        <BreadcrumbsNav />
      </Box>

     
      <Box sx={{ padding: "20px 40px" }}>
        <Typography variant="h6" color="inherit" textAlign="center">
          Categories
        </Typography>
        <Cards />
        <Outlet /> 
      </Box>
    </Box>
  );
};

export default Layout;
