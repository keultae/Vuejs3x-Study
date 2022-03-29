<template>
    <div>
        <h1>HTML5 + CSS</h1>
        <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li>메뉴4</li>
        </ul>

        <div>
            <table>
                <tr>
                    <td>root</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td><div>&boxvr;</div><div>&boxh;</div></td>
                    <td>레벨1</td>
                    <td></td>
                </tr>
                <tr>
                    <td><div>&boxvr;</div><div>&boxh;</div></td>
                    <td>레벨111111</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><div>&boxvr;</div><div>&boxh;</div></td>
                    <td>레벨2</td>
                </tr>
                <tr>
                    <td></td>
                    <td><div>&boxvr;</div><div>&boxh;</div></td>
                    <td>레벨2</td>
                </tr>
                <tr>
                    <td></td>
                    <td><div>&boxvr;</div><div>&boxh;</div></td>
                    <td>레벨2</td>
                </tr>
            </table>
        </div>

        <div class="box">
            <div class="box1">박스1</div>
            <div class="box2">박스2</div>
        </div>

        <div id="wrap">
            <div class="mini-box" id="crd1">박스1</div>
            <div class="mini-box" id="crd2">박스2</div>
            <div class="mini-box" id="crd3">박스3</div>
            <div class="mini-box" id="crd4">박스4</div>
            <div class="mini-box" id="crd5">박스5</div>
        </div>

        <div id="fix"></div>
    </div>
</template>
<script>
    export default {
        name: '',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                sampleData: ''
            };
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
td > div {
    float: left;
}
td > div:nth-child(2) {
    padding-top: 1px;
}
table > tbody > tr > td:nth-child(1) {
    text-align: right;
    padding-right: 0px;
}
table > tbody > tr > td:nth-child(2), table > tbody > tr > td:nth-child(4) {
    padding-top: 3px;
    padding-left: 0px;
}
table, td {
    border: 0px solid black;
    border-collapse: collapse;
}
table td {
    text-align: left;
}

#fix {
    position: fixed;
    top: 5px;
    right: 50px;
    width: 50px;
    height: 50px;
    background: #ff6a00;
}
#wrap {
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
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
</style>