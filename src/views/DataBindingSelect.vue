<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="01">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                city: "064"
            };
        }
    }
</script>
