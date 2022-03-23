import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

const store = createStore({
  state() {
    return {
      cart: [ 
        // {id: 1, name: "아이폰 거치대", category: "A"},
        // {id: 2, name: "아이폰 13", category: "A"},
      ]
    }
  },
  
  getters: getters,
  mutations: mutations,
  actions: actions,

  plugins: [
    persistedstate({
      paths: ['cart']
    })
  ]
})

export default store;
