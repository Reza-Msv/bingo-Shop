import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  Loading: false,
  products: [],
  error: "",
};

const fetchData = createAsyncThunk("product/fetchData", () => {
  return api.get("/products");
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.Loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.pending, (state) => {
      state.Loading = true;
      state.products = [];
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.Loading = false;
      state.products = [];
      state.error = action.payload.message;
    });
  },
});

export default productSlice.reducer;
export { fetchData };
