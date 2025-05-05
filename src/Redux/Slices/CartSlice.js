import { createSlice } from "@reduxjs/toolkit";

// Create Slice to the component using react hook
export const CartSlice = createSlice({
  // Name Of the slice we will use as a key
  name: "cart",

  //  initilise state for blank(empty) array
  initialState: [],


  //it is besically funcation how reducer state will change as per dispatch
  reducers: {
    
    // we are adding product inside cart 
    add: (state, action) => {
      // that product contain below data
      state.push({ ...action.payload, quantity: 1 });
    },

    // remove a product from cart 
    remove: (state, action) => {
      // remove data with help of id
      return state.filter((item) => item.id !== action.payload);
    },

    // increase the quantity of product which already added
    addItemQuantity: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state[itemIndex].quantity += 1;
      }
    },

    // decrease the quantity of product which already added
    decreaseItemQuantity: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1 && state[itemIndex].quantity > 0) {
        state[itemIndex].quantity -= 1;
      }
    },
  },
});

// Export functions from actions
export const { add, remove, addItemQuantity, decreaseItemQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
