import { createStore } from 'vuex'
// 작성한 모듈을 가져옵니다.
import userStore from '@/store/modules/userStore.js';
import postStore from '@/store/modules/postStore.js';

const store = createStore({
  modules: {
    // 키: 값 형태로 저장됩니다.
    userStore: userStore,
    postStore: postStore
  }
})

export default store;
