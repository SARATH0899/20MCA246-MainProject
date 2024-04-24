export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateWishlist = (state) => {
  state.itemsPrice = addDecimals(state.wishlistItems.reduce((acc, item) => acc + item.price * item.qty, 0));

  localStorage.setItem('wishlist', JSON.stringify(state));

  return state;
}