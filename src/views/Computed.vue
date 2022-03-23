<template>
    <h1>Full Name1: {{firstName + ' ' + lastName}}</h1>
    <hr>
    <h1>Full Name2: {{getFullName()}}</h1>
    <hr>
    <h1>Full Name3: {{fullName}}</h1>
    <hr>
    <button type="button" @click="changeLastName">Click</button>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                firstName: "Seungwon",
                lastName: "Go"
            };
        },
        methods: {
            getFullName() {
                return this.firstName + ' ' + this.lastName;
            },
            changeLastName() {
                this.lastName = "New";
            }
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    }
</script>
