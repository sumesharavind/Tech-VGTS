import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button, Grid, CardMedia } from "@mui/material";
import { addToCart, removeFromCart } from "../Components/redux/categorySlice";
import BreadcrumbsNav from "./BreadcrumbsNav";

const ProductDetailPage = () => {
  const { productName } = useParams();
  const { cart, vegs, fruits, food } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const product = [...vegs, ...fruits, ...food].find((p) => p.name === productName);
  if (!product) return <Typography variant="h4" textAlign="center">Product not found</Typography>;

  const cartItem = cart.find((item) => item.name === product.name);

  return (
    <Box sx={{ padding: "40px", margin: "auto" }}>
       <BreadcrumbsNav />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia component="img" image={product.image} alt={product.name} sx={{ width: "100%", borderRadius: 2 }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>{product.description}</Typography>
          <Typography variant="h5" color="green" sx={{ mt: 2 }}>₹{product.price}</Typography>

          {cartItem ? (
            <Box sx={{ display: "flex", justifyContent: "left", gap: 2, mt: 2 }}>
              <Button variant="contained" color="error" onClick={() => dispatch(removeFromCart(product.name))}>-</Button>
              <Typography variant="h6">{cartItem.quantity}</Typography>
              <Button variant="contained" color="success" onClick={() => dispatch(addToCart(product))}>+</Button>
            </Box>
          ) : (
            <Button 
              variant="contained" 
              color="success" 
              sx={{ mt: 2 }} 
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;
