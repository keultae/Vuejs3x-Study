import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router 폴더의 index.js가 import
import mixins from './mixins'
import store from './store'

// createApp(App): 최상위 컴포넌트인 App.vue로 app을 생성
// use(router): App.vue에서 router라 사용될 수 있도록 추가
// mount('#app'): public 폴더의 index.html에 정의 되어 있는 id="app"인 html element에 마운트
// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.use(store)
app.mount("#app")
