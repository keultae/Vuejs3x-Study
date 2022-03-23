export const getters = {
  getCartLength: function (state) {
    return state.cart.length;
  },
  cart: (state) => {
    return state.cart;
  }
}