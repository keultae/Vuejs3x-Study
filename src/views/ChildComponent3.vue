<template>
    <div class="container">ChildComponent3<br>
    msg: {{msg}}
    </div>
</template>
<script>
    export default {
        data() {
          return {
            msg: 'EMPTY'
          };
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