<template>
    <div class="container">ChildComponent4<br>
    <button type="button" @click="childFunc">click</button>
    <hr>
    msg: {{msg}}
    </div>
</template>
<script>
    export default {
        data() {
          return {
            msg: 'CHILD'
          };
        },
        methods: {
          childFunc() {
            this.$emit('custom-event', this.msg);
          }
        }
    }
</script>
<style scoped>
    .container {
        width: 100%;
        height: 150px;
        background-color: yellow;
        font-weight: bold;
    }
</style>