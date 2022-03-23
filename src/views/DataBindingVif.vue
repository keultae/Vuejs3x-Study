<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
        <hr>
        <h1 v-show="bShow">bShow가 true이면, 현재 블록이 화면에 보이게 됩니다.</h1>
        <hr>
    </div>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                type: 'A',
                bShow: true
            };
        }
    }
</script>
