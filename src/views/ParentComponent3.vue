<template>
    <div class="pp">ParentComponent3<br>
      <child-component ref="child_component" />
      <button type="button" @click="parentFunc">parent click</button>
    </div>
</template>
<script>
    import ChildComponent from './ChildComponent3.vue';
    export default {
        components: { ChildComponent },
        methods: {
          parentFunc() {
            this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
          }
        },
    }
</script>
<style scoped>
    .pp {
        width: 100%;
        height: 200px;
        background-color: cyan;
        font-weight: bold;
        border-block-width: 5px;
    }
</style>
