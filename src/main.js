import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router 폴더의 index.js가 import
import mixins from './mixins'
import store from '@/store/index.js'

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";


import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
// import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

// createApp(App): 최상위 컴포넌트인 App.vue로 app을 생성
// use(router): App.vue에서 router라 사용될 수 있도록 추가
// mount('#app'): public 폴더의 index.html에 정의 되어 있는 id="app"인 html element에 마운트
// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.use(store)
app.use(BootstrapVue3)
app.use(VMdEditor);
app.use(VMdPreview);
app.mount("#app")

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue-3/dist/bootstrap-vue-3.es.js";