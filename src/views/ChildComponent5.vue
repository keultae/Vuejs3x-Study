<template>
    <div class="container">ChildComponent5<br>
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
            this.msg = "CHILD CLICK";
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