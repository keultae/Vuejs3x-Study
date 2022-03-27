<template>
   <div style="display: block">
     <h1>조직도</h1>
      <hr>
      <div style="display: flex">
        <org-store-normal-tree />

        <org-store-normal-table />
      </div>
   </div>
</template>

<script>
import OrgStoreNormalTable from './OrgStoreNormalTable.vue'
import OrgStoreNormalTree from './OrgStoreNormalTree.vue'

export default {
  components: { OrgStoreNormalTree, OrgStoreNormalTable },  
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