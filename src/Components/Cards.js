import React from "react";
import { Card, CardContent, CardMedia, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import vege from "../images/vegi.png";
import fruits from "../images/fruit.png";
import foods from "../images/food.png";

const Cards = () => {
  const navigate = useNavigate();
  
  const categories = [
    { name: "vegs", image: vege },
    { name: "fruits", image: fruits },
    { name: "food", image: foods }
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px 0",
        }}
      >
        {categories.map((category) => (
          <Card
            key={category.name}
            sx={{
              width: 300,
              textAlign: "center",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={category.image} 
              alt={`${category.name} Image`}
            />
            
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {category.name.toUpperCase()}
              </Typography>

              <Button
                variant="outlined"
                color="warning"
                fullWidth
                onClick={() => navigate(`/category/${category.name}`)}
              >
                View Products
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Cards;
