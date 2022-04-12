<template>
    <div>
        <h1>HTML5 + CSS</h1>
        <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li>메뉴4</li>
        </ul>

        <hr>

        <div class="box">
            <div class="box1">박스1</div>
            <div class="box2">박스2 width:{{width}}, height:{{height}}</div>
        </div>

        <div id="wrap">
            <div class="mini-box" id="crd1">박스1</div>
            <div class="mini-box" id="crd2">박스2</div>
            <div class="mini-box" id="crd3">박스3</div>
            <div class="mini-box" id="crd4">박스4</div>
            <div class="mini-box" id="crd5">박스5</div>
        </div>

        <div id="fix"></div>

        <div class="container" @click.stop="click1">
            <div class="text1" @click.stop ref="text1"> {{text1}} </div>
            <div class="text2" :style="{left:leftX, top:topY, width:width, height:height}" ><input type="text" vlaue="입력`123" @click.stop /></div>
            <div class="text3" @click.stop="click3($event, 'text3')" ref="text3">TEXT3</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                text1: 'INIT',
                leftX: '200px',
                topY: '100px',
                width: '50px',
                height: '30px'
            };
        },
        setup() {},      //컴포지션 API
        created() {
        },    //컴포넌트가 생성되면 실행
        mounted() {
            window.addEventListener('resize', this.handleResize);

            // this.$refs.text1를 출력하면 HTMLDivElement라고 찍힌다. 
            // HTMLElement를 상속 받는데, HTMLElement 속성에 left, top, width, height 속성이 있어서 해당 값을 사용할 수 있다.
            // https://developer.mozilla.org/ko/docs/Web/API/HTMLDivElement
            // https://developer.mozilla.org/ko/docs/Web/API/HTMLElement
            this.text1 = this.$refs['text1'].offsetTop + "px";

            this.topY = this.$refs.text1.offsetTop + "px";
        },    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {
            click1(event) {
                this.text1 = "offsetX:" + event.offsetX + ", offsetY:" + event.offsetY + 
                ", clientX:" + event.clientX + ", clientY:" + event.clientY +
                ", pageX:" + event.pageX + ", pageY:" + event.pageY;

                this.leftX = event.offsetX + "px";
                this.topY = event.offsetY + "px";
            },
            handleResize() {
                // 개발자 모드에서 브라우저 크기를 조절하면 브라우저 내부 우측 상단에 크기가 나오는데, 해당 값과 동일
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            },
            click3(event, name) {
                this.leftX = (this.$refs[name].offsetLeft - 1) + "px";
                this.topY = (this.$refs[name].offsetTop - 1) + "px";
                this.width = this.$refs[name].offsetWidth + "px";
                this.height = this.$refs[name].offsetHeight + "px";
            }
        }      // 컴포넌트 내에서 사용할 메소드 정의
    }

// offsetX : 객체 내의 마우스 X좌표
// offsetY : 객체 내의 마우스 Y좌표
// pageX : 웹 브라우저 기준 X좌표
// pageY : 웹 브라우저 기준 Y좌표
// screenX : 화면상 기준 X좌표
// screenY : 화면상 기준 Y좌표

</script>
<style scoped>
.container {
    background: aliceblue;
    width: 500px;
    height: 500px;
    position: relative;
    padding: 0px 0px;
}

.container .text1 {
    position: absolute;
    left: 10px;
    top: 300px;
    width: 200px;
    height: 100px;
    border: 1px solid blue;
}

.container .text2 {
    position: absolute;
    /* left: 100px;
    top: 100px; */
    /* width: 200px; */
    /* height: 100px; */
    border: 1px solid blue;
    z-index: 10;
}
.container .text2 input {
    width: 100%;
}

.container .text3 {
    position: absolute;
    left: 100px;
    top: 10px;
    border: 1px solid blue;
    width: 100px;
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
</style>