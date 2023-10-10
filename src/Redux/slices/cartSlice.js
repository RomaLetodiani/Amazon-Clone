import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Razer Basilisk V3 Pro Customizable Wireless Gaming Mouse: Fast Optical Switches Gen-3 - HyperScroll Tilt Wheel - Chroma RGB - 11 Programmable Buttons - Focus Pro 30K Sen',
      price: 120.31,
      amount: 1,
      image: 'https://m.media-amazon.com/images/I/81MwzahjhCL._AC_SX569_.jpg',
    },
    {
      id: 2,
      name: 'Razer Mouse Dock Pro with Wireless Charging Puck: Magneti',
      price: 13.51,
      amount: 1,
      image: 'https://m.media-amazon.com/images/I/61RcqqmJBKL._AC_AA180_.jpg',
    },
  ],
  cartTotal: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const newCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = newCartItems;
    },
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].amount += 1;
      } else {
        const tempItem = { ...action.payload, amount: 1 };
        state.items.push(tempItem);
      }
    },
    decrAmount: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[itemIndex].amount > 1) {
        state.items[itemIndex].amount -= 1;
      }
    },
    updateQuantity: (state, action) => {
      const { id, newAmount } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        const priceChange =
          (newAmount - itemToUpdate.amount) * itemToUpdate.price;
        itemToUpdate.amount = newAmount;

        state.cartTotal += priceChange;
        state.totalAmount += newAmount - itemToUpdate.amount;
      }
    },
    getTotal(state) {
      let { total, amount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.total += price * amount;
          cartTotal.amount += amount;

          return cartTotal;
        },
        { total: 0, amount: 0 }
      );

      state.cartTotal = total;
      state.totalAmount = amount;
    },
  },
});

export const { removeItem, addItem, decrAmount, updateQuantity, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
