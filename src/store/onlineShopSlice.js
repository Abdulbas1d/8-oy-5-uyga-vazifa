import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  { id: 1, name: "Muzlatkich", price: 358, quantity: 0, year: 2024 },
  { id: 2, name: "Kirmoshina", price: 408, quantity: 0, year: 2024 },
  { id: 3, name: "Mikrovolnovka", price: 298, quantity: 0, year: 2025 },
  { id: 4, name: "Changyutkich", price: 109, quantity: 0, year: 2025 },
  { id: 5, name: "Dazmol", price: 89, quantity: 0, year: 2024 },
  { id: 6, name: "Televizor", price: 288, quantity: 0, year: 2024 }
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }

      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      const product = state.find(p => p.id === action.payload.id);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }

      localStorage.setItem("cart", JSON.stringify(state))
    },
    resetCart: (state) => {
      state.forEach(product => product.quantity = 0);

      localStorage.setItem("cart", JSON.stringify(state))
    },
  }
});

export const { addToCart, removeFromCart, resetCart } = productsSlice.actions;
export default productsSlice.reducer;
