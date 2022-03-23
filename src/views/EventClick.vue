<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button> 
        <button type="button" @click="setCount(7)">Set 7</button>
        <button type="button" @click="one(), two()">여러개 함수 호출</button>
        <p>The Counter is : {{counter}} </p>
    </div>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                counter: 0
            };
        },
        methods: {
            increaseCounter() {
                this.counter = this.counter + 1;
            },
            setCount(counter) {
                this.counter = counter;
            },
            one() {
                alert('One');
            },
            two() {
                alert('Two');
            }
        }
    }
</script>
