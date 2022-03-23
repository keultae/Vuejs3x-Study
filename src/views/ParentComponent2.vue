<template>
    <div class="pp">ParentComponent2<br>
      <child-component ref="child_component" />
      <button type="button" @click="parentFunc">parent click</button>
    </div>
</template>
<script>
    import ChildComponent from './ChildComponent2.vue';
    export default {
        components: { ChildComponent },
        methods: {
          parentFunc() {
            this.$refs.child_component.childFunc();
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
