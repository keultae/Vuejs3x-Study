<template>
    <div class="d-group">
      <div class="d-title">
        <!-- <div> -->
          <input class="form-control" type="text" value="그룹 제목" />
        <!-- </div> -->
      </div>
      <div class="d-body">
        <div class="d-row">
          <div class="d-icon"><i class="fas fa-chevron-right"></i></div>
          <div class="d-text">내용1</div>
          <div class="d-author"><input type="text" value="홍길동" /></div>
          <div class="d-created">2022-04-17 23:39</div>
        </div>

        <div class="d-row">
          <div class="d-icon"><i class="fas fa-chevron-right"></i></div>
          <div class="d-text">내용1</div>
          <div class="d-author"><input type="text" value="홍길동" /></div>
          <div class="d-created">2022-04-17 23:39</div>
        </div>
      </div>
    </div>

</template>
<script>
    export default {
        name: 'DevNotion',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                sampleData: ''
            };
        },
        setup() {},      //컴포지션 API
        created() {},    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {}      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>

<style scoped>
.d-group {
  /* position: relative; */
  /* width: 500px; */
  /* height: 500px; */
  border: 1px solid black;
  margin: 20px 20px;
  border-radius: 5px;
  padding: 5px 5px;
}
.d-title {
  position: relative;
  border: 1px solid black;
  left: 10px;
  top: -24px;
  background: cyan;
  border-radius: 5px;
  width: 300px;
}
.d-body {
    border: 1px solid red;
    top: 20px;
    /* position: absolute; */
    width: 100%;
    padding: 5px;
}

.d-body > .d-row {
  /* border: 1px solid blue; */
  margin-bottom: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.d-body > .d-row > .d-icon {
  flex: 0 0 auto;
}
.d-body > .d-row > .d-icon > i {
    margin-left: 5px;
    width: 16px;
}
.d-body > .d-row > .d-text {
  flex: 0 1 auto;
  width: 100%;
  background: cyan;
  margin-left: 5px;
}
.d-body > .d-row > .d-author {
  flex: 0 0 auto;
  width: 60px;
  margin-left: 5px;
}
.d-body > .d-row > .d-author > input {
  width: 100%;
  border: 0px;
}
.d-body > .d-row > .d-created {
  flex: 0 0 auto;
  width: 150px;
}
.d-body > .d-row:nth-child(2) {
  margin-left: 20px;
}


</style>