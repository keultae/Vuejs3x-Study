<template>
  <div class="row">
    <div class="col-1">
      <button class="btn btn-secondary button" @click="add">Add</button>
    </div>

    <div class="col-7">
      <h3>Draggable {{ draggingInfo }}</h3>

      <draggable
        tag="ul"
        :list="list"
        class="list-group"
        handle=".handle"
        item-key="name"
        @start="dragging = true"
        @end="dragging = false"
        ghost-class="ghost"
        :move="checkMove"
        @change="log"
        :animation="200"
        group="people"
      >
        <template #item="{ element, index }">
          <li class="list-group-item">
            <i class="fa fa-align-justify handle"></i>

            <span
              class="stext"
              @click="clickId(index)"
              v-bind:class="{ edit_false: element.edit }"
              ref="stext"
              >{{ element.name }}</span
            >
            <!-- 아래 input 태그에 v-model="element.name"을 지정하면 한 글자 입력시 span이 보이지 않지만 랜더링 되면서 포커스를 읽음 -->
            <input
              type="itext"
              class="fname form-control"
              v-model="element.name2"
              v-bind:class="{ edit_false: element.edit == false }"
              @keyup.enter="enter1(index)"
              ref="fname"
            />

            <input
              type="text"
              class="ftext form-control"
              v-model="element.text"
            />
            <i class="fa fa-times close" @click="removeAt(index)"></i>
          </li>
        </template>
      </draggable>
      
      <hr>

      <draggable
        tag="ul"
        :list="list2"
        class="list-group"
        handle=".handle"
        item-key="name"
        @start="dragging = true"
        @end="dragging = false"
        ghost-class="ghost"
        :move="checkMove"
        @change="log"
        :animation="200"
        group="people"
      >
        <template #item="{ element, index }">
          <li class="list-group-item">
            <i class="fa fa-align-justify handle"></i>

            <span
              class="stext"
              @click="clickId(index)"
              v-bind:class="{ edit_false: element.edit }"
              ref="stext"
              >{{ element.name }}</span
            >
            <!-- 아래 input 태그에 v-model="element.name"을 지정하면 한 글자 입력시 span이 보이지 않지만 랜더링 되면서 포커스를 읽음 -->
            <input
              type="itext"
              class="fname form-control"
              v-model="element.name2"
              v-bind:class="{ edit_false: element.edit == false }"
              @keyup.enter="enter1(index)"
              ref="fname"
            />

            <input
              type="text"
              class="ftext form-control"
              v-model="element.text"
            />
            <i class="fa fa-times close" @click="removeAt(index)"></i>
          </li>
        </template>
      </draggable>


      <div>checkMove: {{ moveMsg }}</div>
      <div>log: {{ logMsg }}</div>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script>
let id = 3;
import draggable from "vuedraggable";
import rawDisplayer from "@/components/raw-displayer.vue";

export default {
  name: "handle",
  display: "Handle",
  instruction: "Drag using the handle icon",
  order: 5,
  components: {
    draggable,
    rawDisplayer,
  },
  data() {
    return {
      list: [
        { name: "John", name2: "", text: "", id: 0, edit: false },
        { name: "Joao", name2: "", text: "", id: 1, edit: false },
        { name: "Jean", name2: "", text: "", id: 2, edit: false },
      ],
      list2: [
        { name: "John", name2: "", text: "", id: 0, edit: false },
        { name: "Joao", name2: "", text: "", id: 1, edit: false },
        { name: "Jean", name2: "", text: "", id: 2, edit: false },
      ],
      dragging: false,
      moveMsg: "",
      logMsg: "",
      // items: [
      //   { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      //   { age: 21, first_name: "Larsen", last_name: "Shaw" },
      //   { age: 89, first_name: "Geneva", last_name: "Wilson" },
      //   { age: 38, first_name: "Jami", last_name: "Carney" },
      // ],
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    },
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function () {
      id++;
      this.list.push({ name: "Juan " + id, id, text: "" });
    },
    checkMove: function (e) {
      // 호출이 안됨
      console.log("move");
      this.moveMsg = "Future index: " + JSON.stringify(e.draggedContext);
      window.console.log("Future index: " + e.draggedContext.futureIndex);
      // alert("move");
    },
    log: function (e) {
      // 호출이 안됨
      console.log("log");
      this.logMsg = "log " + JSON.stringify(e);
      window.console.log("log " + e);
      // alert("log");
    },
    clickId(index) {
      this.list[index].edit = true;
      console.log("clickId(" + index + ")");
      
      // var name = document.getElementById("fname");
      // name.value = this.list[index].name;
      this.list[index].name2 = this.list[index].name;
      
      this.$refs.fname.focus();

    },
    enter1(index) {
      this.list[index].edit = false;
      
      // var name = document.getElementById("fname");
      // this.list[index].name = name.value;

      this.list[index].name = this.list[index].name2;
      console.log("enter(" + index + ")");

    },
  },
};
</script>
<style scoped>
.stext {
  float: left;
  margin: 5px 15px;
  width: 100px;
  text-align: left;
  /* background: cyan; */
}

input.fname {
  float: left;
  margin: 0px 15px;
  width: 100px;
  /* display: inline-block; */
}
/* input.text1:blur {
  display: none;
} */

input.ftext {
  float: left;
  display: inline-block;
  width: calc(100% - 172px);
}

.edit_true {
  display: inline-block;
}
.edit_false {
  display: none;
}

.fa-align-justify {
  /* visibility: hidden; 으로 하면 마우스 커서를 올렸을때, 인식이 안돼서 효과를 줄 수 없어서 컬러를 배경과 동일하게 설정 */
  color: white;
}

.fa-align-justify:hover {
  /* outline: 3px solid orange; */
  color: black;
}

.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}

.button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}

.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.not-draggable {
  cursor: no-drop;
}
</style>
