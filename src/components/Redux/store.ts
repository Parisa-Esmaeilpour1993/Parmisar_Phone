import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./PanelRedux/PanelReducer";

const combinedReducers = combineReducers({
  product: productReducer
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
