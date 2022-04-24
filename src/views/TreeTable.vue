<template>
    <h1>Tree 구조를 테이블에 저장하는 방법</h1>
    <span>좌측의 children 오브젝트(Object)를 별도의 object 테이블에 저장하고 tree 테이블에는 다른 프로그램에서 필요한 정보를 저장 한다.</span>
    <br>
    <span>화면에 트리를 그릴때는 object 테이블에서 읽은 데이터를 사용하고 한번 생성된 id는 바뀌지 않는다.</span>
    <hr>
    <div class="row">
        <div class="col-4">
            <rawDisplayer :value="children" title="children" />
        </div>
        <div class="col-4">
            <h3> Json Dump </h3>
            <div class="js-menu"><i class="fas fa-cog"></i>Json Dump
                <i class="far fa-caret-square-right">
                    <i class="fas fa-minus"></i>
                    <span>1</span>
                    <i class="fas fa-plus"></i>
                </i>
            </div>
            <json-dump-item :args="children" :level="1"/>
        </div>
        <div class="col-4">
            <h3> table </h3>

            <h4> table all </h4>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">level</th>
                        <th scope="col">name</th>
                        <th scope="col">pid</th>
                        <th scope="col">id</th>
                        <th scope="col">order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in rows" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{row.level}}</td>
                        <td>{{row.name}}</td>
                        <td>{{row.pid}}</td>
                        <td>{{row.id}}</td>
                        <td>{{row.order}}</td>
                    </tr>
                </tbody>
            </table>

            <h4> table level 1 </h4>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">level</th>
                        <th scope="col">name</th>
                        <th scope="col">pid</th>
                        <th scope="col">id</th>
                        <th scope="col">order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in level1_rows" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{row.level}}</td>
                        <td>{{row.name}}</td>
                        <td>{{row.pid}}</td>
                        <td>{{row.id}}</td>
                        <td>{{row.order}}</td>
                    </tr>
                </tbody>
            </table>                

            <h4> table level 2 </h4>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">level</th>
                        <th scope="col">name</th>
                        <th scope="col">pid</th>
                        <th scope="col">id</th>
                        <th scope="col">order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in level2_rows" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{row.level}}</td>
                        <td>{{row.name}}</td>
                        <td>{{row.pid}}</td>
                        <td>{{row.id}}</td>
                        <td>{{row.order}}</td>
                    </tr>
                </tbody>
            </table>                
        </div>
    </div>

</template>
<script>
    import rawDisplayer from "@/components/raw-displayer.vue";
    import JsonDumpItem from "./JsonDumpItem.vue";

    export default {
        name: 'TreeTable',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
            rawDisplayer,
            JsonDumpItem
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                children: [
                    {id: '7E083193', name: '도입', children:[
                        {id: '744F8C34', name: '첫 인사', children:[]},
                    ]},
                    {id: '8F6D176B', name: '응대 예절', children:[
                        {id: 'F2C75B1B', name: '호응어', children:[]},
                        {id: '4D3FD1D6', name: '요조체', children:[]},
                        {id: 'A1B99F3F', name: '非 비지니스 표현', children:[]},
                        {id: 'DE495D5D', name: '부적합 표현', children:[]},
                    ]},
                    {id: '39909B50', name: '업무 처리 능력', children:[
                        {id: '9EFA4789', name: '정보 확인', children:[]},
                        {id: '6D004F85', name: '필수 안내', children:[]},
                    ]},
                    {id: '1B419D2', name: '마무리', children:[
                        {id: '2D61956D', name: '추가 문의 확인', children:[]},
                        {id: 'F1D55BC9', name: '끝 인사', children:[]},
                    ]},
                ]
            };
        },
        computed: {
            rows() {
                let array = [];
                let order = 1;
                this.children.forEach( row1 => {
                    array.push({id: row1.id, level: 1, name: row1.name, pid: 'root', order: order++ });
                    row1.children.forEach( row2 => {
                        array.push({id: row2.id, level: 2, name: row2.name, pid: row1.id, order: order++ });
                        // row2.children.forEach( row3 => {
                        //     array.push({id: row3.id, level: 3, name: row3.name, pid: row3.id, order: order++ });
                        // });
                    });
                });
                return array;
            },
            level1_rows() {
                return this.rows.filter( row => row.level == 1);
            },
            level2_rows() {
                return this.rows.filter( row => row.level == 2);
            }
        },
        setup() {},      //컴포지션 API
        created() {
        },    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {}      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>

<style scoped>
div.row {
    text-align: left;
    margin: 0px 10px;
}
div.row > div:nth-child(1), div.row > div:nth-child(2) {
    border-right: 1px solid black;
}

div.js-menu {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 5px 10px;
    margin: 5px 0px;
}
div.js-menu > i {
    border: 1px solid gray;
    border-radius: 3px;
    margin: 2px 5px;
    padding: 2px 5px;
}
div.js-menu > i > i {
    margin: 0px 3px;
}
div.js-menu > i > span {
    display: inline-block;
    width: 15px;
    text-align: center;
}
</style>
