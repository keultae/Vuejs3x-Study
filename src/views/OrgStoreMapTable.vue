<template>
    <div style="max-width: 600px">
        <div style="margin: 0.4em">
        selectedItem id:{{ getSelectedItem?.id }}, type:{{ getSelectedItem?.type }}
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
            <tr :key="i" v-for="(member, i) in getMembers">
                <td>{{i+1}}</td>
                <td>{{member.org_id}}</td>
                <td>{{member.name}}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
    // vuex 라이브러리에서 mapActions, mapGetters 함수를 가져옵니다.
    import { mapActions, mapGetters } from 'vuex'

    export default {
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                // sampleData: ''
            };
        },
        computed: {
            ...mapGetters('OrgStoreTree', ['getSelectedItem']),
             ...mapGetters('OrgStoreTable', ['getMembers'])
        },
        setup() {},      //컴포지션 API
        created() {      //컴포넌트가 생성되면 실행
            this.actMembers()
        },    
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {       // 컴포넌트 내에서 사용할 메소드 정의
            ...mapActions('OrgStoreTable', ['actMembers'])
        }      
    }
</script>
