<template>
   <div style="display: block">
     <h1>조직도</h1>
      <hr>
      <div style="display: flex">
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

        <div style="max-width: 600px">
          <div style="margin: 0.4em">
           selectedItem id:{{ selectedItem?.id }}, type:{{ selectedItem?.type }}
          </div>
          <div style="margin: 0.4em">
            <table border="1">
              <thead>
                <tr>
                  <th>no</th>
                  <th>org_id</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="i" v-for="(member, i) in selectedMember">
                    <td>{{i+1}}</td>
                    <td>{{member.org_id}}</td>
                    <td>{{member.name}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import Vue3TreeVue from 'vue3-tree-vue';
import 'vue3-tree-vue/dist/style.css'

export default {  
  components: { Vue3TreeVue },
  data() {
    return {
      selectedItem: {"id":"NLP-AIBUSIN", "type":"bonbu"},
      orgs: [
        {
          "name": "검색그룹",
          "id": "SEARCH",
          "type": "group"
        },
        {
          "name": "NLP그룹",
          "id": "NLP",
          "type": "group",
          "children": [
            {
              "name": "기반기술본부",
              "id": "NLP-BASETECH",
              "type": "bonbu"
            },
            {
              "name": "빅데이터본부",
              "id": "NLP-BIGDATA",
              "type": "bonbu"
            },
            {
              "name": "AI사업본부",
              "id": "NLP-AIBUSIN",
              "type": "bonbu",
              "children": [
                  {
                    "name": "영업팀",
                    "id": "NLP-AIBUSIN-SALES",
                    "type": "team"
                  },
                  {
                    "name": "AI1팀",
                    "id": "NLP-AIBUSIN-AI1",
                    "type": "team"
                  },
                  {
                    "name": "AI2팀",
                    "id": "NLP-AIBUSIN-AI2",
                    "type": "team"
                  },
                  {
                    "name": "AI3팀",
                    "id": "NLP-AIBUSIN-AI3",
                    "type": "team"
                  },
                  {
                    "name": "AI4팀",
                    "id": "NLP-AIBUSIN-AI4",
                    "type": "team"
                  },
                  {
                    "name": "AI5팀",
                    "id": "NLP-AIBUSIN-AI5",
                    "type": "team"
                  },
                  {
                    "name": "AI6팀",
                    "id": "NLP-AIBUSIN-AI6",
                    "type": "team"
                  },
                  {
                    "name": "AI7팀",
                    "id": "NLP-AIBUSIN-AI7",
                    "type": "team"
                  },
                  {
                    "name": "AI8팀",
                    "id": "NLP-AIBUSIN-AI8",
                    "type": "team"
                  }
                ]
            },
          ]
        },
        {
          "name": "AI그룹",
          "id": "AI",
          "type": "group"
        },
        {
          "name": "공용그룹",
          "id": "COMMON",
          "type": "group"
        }
      ],
      members: [
        { "org_id": "SEARCH", "name": "검색 그룹장"},
        
        { "org_id": "NLP", "name": "NLP 그룹장"},
        { "org_id": "NLP-BASETECH", "name": "NLP 기반기술 본부장"},
        { "org_id": "NLP-BIGDATA", "name": "NLP 빅데이터 본부장"},
        { "org_id": "NLP-AIBUSIN", "name": "NLP AI사업 본부장"},
        { "org_id": "NLP-AIBUSIN-SALES", "name": "NLP AI사업 본부 영업 팀장"},
        { "org_id": "NLP-AIBUSIN-AI1", "name": "NLP AI사업 본부 AI1 팀장"},
        { "org_id": "NLP-AIBUSIN-AI2", "name": "NLP AI사업 본부 AI2 팀장"},
        { "org_id": "NLP-AIBUSIN-AI3", "name": "NLP AI사업 본부 AI3 팀장"},
        { "org_id": "NLP-AIBUSIN-AI4", "name": "NLP AI사업 본부 AI4 팀장"},
        { "org_id": "NLP-AIBUSIN-AI5", "name": "NLP AI사업 본부 AI5 팀장"},
        { "org_id": "NLP-AIBUSIN-AI6", "name": "NLP AI사업 본부 AI6 팀장"},
        { "org_id": "NLP-AIBUSIN-AI7", "name": "NLP AI사업 본부 AI7 팀장"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀장"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원1"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원2"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원3"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원4"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원5"},

        { "org_id": "AI", "name": "AI 그룹장"},
        
        { "org_id": "COMMON", "name": "공용 그룹장"},
      ]
    }
  },
  computed: {
    selectedMember() {
      let list = []

      for(let item of this.members) {
        if( item.org_id.startsWith(this.selectedItem?.id) ) {
          list.push(item)
        }
      }

      return list
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped>
* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
}
</style>