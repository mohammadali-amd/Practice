import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import uiSlice from './ui/uiSlice';

export default configureStore({
    reducer: {
        cart: cartSlice,
        ui: uiSlice,
    },
});