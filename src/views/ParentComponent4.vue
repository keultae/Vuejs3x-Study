<template>
    <div class="pp">ParentComponent4<br>
      <child-component @custom-event="parentFunc" />
      msg: {{msg}}
    </div>
</template>
<script>
    import ChildComponent from './ChildComponent4.vue';
    export default {
        components: { ChildComponent },
        data() {
          return {
            msg: 'PARENT'
          }
        },
        methods: {
          parentFunc(data) {
            this.msg = data;
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
