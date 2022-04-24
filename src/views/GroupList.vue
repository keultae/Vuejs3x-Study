<template>
    <h1>Group과 List를 테이블에 저장하는 방법</h1>
    <hr>
    <div class="row">
        <div class="col-3">
            <rawDisplayer :value="group" title="children" />
        </div>
        <div class="col-3">
            <h3> Json Dump </h3>
            <div class="js-menu"><i class="fas fa-cog"></i>Json Dump
                <i class="far fa-caret-square-right">
                    <i class="fas fa-minus"></i>
                    <span>1</span>
                    <i class="fas fa-plus"></i>
                </i>
            </div>
            <json-dump-item :args="group" :level="1"/>
        </div>
        <div class="col-6">
            <h3> table </h3>
            <h4> table all </h4>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">uuid</th>
                        <th scope="col">g1uuid</th>
                        <th scope="col">g2uuid</th>
                        <th scope="col">g3uuid</th>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                    </tr>

                </thead>
                <tbody>
                    <tr v-for="(row, index) in list" :key="index">
                        <th scope="row">{{index+1}}</th>
                        <td>{{row.uuid}}</td>
                        <td>{{row.g1uuid}}</td>
                        <td>{{row.g2uuid}}</td>
                        <td>{{row.g3uuid}}</td>
                        <td>{{row.id}}</td>
                        <td>{{row.name}}</td>
                        <td>{{row.email}}</td>
                    </tr>                      
                </tbody>
                <tfoot>
                    <tr>
                        <td scope="col">#</td>
                        <td scope="col">{{newAddress.uuid}}</td>
                        <td scope="col">
                            <select v-model="selected.g1uuid" @change="changeG1uuid">
                                <option :value="null">그룹1</option>
                                <option v-for="(row) in g1list" :key="row.uuid" :value="row.uuid">{{row.name}}</option>
                            </select>
                        </td>
                        <td scope="col">
                            <select v-model="selected.g2uuid" >
                                <option :value="null">그룹2</option>
                                <option v-for="(row) in g2list" :key="row.uuid" :value="row.uuid">{{row.name}}</option>
                            </select>
                        </td>
                        <td scope="col">
                            <select v-model="selected.g3uuid" >
                                <option :value="null">그룹3</option>
                                <option v-for="(row) in g3list" :key="row.uuid" :value="row.uuid">{{row.name}}</option>
                            </select>
                        </td>
                        <td scope="col">
                            <input type="text" v-model="newAddress.id" id="id" />
                        </td>
                        <td scope="col">
                            <input type="text" v-model="newAddress.name" id="name" />
                        </td>
                        <td scope="col">
                            <input type="text" v-model="newAddress.email" id="email"/><i class="fas fa-plus" @click="clickAddAddress"></i>
                        </td>
                    </tr>              
                </tfoot>
            </table>    
        </div>
    </div>

