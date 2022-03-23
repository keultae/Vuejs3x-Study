<template>
    <div>
        <hr>
        <PageTitle v-bind:title="title"
            :age="age" 
            :isShow="isShow" 
            :idList="idList" 
            :idObj="idObj"

            :propA=1
            propB="A"
        />
        <hr>
        <ComponentC/>
        <button type="button" @click="changeTitle">타이틀 변경</button>
    </div>
</template>
<script>
    import PageTitle from '../components/PageTitle';
    import ComponentC from '../components/ComponentC';

    export default {
        components: {
            PageTitle, ComponentC
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                title: '동적 페이지 타이틀',
                age: 50,
                isShow: true,
                idList: [1, 2, 3, 4, 5],
                idObj: {id: 1, title:'Vue 3 프로젝트 투입 일주일저'}
            };
        },
        methods: {
            changeTitle() {
                this.title = "이벤트에 의해서 타이틀 변경"
            }
        }
    }
</script>
