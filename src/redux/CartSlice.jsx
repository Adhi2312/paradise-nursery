import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item: { name, image, cost, quantity }
    numOfItems: 0, // Total number of items (quantity summed) in the cart
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.numOfItems += 1;
    },
    removeItem: (state, action) => {
      const name = action.payload;
      const itemToRemove = state.items.find((item) => item.name === name);
      if (itemToRemove) {
        state.numOfItems -= itemToRemove.quantity;
      }
      state.items = state.items.filter((item) => item.name !== name);
      if (state.numOfItems < 0) {
        state.numOfItems = 0;
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        const difference = quantity - existingItem.quantity;
        state.numOfItems += difference;
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
