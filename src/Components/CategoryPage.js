import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import BreadcrumbsNav from "./BreadcrumbsNav";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { ...categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();

  const products = categories[categoryName] || [];

  return (
    <Box sx={{ padding: "20px" }}>
      <BreadcrumbsNav /> 

      <Typography variant="h4" textAlign="center">{categoryName.toUpperCase()} Products</Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap", padding: "20px" }}>
        {products.map((product) => (
          <Card 
            key={product.name} 
            sx={{ width: 250, textAlign: "center", borderRadius: 2, boxShadow: 2, cursor: "pointer" }}
            onClick={() => navigate(`/product/${product.name}`)}
          >
            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="body1" color="green">₹{product.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryPage;
