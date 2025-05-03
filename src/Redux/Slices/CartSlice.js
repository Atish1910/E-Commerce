import { createSlice } from "@reduxjs/toolkit";

// Create Slice to the componenet using react hook
export const CartSlice = createSlice({
  // Name Of the slice
  name: "cart",
  //   Initial state is Empty array
  initialState: [],
  //   Reducer is an object which contains all the Functions
  reducers: {
    // Add To Cart Function State
    // State -> Current State
    // Action -> action we are peforming on that item in state
    add: (state, action) => {
      // 'action.payload' is the item to add to Cart
      state.push(action.payload);
    },
    // Remove from Cart Function for State
    remove: (state, action) => {
      // Filtering i.e. removing item which item.id is match with current state items
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Export functions Add & Remove from actions
export const { add, remove } = CartSlice.actions;
// Export default Reducer
export default CartSlice.reducer;
