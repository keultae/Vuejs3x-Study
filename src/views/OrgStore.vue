<template>
   <div style="display: block">
     <h1>조직도</h1>
      <hr>
      <div style="display: flex">
        <org-store-tree />

        <org-store-table />
      </div>
   </div>
</template>

<script>
import OrgStoreTable from './OrgStoreTable.vue'
import OrgStoreTree from './OrgStoreTree.vue'

export default {
  components: { OrgStoreTree, OrgStoreTable },  
  data() {
    return {      
      
    }
  },
  computed: {

  },
  created() {
  },
  methods: {
  }
}
</script>