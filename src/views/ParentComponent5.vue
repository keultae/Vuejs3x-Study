<template>
    <div class="pp">ParentComponent5<br>
      <child-component ref="child_component" />
      msg1: {{msg1}}
    </div>
</template>
<script>
    import ChildComponent from './ChildComponent5.vue';
    export default {
        components: { ChildComponent },
        computed: {
          msg1() {
            // vue 3.0.0에서 msg를 찾지 못함
            return this.$refs.child_component.msg;
          }
        }
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
