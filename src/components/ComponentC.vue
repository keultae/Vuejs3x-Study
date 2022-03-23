<template>
    <h2>Component C {{sampleData}}</h2>
    <ComponentA/>
    <ComponentB/>
</template>
<script>
    import ComponentA from './ComponentA'
    import ComponentB from './ComponentB'

    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                sampleData: 'sample data'
            };
        },
        components: {
            ComponentA, ComponentB
        }
    }
</script>