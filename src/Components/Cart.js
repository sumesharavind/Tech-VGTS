import { Box, Typography, Button, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Grid, Paper } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, placeOrder } from "../Components/redux/categorySlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.categories.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      dispatch(placeOrder()); 
      navigate("/orders"); 
    }
  };
  
  return (
    <Box sx={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <Typography variant="h4" textAlign="center">
        🛒 Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography textAlign="center" mt={2}>
          Your cart is empty!
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ mt: 3 }}>
         
          <Grid item xs={12} md={7}>
            <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 2, boxShadow: 2 }}>
              {cart.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 2 }}>
                    
                   
                    <ListItemAvatar>
                      <Avatar variant="rounded" src={item.image} sx={{ width: 70, height: 70 }} />
                    </ListItemAvatar>

                    
                    <ListItemText
                      primary={item.name}
                      secondary={`₹${item.price}`}
                      sx={{ flexGrow: 1, marginLeft: 2 }}
                    />

                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Button variant="contained" color="error" size="small" onClick={() => dispatch(removeFromCart(item.name))}>
                        -
                      </Button>
                      <Typography variant="body1" sx={{ minWidth: "30px", textAlign: "center" }}>
                        {item.quantity}
                      </Typography>
                      <Button variant="contained" color="success" size="small" onClick={() => dispatch(addToCart(item))}>
                        +
                      </Button>
                    </Box>
                  </ListItem>
                  {index < cart.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Grid>

          
          <Grid item xs={12} md={5}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h6">Order Summary</Typography>
              <Divider sx={{ my: 2 }} />

              <Typography variant="body1">Total Items: {totalItems}</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                Total Price: ₹{totalPrice}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                disabled={cart.length === 0} 
                onClick={handlePlaceOrder} 
              >
                Place Order
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
