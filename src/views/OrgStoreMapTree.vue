<template>
  <div>
    <vue3-tree-vue :items="getOrgs"
      :isCheckable="false"
      :hideGuideLines="false"
      v-model:selectedItem="selectedItem"
      :expandAll="true"
      style="width: 200px; display: block; border-right: 1px solid gray">
      <template v-slot:item-prepend-icon="treeViewItem" >
          <img src="@/assets/folder.svg" alt="folder" 
              v-if="treeViewItem.type === 'group'"
              height="20" width="20">
          <img src="@/assets/folder.svg"
              v-if="treeViewItem.type === 'bonbu'"
              height="20" width="20">
          <img src="@/assets/folder.svg"
              v-if="treeViewItem.type === 'team'"
              height="20" width="20">
      </template>
      <!-- <template v-slot:item-prepend>
        <div style="background: blue; height: 18px; width: 18px; margin-right: 0.2em" ></div>
      </template> -->
    </vue3-tree-vue>    
  </div>
</template>
<script>
  import Vue3TreeVue from 'vue3-tree-vue';
  import 'vue3-tree-vue/dist/style.css'
  // vuex 라이브러리에서 mapActions, mapGetters 함수를 가져옵니다.
  import { mapActions, mapGetters } from 'vuex'

  export default {
      components: { Vue3TreeVue },
      data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
          return {
              selectedItem: null
          };
      },
      computed: {
        ...mapGetters('OrgStoreTree', ['getOrgs']),

        // ...mapGetters('OrgStoreTree', ['getSelectedItem']),
        ...mapGetters(['OrgStoreTree/getSelectedItem'])
      },
      watch: {
        selectedItem() {
          if(this.selectedItem != null) {
            // this.$store.dispatch("OrgStoreTree/actSelectedItem", { "id": this.selectedItem.id, "type": this.selectedItem.type})
            // this.actSelectedItem({ "id": this.selectedItem.id, "type": this.selectedItem.type})
            this['OrgStoreTree/actSelectedItem']({ "id": this.selectedItem.id, "type": this.selectedItem.type})
          }
        }
      },
      setup() {},      //컴포지션 API
      created() {      //컴포넌트가 생성되면 실행
        // this.selectedItem = this.$store.getters["OrgStoreTree/getSelectedItem"]
        // this.selectedItem = this.getSelectedItem
        this.selectedItem = this['OrgStoreTree/getSelectedItem']

        // this.$store.dispatch("OrgStoreTree/actOrgs")
        this.actOrgs()
      },    
      mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
      unmounted() {},  //unmount가 완료된 후 실행
      methods: {
        ...mapActions('OrgStoreTree', ['actOrgs']),
        // ...mapActions('OrgStoreTree', ['actSelectedItem']),
        ...mapActions(['OrgStoreTree/actSelectedItem'])
      }
  }
</script>

<style scoped>
* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
}
</style>