</template>
<script>
    import rawDisplayer from "@/components/raw-displayer.vue";
    import JsonDumpItem from "./JsonDumpItem.vue";
    import {crc32UUID} from "@/assets/js/crc32.js"
    import axios from "axios";

    export default {
        name: 'GroupList',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
            rawDisplayer,
            JsonDumpItem
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                group: [
                    {
                        "uuid": "E6D41EEC",
                        "name": "검색그룹",
                        "children": []
                    },
                    {
                        "uuid": "CE30DC35",
                        "name": "NLP그룹",
                        "children": [
                            {
                                "uuid": "334978C0",
                                "name": "기반기술본부",
                                "children": []
                            },
                            {
                                "uuid": "A4380DE5",
                                "name": "빅데이터본부",
                                "children": []
                            },
                            {
                                "uuid": "8A377592",
                                "name": "AI사업본부",
                                "children": [
                                    {
                                        "uuid": "E96415B",
                                        "name": "영업팀",
                                    },
                                    {
                                        "uuid": "529A125D",
                                        "name": "AI1팀",
                                    },
                                    {
                                        "uuid": "6C3146B4",
                                        "name": "AI2팀",
                                    },
                                    {
                                        "uuid": "16C59F31",
                                        "name": "AI3팀",
                                    },
                                    {
                                        "uuid": "363846C5",
                                        "name": "AI4팀",
                                    },
                                    {
                                        "uuid": "D6CB9F88",
                                        "name": "AI5팀",
                                    },
                                    {
                                        "uuid": "BE3A6CE7",
                                        "name": "AI6팀",
                                    },
                                    {
                                        "uuid": "C7EF85B7",
                                        "name": "AI7팀",
                                    },
                                    {
                                        "uuid": "5E97D977",
                                        "name": "AI8팀",
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "uuid": "B6102626",
                        "name": "AI그룹",
                        "children": []
                    },
                    {
                        "uuid": "55AFB27",
                        "name": "공용그룹",
                        "children": []
                    }
                ],                
                list: [
                    { uuid:'FCB45B3D', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id1', name: '부장', email: 'id1@diquest.com' },
                    { uuid:'25A722D3', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id2', name: '차장', email: 'id2@diquest.com' },
                    { uuid:'3EDC9D98', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id3', name: '과장', email: 'id3@diquest.com' },
                    { uuid:'3B5B5297', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id4', name: '대리', email: 'id4@diquest.com' },
                    { uuid:'9878FD4D', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id5', name: '사원1', email: 'id6@diquest.com' },
                    { uuid:'55B139E5', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id6', name: '사원2', email: 'id6@diquest.com' },
                    { uuid:'C201C4BE', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id7', name: '사원3', email: 'id7@diquest.com' },
                    { uuid:'592A4798', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id8', name: '사원4', email: 'id8@diquest.com' },
                    { uuid:'40949262', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id9', name: '사원5', email: 'id9@diquest.com' },
                    { uuid:'45491928', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id10', name: '사원6', email: 'id10@diquest.com' },
                    { uuid:'D553E002', g1uuid:'CE30DC35', g2uuid: '8A377592', g3uuid: '5E97D977', id: 'id11', name: '사원7', email: 'id11@diquest.com' },
                ],
                selected: {
                    g1uuid: null,
                    g2uuid: null,
                    g3uuid: null,
                },
                newAddress: {
                    uuid: null,
                    id: null,
                    name: null,
                    email: null,
                }
            };
        },
        computed: {
            g1list() {
                let list = [];
                console.log("g1list()");
                this.group.forEach( item => {
                    console.log("g1list() > push() " + item.uuid);
                    list.push( { 'uuid': item.uuid, 'name': item.name } );
                } );
                return list;
            },
            g2list() {
                let list = [];
                console.log("g2list()");
                this.group.forEach( item => {
                    if( item.uuid == this.selected.g1uuid ) {
                        item.children.forEach( item => {
                            console.log("g2list() > push() " + item.uuid);
                            list.push( { 'uuid': item.uuid, 'name': item.name } );
                        });
                    }
                } );
                return list;
            },
            g3list() {
                let list = [];
                console.log("g3list()");
                this.group.forEach( item => {
                    if( item.uuid == this.selected.g1uuid ) {
                        item.children.forEach( item => {
                            if( item.uuid == this.selected.g2uuid ) {
                                item.children.forEach( item => {
                                    console.log("g3list() > push() " + item.uuid);
                                    list.push( { 'uuid': item.uuid, 'name': item.name } );
                                });
                            }
                        });
                    }
                } );
                return list;
            },
        },
        setup() {},      //컴포지션 API
        created() {
            this.newAddress.uuid = crc32UUID();
        },    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {
            changeG1uuid() {
                this.selected.g2uuid = null;
                this.selected.g3uuid = null;
            },
            clickAddAddress() {
                // this.list.push(
                //     { 
                //         uuid: this.newAddress.uuid, 
                //         g1uuid: this.selected.g1uuid, 
                //         g2uuid: this.selected.g2uuid, 
                //         g3uuid: this.selected.g3uuid, 
                //         id: this.newAddress.id, 
                //         name: this.newAddress.name, 
                //         email: this.newAddress.email, 
                //     },
                // );

                let data = { 
                    uuid: this.newAddress.uuid, 
                    g1uuid: this.selected.g1uuid, 
                    g2uuid: this.selected.g2uuid, 
                    g3uuid: this.selected.g3uuid, 
                    id: this.newAddress.id, 
                    name: this.newAddress.name, 
                    email: this.newAddress.email, 
                };
                axios.post('/address/insert', data)
                .then(res => {
                    console.log("then() " + JSON.stringify(res) );

                    this.list.push(data);
                })
                .catch(e => {
                    console.log('catch() ' + e);
                })
                .finally( () => {
                    console.log("finally()");
                });


                // this.$api("/address/insert", "post", data, this.thenFun, this.finaFun);
            },
            thenFun(res) {
                console.log("GroupList > thenFun() " + JSON.stringify(res));
            },
            finaFun() {
                console.log("GroupList > finaFun()");
            },
        }      // 컴포넌트 내에서 사용할 메소드 정의
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

#id {
    width: 100px;
}
#name {
    width: 100px;
}
#email {
    width: 200px;
}

tfoot i.fa-plus {
    margin-left: 10px;
}
</style>
