<template>
    <div>
        <img v-bind:src="imgSrc"/>
    </div>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                imgSrc: 'https://kr.vuejs.org/images/logo.png'
            };
        }
    }
</script>
