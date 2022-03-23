<template>
    <h2>Component B {{sampleData}}</h2>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                sampleData: 'sample data'
            };
        }
    }
</script>