import { createSlice } from "@reduxjs/toolkit";
import { productInit } from "../../../interfaces/interfaces";

const init: productInit[] = [
  {
    productName: "",
    productId: null,
    price: null,
    stock: null,
    type: "",
    status: "",
    action: [],
  },
];

const productReducer = createSlice({
  name: "product",
  initialState: init,
  reducers: {
    sendNewProduct: (state, action) => {
      state.push({ ...action.payload });
    },
  },
});

export default productReducer.reducer;
export const { sendNewProduct } = productReducer.actions;
