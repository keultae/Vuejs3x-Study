<template>
    <div v-bind:class="[this.class]">
        <template :key="idx1" v-for="(node1, idx1) in tree_list">
            <keultae-tree-node :node="node1" :tree_selected="this.tree_selected" :idx="idx1"/>       

            <template :key="idx2" v-for="(node2, idx2) in nodeChildren(node1)">
                <keultae-tree-node :node="node2" :tree_selected="this.tree_selected" :idx="idx1+'>'+idx2"/> 

                <template :key="idx3" v-for="(node3, idx3) in nodeChildren(node2)">
                    <keultae-tree-node :node="node3" :tree_selected="this.tree_selected" :idx="idx1+'>'+idx2+'>'+idx3"/>

                    <template :key="idx4" v-for="(node4, idx4) in nodeChildren(node3)">
                        <keultae-tree-node :node="node4" :tree_selected="this.tree_selected" :idx="idx1+'>'+idx2+'>'+idx3+'>'+idx4"/>
                    </template>                        
                </template>
            </template>
        </template>     
    </div>
</template>

<script>
    import KeultaeTreeNode from "./KeultaeTreeNode.vue"

    export default {
        name: 'KeultaeTree',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
            KeultaeTreeNode
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                // sampleData: ''
            };
        },
        props: {
          tree_list: {type: Array},
          tree_selected: {type: Object},
          width: {type: String},
          class: {type: String, default: 'keultae-tree'}
        },
        computed: {
            
        },
        setup() {},      //컴포지션 API
        created() {},    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {
            nodeChildren(node) {
                var ret = [];
                if( node.fold == false ) {
                    ret = node.children;
                }
                return ret;
            }
        }      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>
