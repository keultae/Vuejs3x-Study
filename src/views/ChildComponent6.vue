<template>
    <div class="container">자식<br>
    <button type="button" @click="childFunc">click</button>
    <hr>
    args: {{args}}
    </div>
</template>
<script>
    export default {
        data() {
          return {
            // msg: 'CHILD'
          };
        },
        props: {
          args: { type: Object }
        },
        methods: {
          childFunc() {
            // eslint-disable-next-line vue/no-mutating-props
            this.args.name = "자식";
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