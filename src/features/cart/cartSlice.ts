import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { CartItem } from '../../types/CartItem';

interface CartState {
  cartList: CartItem[];
}

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', '[]');
}

const cartFromLocalStorage = localStorage.getItem('cart') || '[]';

const initialState: CartState = {
  cartList: JSON.parse(cartFromLocalStorage)
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = { id: itemId, amount: 1 };
      const cart = [...state.cartList];
      const hasItem = cart.find((item) => item.id === itemId);

      if (!hasItem) {
        cart.push(item);
        state.cartList = cart;
        localStorage.setItem('cart', JSON.stringify(state.cartList));
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const cart = [...state.cartList];
      state.cartList = cart.filter((item) => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    changeAmount: (state, action: PayloadAction<[string, '+' | '-']>) => {
      const [itemId, sign] = action.payload;
      const cart = [...state.cartList];
      state.cartList = cart.map((item) => {
        if (item.id === itemId) {
          item.amount = sign === '+' ? item.amount + 1 : item.amount - 1;
        }

        return item;
      });
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    clearCart: (state) => {
      state.cartList = [];
      localStorage.setItem('cart', JSON.stringify(state.cartList));
    }
  }
});

export const { addItem, deleteItem, changeAmount, clearCart } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartList;

export default cartSlice.reducer;
