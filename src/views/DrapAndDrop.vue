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
        @start="dragging=true"
        @end="dragging=false"
        ghost-class="ghost"
        :move="checkMove"
        @change="log"
        :animation="200"
      >
        <template #item="{ element, index }">
          <li class="list-group-item">
            <i class="fa fa-align-justify handle"></i>

            <span class="text">{{ element.name }} </span>

            <input type="text" class="form-control" v-model="element.text" />
            <i class="fa fa-times close" @click="removeAt(index)"></i>
          </li>
        </template>
      </draggable>
      <div>checkMove: {{moveMsg}}</div>
      <div>log: {{logMsg}}</div>
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
    draggable, rawDisplayer
  },
  data() {
    return {
      list: [
        { name: "John", text: "", text2: "", id: 0 },
        { name: "Joao", text: "", text2: "", id: 1 },
        { name: "Jean", text: "", text2: "", id: 2 }
      ],
      dragging: false,
      moveMsg: '',
      logMsg: '',
      items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function() {
      id++;
      this.list.push({ name: "Juan " + id, id, text: "" });
    },
    checkMove: function(e) {  // 호출이 안됨
      console.log("move");
      this.moveMsg = "Future index: " + JSON.stringify(e.draggedContext);
      window.console.log("Future index: " + e.draggedContext.futureIndex);
      // alert("move");
    },
    log: function(e) {  // 호출이 안됨
      console.log("log");
      this.logMsg = 'log ' +  JSON.stringify(e);
      window.console.log("log " + e);
      // alert("log");
    }
  }
};
</script>
<style scoped>


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

input {
  display: inline-block;
  width: 50%;
}

.text {
  margin: 20px;
}


.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.not-draggable {
  cursor: no-drop;
}
</style>