<template>
<!--  -->
  <div class="main">
    
    <div>
      <ul>
        <li><a href="https://developer.mozilla.org/ko/docs/web/css/css_flexible_box_layout/basic_concepts_of_flexbox" target="_blank">flexbox의 기본 개념</a></li>
        <li><a href="https://heropy.blog/2018/11/24/css-flexible-box/" target="_blank">CSS Flex(Flexible Box) 완벽 가이드</a></li>
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">A Complete Guide to Flexbox</a></li>
      </ul>
    </div>

    <div class="box">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
    </div>

    <div class="box1">
      <div class="one1">One</div>
      <div class="two1">Two</div>
      <div class="three1">Three
        <br>has
        <br>extra
        <br>text
      </div>
    </div>

    <div class="box2" :key="i" v-for="(item, i) in [1, 2, 3, 4, 5]">
      <div class="one2">One</div>
      <div class="two2"><input text="text" value="Input 1"/></div>
      <div class="two22"><input text="text" value="Input 2"/></div>
      <div class="three2"><button>OK</button></div>
      <div class="four2">Three</div>
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
.main {
  padding: 10px;
}

.box2 {
  display: flex;
  width: 600px;
  /* height: 130px; */
  background: silver;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 5px 0px;
  align-items: center;
  justify-content: flex-start;
}
.one2 {
  background: orange;
  flex: 0 1 auto;
}
.two2 {
  background: yellow;
  width: 100px;
  flex: 0 1 auto;
}
.two2 input {
  width: 100%;
}
.two22 {
  background: yellow;
  width: 200px;
  flex: 1 1 auto;
}
.two22 input {
  width: 100%;
}
.three2 {
  background: lime;
  flex: 0 1 auto;
}
.four2 {
  background: lime;
  /* flex: 0 1 auto; */
}

.box1 {
  display: flex;
  width: 500px;
  height: 130px;
  /* border: 1px dotted blue; */
  background: cyan;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: flex-start;
  justify-content: space-between;
}
.one1 {
  background: orange;
}
.two1 {
  background: yellow;
}
.three1 {
  background: green;
}


.box {
  display: flex;
  width: 600px;
  height: 200px;
  /* border: 1px dotted blue; */
  background: gray;
  padding-top: 10px;
}

.box div {
  /* border: 1px solid black; */
  width: 100px;
  height: 50px;
}

.one {
  flex: 1 2 auto;
  background: orange;
}
.two {
  flex: 1 1 auto;
  flex-shrink: 1;
  background: yellow;
}
.three {
  flex: 1 1 auto;
  background: green;
}

</style>