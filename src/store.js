import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [ 
        {id: 1, name: "아이폰 거치대", category: "A"},
        {id: 2, name: "아이폰 13", category: "A"},
      ]
    }
  },
  getters: {
    cartCount: function (state) {
      return state.cart.length;
    },
    cart: (state) => {
      return state.cart;
    },
    count: (state) => {
      return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addProduct(state) {
      state.cart.push({id: 2, name: "new-" + new Date(), category: "B"});
    }
  },
  plugins: [
    persistedstate({
      paths: ['user', 'cart']
    })
  ]
})

export default store;
