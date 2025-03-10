import { createSlice } from "@reduxjs/toolkit";
import carrotImg from "../../images/carrot.png";
import potatoImg from "../../images/potato.png";
import appleImg from "../../images/apple.png";
import bananaImg from "../../images/banana.png";
import pizzaImg from "../../images/pizza.png";
import burgerImg from "../../images/burger.png";

const initialState = {
  selectedCategory: null,
  cart: [],
  orders: [],
  vegs: [
    {
      name: "Carrot",
      price: 20,
      description: "Fresh organic carrots rich in Vitamin A, great for eyesight and skin.",
      details: "Sourced from organic farms in India. Crunchy, sweet, and highly nutritious.",
      image: carrotImg,
    },
    {
      name: "Potato",
      price: 50,
      description: "Organic farm-fresh potatoes, perfect for cooking and frying.",
      details: "Rich in carbohydrates and potassium. Comes from premium farms in Uttar Pradesh.",
      image: potatoImg,
    },
  ],
  fruits: [
    {
      name: "Apple",
      price: 100,
      description: "Juicy, sweet, and fiber-rich apples, perfect for a healthy snack.",
      details: "Sourced from Himachal Pradesh orchards. Helps in digestion and immunity boosting.",
      image: appleImg,
    },
    {
      name: "Banana",
      price: 30,
      description: "Sweet bananas, rich in potassium and energy-boosting nutrients.",
      details: "Soft and naturally ripened. Great for digestion and muscle recovery.",
      image: bananaImg,
    },
  ],
  food: [
    {
      name: "Pizza",
      price: 250,
      description: "Delicious cheesy pizza loaded with fresh toppings.",
      details: "Made with 100% whole wheat dough, premium mozzarella, and farm-fresh vegetables.",
      image: pizzaImg,
    },
    {
      name: "Burger",
      price: 150,
      description: "Tasty grilled burger with fresh lettuce, tomatoes, and a juicy patty.",
      details: "Made with 100% fresh ingredients, juicy meat patty, and a soft sesame bun.",
      image: burgerImg,
    },
  ],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.name === action.payload
      );
      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    placeOrder: (state) => {
      if (state.cart.length > 0) {
        const orderId = Date.now().toString(); 
        const orderDate = new Date().toLocaleDateString();
        const totalPrice = state.cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

        state.orders.push({
          id: orderId,
          date: orderDate,
          items: [...state.cart],
          total: totalPrice,
        });

        state.cart = []; 
      }
    },
  },
});

export const { setSelectedCategory, addToCart, removeFromCart, placeOrder } = categorySlice.actions;
export default categorySlice.reducer;
