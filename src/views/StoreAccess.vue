<template>
    <p>Count: {{count}}</p>
    <p>cartCount: {{cartCount}}</p>
    <button type="button" @click="increment">increment</button>
    <hr>
    <table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in this.$store.getters.cart">
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.category}}</td>
        </tr>
      </tbody>

    </table>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
      components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
      },
      // computed: {
      //   count() {
      //     return this.$store.state.count;
      //   },
      //   cartCount() {
      //     return this.$store.getters.cartCount;
      //   }
      // },
      // computed: mapGetters({
      //   count: 'count',
      //   cartCount: 'cartCount'
      // }),
      computed: {
        count() {
          return this.$store.state.count;
        },
        ...mapGetters( ['cart', 'cartCount'] )
      },
      methods: {
        increment() {
          this.$store.commit('increment');
          this.$store.commit('addProduct');
        }
      } 
  }
</script>
