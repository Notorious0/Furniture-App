import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  basket: [],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      const existingProduct = state.basket.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity; // Update quantity
      } else {
        state.basket.push(action.payload);
      }
    },
    removeProductFromBasket: (state, action) => {
      state.basket = state.basket.filter(product => product.id !== action.payload);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const selectTotalPrice = state =>
  state.product.basket.reduce((total, product) => {
    const price = parseFloat(product.newPrice) || 0;
    const quantity = product.quantity || 1;
    return total + (price * quantity);
  }, 0);

export const { addProductToBasket, removeProductFromBasket, setProducts, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;



