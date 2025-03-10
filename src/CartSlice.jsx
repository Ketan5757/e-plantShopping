import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, price, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ name, price, quantity });
      }
    },

    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
