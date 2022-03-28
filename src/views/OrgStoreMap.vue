<template>
   <div style="display: block">
     <h1>조직도</h1>
      <hr>
      <div style="display: flex">
        <org-store-map-tree />

        <org-store-map-table />
      </div>
   </div>
</template>

<script>
import OrgStoreMapTable from './OrgStoreMapTable.vue'
import OrgStoreMapTree from './OrgStoreMapTree.vue'

export default {
  components: { OrgStoreMapTree, OrgStoreMapTable },  
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