<template>
    <div class="container">ChildComponent<br>
    <button type="button" @click="childFunc" ref="btn">click</button>
    <hr>
    msg: {{msg}}
    </div>
</template>
<script>
    export default {
        data() {
          return {
            msg: 'EMPTY'
          };
        },
        methods: {
          childFunc() {
            this.msg = "부모 컴포넌트에서 직접 발생시킨 이벤트";
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