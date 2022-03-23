<template>
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
    </div>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                selectedValue: ""
            };
        },
        methods: {
            changeSelect() {
                alert(this.selectedValue);
            }
        }
    }
</script>
