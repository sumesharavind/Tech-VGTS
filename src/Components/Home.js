import { AppBar, Toolbar, Typography, Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const cartCount = useSelector((state) => state.categories.cart.length); 

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "grey" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography  variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>
          Logo
        </Typography>

        
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Home;
