<template>
    <p>getCartLength: {{getCartLength}}</p>
    <button type="button" @click="addPrd({id: 3, name: 'new-' + new Date(), category: 'C'})">addProduct</button>
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
        <tr :key="i" v-for="(product, i) in cart">
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.category}}</td>
        </tr>
      </tbody>

    </table>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

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
        // store.js의 getters 속성 이름과 Component 속성 이름을 동일하게 사용할 때 [] 사용
        ...mapGetters( ['cart', 'getCartLength'] ),
        // store.js의 getters 속성 이름과 Component 속성 이름을 다르게 사용할 때 {} 사용
        // ...mapGetters( { getCartLng:'getCartLength'} ),
      },
      methods: {
        // sotre.js의 mutations 메서드 명과 StoreAccess.vue 메서드 명이 동일할 때 [] 사용
        // ...mapMutations(['increment']),
        // sotre.js의 mutations 메서드 명과 StoreAccess.vue 메서드 명을 다르게 매칭할 떄 {} 사용
        ...mapMutations({ addPrd:'addProduct' }),
        // increment() {
        //   // this.$store.commit('increment');
        //   this.$store.commit('addProduct', {id: 3, name: "new-" + new Date(), category: "C"});
        // }
      } 
  }
</script>
