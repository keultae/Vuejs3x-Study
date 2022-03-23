export const mutations = {
  addProduct: function(state, payload) {
    // state.cart.push({id: 2, name: "new-" + new Date(), category: "B"});
    state.cart.push(payload);
  }
}