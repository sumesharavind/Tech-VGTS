import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BreadcrumbsNav from "./BreadcrumbsNav";

const Orders = () => {
  const orders = useSelector((state) => state.categories.orders);

  return (
    <Box sx={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <BreadcrumbsNav />
      <Typography variant="h4" textAlign="center">
        📦 Your Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography textAlign="center" mt={2}>
          No orders placed yet!
        </Typography>
      ) : (
        orders.map((order) => (
          <Paper key={order.id} sx={{ padding: 3, borderRadius: 2, boxShadow: 3, mt: 3 }}>
            <Typography variant="h6">Order ID: {order.id}</Typography>
            <Typography variant="body2">Date: {order.date}</Typography>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {order.items.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={item.image} />
                    </ListItemAvatar>
                    <ListItemText primary={item.name} secondary={`₹${item.price} x ${item.quantity}`} />
                  </ListItem>
                  {idx < order.items.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            <Typography variant="h6" sx={{ mt: 2 }}>Total: ₹{order.total}</Typography>
          </Paper>
        ))
      )}
    </Box>
  );
};

export default Orders;
