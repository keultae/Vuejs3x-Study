<template>
  <div class="row">
    <div class="col-3 body">
      <h1>TreeMenu 예제</h1>
      <div class="tree_selected">tree_selected: {{ this.args.tree_selected }}</div>
      <tree-menu 
        :args="args"
      />
    </div>
    <rawDisplayer class="col-9" :value="this.args.tree_list" title="tree_list" />
  </div>
</template>

<script>
import TreeMenu from "@/views/TreeMenu/TreeMenu.vue";
import rawDisplayer from "@/components/raw-displayer.vue";

export default {
  name: "TreeMenuTest", //컴포넌트 이름
  components: {
    //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
    TreeMenu,
    rawDisplayer,
  },
  data() {
    //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      args: {
        class: "tree-menu",
        tree_selected: { level: 0, type: null, text: null, idx: null },
        tree_list: [
          {
            level: 1,
            type: "folder",
            text: "루트",
            fold: false,
            idx: null,
            children: [
              {
                level: 2,
                type: "folder",
                text: "폴더",
                fold: false,
                idx: null,
                children: [
                  { level: 3, type: "text", text: "텍스트1", idx: null },
                  { level: 3, type: "text", text: "텍스트2", idx: null },
                  {
                    level: 3,
                    type: "folder",
                    text: "폴더",
                    fold: false,
                    idx: null,
                    children: [
                      {
                        level: 4,
                        type: "text",
                        text: "텍스트1 텍스트1 텍스트1 텍스트1 텍스트1 텍스트1 텍스트1 텍스트1 텍스트1 end",
                        idx: null,
                      },
                      { level: 4, type: "text", text: "텍스트2", idx: null },
                    ],
                  },
                ],
              },
              {
                level: 2,
                type: "folder",
                text: "폴더",
                fold: false,
                idx: null,
                children: [
                  { level: 3, type: "text", text: "텍스트1", idx: null },
                  { level: 3, type: "text", text: "텍스트2", idx: null },
                  {
                    level: 3,
                    type: "folder",
                    text: "폴더",
                    fold: false,
                    idx: null,
                    children: [
                      { level: 4, type: "text", text: "텍스트1", idx: null },
                      { level: 4, type: "text", text: "텍스트2", idx: null },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
  setup() {}, //컴포지션 API
  created() {}, //컴포넌트가 생성되면 실행
  mounted() {}, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {}, //unmount가 완료된 후 실행
  methods: {}, // 컴포넌트 내에서 사용할 메소드 정의
};
</script>
<style scoped>
.body {
  border-right: 1px solid black;
}
.tree-menu {
  width: 300px;
  border: 1px solid blue;
  margin: 10px;
}

.tree_selected {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
