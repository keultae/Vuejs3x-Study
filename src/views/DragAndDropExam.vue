<template>
  <div>
    <div class='drop-zone'  @drop="onDrop($event, 1)" @dragover.prevent  @dragenter.prevent>
      <div v-for='item in listOne' :key='item.title' class='drag-el' draggable="true" @dragstart="startDrag($event, item)">
        {{ item.title }}
      </div>
    </div>
    <div class='drop-zone' @drop="onDrop($event, 2)" @dragover.prevent  @dragenter.prevent>
      <div v-for='item in listTwo' :key='item.title' class='drag-el' draggable="true" @dragstart="startDrag($event, item)">
        {{ item.title }}
      </div>
    </div>



  </div>
</template>
<script>
    export default {
        name: 'DrapAndDropExam',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                items: [
                {
                    id: 0,
                    title: 'Item A',
                    list: 1
                },
                {
                    id: 1,
                    title: 'Item B',
                    list: 1
                },
                {
                    id: 2,
                    title: 'Item C',
                    list: 2
                }],
            };
        },
        computed: {
            listOne () {
                return this.items.filter(item => item.list === 1)
            },
            listTwo () {
                return this.items.filter(item => item.list === 2)
            }
        },
        setup() {},      //컴포지션 API
        created() {},    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {
            startDrag (evt, item) {
                console.log("startDrag() itemId:" + item.id);
                evt.dataTransfer.dropEffect = 'move'
                evt.dataTransfer.effectAllowed = 'move'
                evt.dataTransfer.setData('itemID', item.id)
            },
            onDrop (evt, list) {
                console.log("onDrop()");
                const itemID = evt.dataTransfer.getData('itemID')
                console.log("\titemID:" + itemID);
                const item = this.items.find(item => item.id == itemID)
                item.list = list;
            }
        } 
    }
</script>

<style scoped>
  .drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
  }

  .drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>