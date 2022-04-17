<template>
  <!-- <dlv class="home"> -->
    <a href="https://kyounghwan01.github.io/blog/Vue/vue3/composition-api/#composition-api%E1%84%80%E1%85%A1-%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%80%E1%85%A6-%E1%84%83%E1%85%AC%E1%86%AB-%E1%84%87%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC" target="_blank">Compostion API가 나오게 된 배경</a>
    <div v-for="post in args.posts" :key="post.id">
      <div>{{ post.title }}, {{post.body}}</div>
    </div>    
    <hr>
    <!-- child 컴포넌트에게 props 내림 -->
    <post-list :args="args" />
  <!-- </dlv> -->
</template>
<script>
  // 사용할 컴포넌트 import
  import PostList from './PostList.vue'
  import { ref } from 'vue';

  export default {
    name: 'CompositionApi',
    // 사용할 컴포넌트를 넣어줍니다.
    components: { PostList },

    setup() {
      const args = ref(
        { posts: [
            { title: '1번 타이틀', body: '1번 제목', id: 1 },
            { title: '2번 타이틀', body: '2번 제목', id: 2 },
          ]
        }
      );

      return { args }
    }
  }
</script>