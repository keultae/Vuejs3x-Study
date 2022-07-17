<template>
  <div class="line" v-bind:class="{'line-selected': node.idx == tree_selected.idx}">
      <template v-if="node.level > 1">
          <div class="micro-box">
              <div class="micro-box-lt"></div> <div class="micro-box-rt"></div>
              <div class="micro-box-lb"></div> <div v-bind:class="{'micro-box-rb-bar': node.level >= 3, 'micro-box-rb': node.level < 3 }"></div>
          </div>
      </template>
      
      <template v-if="node.level > 2">
          <div class="micro-box">
              <div class="micro-box-lt"></div> <div class="micro-box-rt"></div>
              <div class="micro-box-lb"></div> <div v-bind:class="{'micro-box-rb-bar': node.level >= 4, 'micro-box-rb': node.level < 4 }"></div>
          </div>
      </template>

      <template v-if="node.level > 3">
          <div class="micro-box">
              <div class="micro-box-lt"></div><div class="micro-box-rt"></div>
              <div class="micro-box-lb"></div><div class="micro-box-rb"></div>
          </div>
      </template>
      <div class="micro-box-icon"><i @click="clickIcon" class="fa-solid" v-bind:class="{'fa-folder-open': node.type == 'folder' && node.fold == false, 'fa-folder-closed': node.type == 'folder' && node.fold == true, 'fa-note-sticky': node.type == 'text'}"></i></div>
      <div class="micro-box-text"><span @click="clickText">{{node.text}}</span></div>                
  </div> 
</template>

<script>
    export default {
        name: 'TreeMenuNode',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                // sampleData: ''
            };
        },
        props: {
          node: {type: Object},
          tree_selected: {type: Object},
          idx: {type: String}
        },
        setup() {},      //컴포지션 API
        created() {
          // eslint-disable-next-line vue/no-mutating-props
          this.node.idx = this.idx;
        },    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {
          clickIcon() {
            // eslint-disable-next-line vue/no-mutating-props
            this.node.fold = !this.node.fold;
          },
          clickText() {
            // eslint-disable-next-line vue/no-mutating-props
            this.tree_selected.level = this.node.level;
            // eslint-disable-next-line vue/no-mutating-props
            this.tree_selected.type = this.node.type;
            // eslint-disable-next-line vue/no-mutating-props
            this.tree_selected.text = this.node.text;
            
            // eslint-disable-next-line vue/no-mutating-props
            this.tree_selected.idx = this.idx;
          }
        }      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>

<style scoped>
.line:hover {
    border: 2px dotted red;
    border-radius: 3px;
}
.line {
    height: 26px;
    margin-top: 2px;
    margin-bottom: 2px;
    /* border: 1px solid blue; */
}
.line-selected {
  background: orange;
  border-radius: 3px;
}

.micro-box {
    float: left;
    position: relative;
    width: 24px;
    height: 24px;
    /* background: cyan; */
}
.micro-box-lt {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 12px;
    height: 12px;
    /* background: red; */
}
.micro-box-rt {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 12px;
    height: 12px;
    border-left: 1px dashed black;
}
.micro-box-lb {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 12px;
    height: 12px;
}
.micro-box-rb {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 12px;
    height: 12px;
    /* background: green; */
    border-left: 1px dashed black;
    border-top: 1px dashed black;
}
.micro-box-rb-bar {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 12px;
    height: 12px;
    /* background: green; */
    border-left: 1px dashed black;
}

.micro-box-icon {
    float: left;
    position: relative;
    width: 24px;
    height: 24px;
    /* background: yellow; */
}
.micro-box-icon > i {
    position: absolute;
    left: 5px;
    top: 4px;
}
.micro-box-icon > i.fa-folder-open, .micro-box-icon > i.fa-folder-closed {
  cursor: pointer;
}

.micro-box-text {
    float: left;
    position: relative;
    width: calc(100% - 100px);
    height: 24px;
}
.micro-box-text > span {
    position: absolute;
    left: 1px;
    top: 0px;
    font-size: medium;
    /* background: cyan;  */
    display: inline-block;
    text-overflow: ellipsis;
    width:100%;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
}
</style>