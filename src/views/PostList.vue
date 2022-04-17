<template>
  <div>
    <div v-for="post in args.posts" :key="post.id">
      <div @click="clickDiv($event, post)">{{ post.title }}, {{post.body}}</div>
    </div>    
  </div>
</template>
<script>
export default {
  name: 'PostList',
  // 사용할 props를 배열내에 정의합니다.
  // props: ["posts"],
  props: {
    "args": Object 
  },

  setup(props) {
    console.log("props.args=" + props.args); // 받은 prop 사용가능
  }, 

  methods: {
    clickDiv(e, post) {
      post.body = "NEW";
      // this.args.posts[0].title = "TITLE";
      console.log("title=" + this.args.posts[0].title);
    }
  }
};
</script>