<template>
    <div>
        <input type="text" v-model="textValue1" @keyup.enter="submit" placeholder="Enter"/>
        <hr>
        <input type="text" v-model="textValue1" @keyup.alt.enter="altEnter" placeholder="Alt + Enter"/>
        <hr>
        <div @click.ctrl="doSomething">Do something</div>
        <hr>
        <input type="text" v-model="textValue1" @keyup.tab="keyupTab" placeholder="tab"/>
        <hr>
        <input type="text" v-model="textValue1" @keyup.delete="keyupDelete" placeholder="delete"/>
    </div>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                textValue1: ""
            };
        },
        methods: {
            submit() {
                if(this.textValue1 == '') {
                    alert("값을 입력하세요.");
                } else {
                    alert(this.textValue1);
                }
            },
            altEnter() {
                alert("Alt + Enter " + this.textValue1);
            },
            doSomething() {
                alert("Do something");
            },
            keyupTab() {
                alert("tab");
            },
            keyupDelete() {
                // 키보드에서 Del 키, Backspace 키
                alert("delete");
            }
        }
    }
</script>
