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
      // that peoduct contain below data
      state.push({ ...action.payload, quantity: 1 });
    },

    // Original Remove From Cart Function — unchanged
    remove: (state, action) => {
      // Filtering i.e. removing item which item.id matches with current state items
      return state.filter((item) => item.id !== action.payload);
    },

    // Increase the item quantity from Cart
    addItemQuantity: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state[itemIndex].quantity += 1;
      }
    },

    // decsrese the item quantity from Cart
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

// Export default reducer
export default CartSlice.reducer;
