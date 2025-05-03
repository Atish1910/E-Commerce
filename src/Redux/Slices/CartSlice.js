import { createSlice } from "@reduxjs/toolkit";

// Create Slice to the component using react hook
export const CartSlice = createSlice({
  // Name Of the slice
  name: "cart",
  // Initial state is Empty array
  initialState: [],
  // Reducers contain all the functions
  reducers: {
    // Original Add To Cart Function — unchanged
    add: (state, action) => {
      // 'action.payload' is the item to add to Cart
      state.push(action.payload);
    },

    // Original Remove From Cart Function — unchanged
    remove: (state, action) => {
      // Filtering i.e. removing item which item.id matches with current state items
      return state.filter((item) => item.id !== action.payload);
    },

    // ✅ NEW: Increase quantity if item exists, else add with quantity: 1
    addItemQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity += 1;
      }
    },

    // ✅ NEW: Decrease quantity or remove item
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1); // remove item if quantity is 1
        }
      }
    },
  },
});

// Export functions from actions
export const { add, remove, addItemQuantity, decreaseItemQuantity } = CartSlice.actions;

// Export default reducer
export default CartSlice.reducer;
