import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isError: false,
  isLoading: false,
  product: [],
  errorMessage: "",
  filterData:[],
  singleProduct:{}
};

// Async thunk to fetch product list
export const getProductList = createAsyncThunk(
  "product/getProductList",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      // Dispatch loading state before fetching
      dispatch(setLoading(true));

      const response = await axios.get("https://fakestoreapi.com/products"); // Replace with your API
      console.log("dasdsadsadsa312",response)
      if (response?.status != 200) {
        throw new Error("Failed to fetch products");
      }


      const data =response.data;
      console.log("dasdsadsadsa",data)
      // Dispatch success state with data
      dispatch(setProducts(data));
      dispatch(setLoading(false));

      return data;
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));

      return rejectWithValue(error.message);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "product/getProductList",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      // Dispatch loading state before fetching
      dispatch(setSingleLoading(true));

      const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // Replace with your API
      console.log("dasdsadsadsa312",response)
      if (response?.status != 200) {
        throw new Error("Failed to fetch products");
      }


      const data =response.data;
      console.log("dasdsadsadsa",data)
      // Dispatch success state with data
      dispatch(setSingleProducts(data));
      dispatch(setSingleLoading(false));

      return data;
    } catch (error) {
      dispatch(setSingleLoading(false));
      dispatch(setSingleError(error.message));

      return rejectWithValue(error.message);
    }
  }
);
const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.isError = false;
      state.errorMessage = "";
    },
    setProducts: (state, action) => {
      state.product = action.payload;
      state.isError = false;
      state.errorMessage = "";
    },
    setError: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
      state.product = [];
    },
    setSingleLoading: (state, action) => {
      state.isLoading = action.payload;
      state.isError = false;
      state.errorMessage = "";
    },
    setSingleProducts: (state, action) => {
      state.singleProduct = action.payload;
      state.isError = false;
      state.errorMessage = "";
    },
    setSingleError: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
      state.singleProduct = {};
    },
    setProductFilter:(state,action)=>{
        state.filterData=action.payload
    }
  },
});

export const { setLoading, setProducts, setError,setProductFilter,setSingleLoading,setSingleProducts,setSingleError } = productSlice.actions;
export default productSlice.reducer;
