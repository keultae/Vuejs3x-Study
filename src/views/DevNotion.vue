<template>
    <div class="dev-notion">
        <div class="dn-header">
            <h4>
                <i class="far fa-sticky-note"></i> <span>{{filename}}</span> <input type="text" class="form-control" v-model="args.name" placeholder="click 후 프로그램명을 입력하세요."/>
            </h4>
            <a href="#" @click="$emit('close')">&Cross;</a>
        </div>
        
        <div class="dn-desc">
            <textarea class="form-control" rows="3"></textarea>
        </div>

        <div class="dn-menu">
            <button
                type="button"
                class="btn btn-primary mdn-5px"
                @click="clickAllOepnCose($event, true)"
                >모두 펴기</button>
            <button
                type="button"
                class="btn btn-primary mdn-5px"
                @click="clickAllOepnCose($event, false)"
                >모두 접기</button>
            <button
                type="button"
                class="btn btn-primary mdn-5px"
                @click="clickGroupAppend"
                >그룹 추가</button>
            <button
                type="button"
                class="btn btn-secondary mdn-5px"
                >저장</button>
        </div>

        <div class="dn-history">
            <draggable v-model="args.groups" group="people" @start="drag=true" @end="drag=false"
                ghost-class="ghost"
                :animation="200"
                handle=".fa-bars"
                >
                <div v-for="group in args.groups" :key="group.cuuid">
                    <dev-notion-group :group="group" :group_array="args.groups"/>
                </div>
            </draggable>
        </div>
    </div>
</template>
<script>
    import DevNotionGroup from './DevNotionGroup.vue'
    import {crc32UUID} from '@/assets/js/crc32.js'
    import draggable from 'vuedraggable'

    export default {
        name: 'DevNotion',
        components: {
            DevNotionGroup, draggable
        },
        props: {
            filename: {type: String}
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                args: {
                    name: "",
                    groups:[
                        // {
                        //     cuuid:'6E33A2A5', name:'그룹명1', children: []
                        // },
                        // {
                        //     cuuid: '3FC729CA', name:'그룹명2', children: []
                        // }
                    ]
                }
                
            };
        },
        methods: {  // 컴포넌트 내에서 사용할 메소드 정의
            clickAllOepnCose(e, mode) {
                this.args.groups.forEach( (group) => {
                    group.children.forEach( (block) => {
                        block.togle = mode;
                        block.children.forEach( (block) => {
                            block.togle = mode;
                        });
                    });
                });
            },
            clickGroupAppend() {
                this.args.groups.unshift(
                    {
                        cuuid: crc32UUID(), name:'', children: []
                    },
                );
            },

        }
    }
</script>

<style scoped>
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}

.button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}

.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}

input {
  display: inline-block;
  width: 50%;
}

.text {
  margin: 20px;
}


.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.not-draggable {
  cursor: no-drop;
}

div.dev-notion > div.dn-header {
    border-bottom: 1px solid lightgray;
    height: 50px;
    margin: 0px 10px;
}
div.dev-notion > div.dn-header > h4 {
  margin: 10px 20px;
  float: left;
}
div.dev-notion > div.dn-header > h4 > span {
    margin-left: 5px;
    margin-right: 5px;
}
div.dev-notion > div.dn-header > h4 > input {
    border: 0px;
    width: 500px;
}
div.dev-notion > div.dn-header > a {
  font-weight: bold;
  font-size: xx-large;
  float: right;
  margin: 9px 10px;
}

div.dev-notion > div.dn-desc {
    padding: 10px;
}
div.dev-notion > div.dn-history {
    margin-top: 5px;
    margin-bottom: 15px;
}

.dn-menu {
    margin: 0px 10px 25px 10px;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: center;    
    padding: 10px;
}
.dn-menu > button {
    margin-left: 10px;
    margin-right: 10px;
}
.dn-group {
    margin: 30px 10px 0px 10px;
    padding-bottom: 10px;    
    border: 1px solid black;
    border-radius: 5px;
}
.dn-group-title {
    border: 1px solid black;
    display: inline-block;
    position: relative;
    top: -17px;
    left: 7px;
    padding: 5px 10px;
    border-radius: 5px;
    background: white;
}
.dn-group-title > input {
    border: 0px;
}
.dn-group-title > i {
    margin-left: 10px;
}
</style>
