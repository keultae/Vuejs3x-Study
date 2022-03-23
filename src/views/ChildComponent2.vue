<template>
    <div class="container">ChildComponent2<br>
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
            this.msg = "부모 컴포넌트에서 직접 호출한 함수";
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