import { createSlice } from "@reduxjs/toolkit";
import { updateWishlist } from "../utils/wishlistUtils";

const initialState = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : { wishlistItems: [] };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;

      const existItem = state.wishlistItems.find((x) => x._id === item._id);

      if (existItem) {
        state.wishlistItems = state.wishlistItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.wishlistItems = [...state.wishlistItems, item];
      }
      return updateWishlist(state);
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter((x) => x._id !== action.payload);
      return updateWishlist(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
