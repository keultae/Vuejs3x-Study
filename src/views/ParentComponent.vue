<template>
    <div class="pp">ParentComponent<br>
      <child-component ref="child_component" />
      <button type="button" @click="parentFunc">parent click</button>
    </div>
</template>
<script>
    import ChildComponent from './ChildComponent.vue';
    export default {
        components: { ChildComponent },
        methods: {
          parentFunc() {
            this.$refs.child_component.$refs.btn.click();
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
