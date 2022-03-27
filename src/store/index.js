import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

// 작성한 모듈을 가져옵니다.
import userStore from '@/store/modules/userStore.js';
import postStore from '@/store/modules/postStore.js';
import OrgStoreTree from '@/store/modules/OrgStoreTree.js';
import OrgStoreTable from '@/store/modules/OrgStoreTable.js';

const store = createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) {
      return getters.doneTodos.length
    }
  },

  modules: {
    // 키: 값 형태로 저장됩니다.
    'userStore': userStore,
    'postStore': postStore,
    'OrgStoreTree': OrgStoreTree,
    'OrgStoreTable': OrgStoreTable,
  },

  plugins: [
    persistedstate({
      paths: ['OrgStoreTree']
    })
  ]

})

export default store;
