<template>
    <div>
        <h1>Diff Viewer</h1>
        <hr>
        <vue-diff 
            mode='split'
            theme='light'
            language='plaintext'
            :prev="prev1"
            :current="current1"
        />
    </div>
</template>
<script>
    import VueDiff from 'vue-diff'
    import 'vue-diff/dist/index.css'

    export default {
        name: '',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
            VueDiff
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                prev: {
                    "name": "vue-diff",
                    "version": "0.0.0",
                    "description": "Vue diff viewer",
                    "private": true,
                    "peerDependencies": {
                        "vue": "^3.0.0"
                    }
                },
                prev1: 'var a1 = {                    "name": "vue-diff",                    "version": "0.0.0",                    "description": "Vue diff viewer",                    "private": true,                    "peerDependencies": {                        "vue": "^3.0.0"                    }                    }',
                current: {
                    "name": "vue-diff",
                    "version": "1.0.0",
                    "description": "Vue diff viewer",
                    "scripts": {
                        "test": "vue-cli-service test:unit",
                        "lint": "vue-cli-service lint"
                    },
                    "peerDependencies": {
                        "vue": "^3.0.0"
                    }
                },
                current1: 'const b2 = {  "name": "vue-diff",  "version": "1.0.0",  "description": "Vue diff viewer",  "scripts": {    "test": "vue-cli-service test:unit"    "lint": "vue-cli-service lint"  },  "peerDependencies": {    "vue": "^3.0.0"  }}'                
            };
        },
        computed: {
            prevString() {
                console.log("PREV=" + JSON.stringify(this.prev));
                return JSON.stringify(this.prev);
            },
            currentString() {
                console.log("CURRENT=" + JSON.stringify(this.current));
                return JSON.stringify(this.current);
            }
        },
        setup() {},      //컴포지션 API
        created() {
        },    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {}      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>
<style scoped>
#container {
    display: flex;
    /* flex-direction: column; */
    width: 600px;
    background: gray;
    /* flex-wrap: wrap; */
}
#container div {
    display: flex;
    width: 200px;
    border: 1px solid black;
    background: #ccc;
}
#container span {
    background: yellow;
}
#box1 {
    flex: 1 1 0;
}
#box2 {
    flex: 2 2 0;
}
#box3 {
    flex: 1 1 0;
}

ul > li {
    float: left;
    border: solid black 1px;
    padding: 10px 20px;
    margin: 10px;
}

.box {
    background-color: azure;
    width: 500px;
    height: 500px;
    border: 1px solid #ccc;
    display: inline-block;
}
.box1 {
    float: left;
    width: 100px;
    background-color: #ffd800;
    margin-right: 10px;
    padding: 20px;
}
.box2 {
    float: left;
    position: relative;
    left: -50px;
    top: 30px;
    width: 300px;
    background-color: #0094ff;
    padding: 20px;
}


#wrap {
    position: relative;
    width: 250px;
    height: 250px;
    border: 1px solid #ccc;
    display: inline-block;
    margin-left: 20px;
}

.mini-box {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #0094ff;
}
#crd1 { top:0; left: 0;}
#crd2 { top:0; right: 0;}
#crd3 { bottom:0; left: 0;}
#crd4 { bottom:0; right: 0;}
#crd5 { top:100px; left: 100px;}


#fix {
    position: fixed;
    top: 270px;
    right: 50px;
    width: 50px;
    height: 50px;
    background: #ff6a00;
}

.vue-diff-theme-custom {
  @import 'highlight.js/scss/vs2015.scss';
  background-color: #000;
}
</style>
