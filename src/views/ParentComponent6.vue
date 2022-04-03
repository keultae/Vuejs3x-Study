<template>
    <div class="pp">props로 자식으로 인자 넘기기<br>
      <child-component  :args="args" />
      <button type="button" @click="childFunc">click</button><br>
      args: {{args}}
    </div>
</template>
<script>
  import ChildComponent from './ChildComponent6.vue';
  export default {
      components: { ChildComponent },
      data() {
        return {
          args: { name: "초기값" }
        }
      },
      methods: {
        childFunc() {
          this.args.name = "부모";
        }
      }
  }
</script>
<style scoped>
    .pp {
        width: 100%;
        height: 300px;
        background-color: cyan;
        font-weight: bold;
        border-block-width: 5px;
    }
</style>
