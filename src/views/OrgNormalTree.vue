<template>
    <div>
      <vue3-tree-vue :items="orgs"
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
    
    export default {
        components: { Vue3TreeVue },
        props: {
          // props에 selectedItem를 선언하면 에러 발생
          //    error  Unexpected mutation of "selectedItem" prop  vue/no-mutating-props
          // selectedItem: { type: Object},
          orgs: { type: Array },
          initSelectedItem: { type: Object}
        }, 
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                selectedItem: null,
            };
        },
        watch: {
          selectedItem() {
            console.log("OrgNormalTree > selectedItem()")
            this.$emit("custom-event", { id: this.selectedItem.id })
          }
        },
        setup() {},      //컴포지션 API
        created() {
          this.selectedItem = this.initSelectedItem
        },    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {}      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>
