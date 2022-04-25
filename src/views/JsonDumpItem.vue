<template>
    <div :style="['margin-left: ' +( level == 1? 0: 20 )+ 'px']" 
        v-for="(key, index) in Object.keys(args)" :key="index">
        <template v-if="args[key] !== null && typeof(args[key]) == 'object'">
            <i class="far" :class="{'fa-caret-square-right':!togles[level+'-'+index], 'fa-caret-square-down':togles[level+'-'+index] }" 
                @click="clickTogle($event, level+'-'+index)">&nbsp;{{key}}</i>: 
                <!-- array -->
                <template v-if="Array.isArray(args[key])">
                Array[{{args[key].length}}]
                </template>
                <!-- object -->
                <template v-else-if="!Array.isArray(args[key])">
                Object
                </template>
            <template v-if="(togles[level+'-'+index] || submenu1.level > level) && args[key] ">
                <json-dump-item :args="args[key]" :level="level + 1" :maxlevel="maxlevel" :submenu1="submenu1"/>
            </template>
        </template>
        <template v-else>
            <!-- other -->
            <div class="end">
                <i class="fas fa-ellipsis-h"></i><div class="name">&nbsp;{{key}}</div>
                <div class="ga" :style="['width:'+((maxlevel - level)*20)+'px']"></div>
                <div class="value">{{checkValue(args[key])}}</div>
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'JsonDumpItem',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        props: {
            level: {type: Number, default: 1},
            maxlevel: {type: Number},
            args: {type: Object},
            submenu1: {type: Object},
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {  
                togles: {},              
            };
        },
        computed: {
            togle() {
                return this;
            }
        },
        methods: {
            checkValue(value) {
                let ret = value;
                // typeof(null) => object로 리턴돼서 null 먼저 검사
                if( value == null) {
                    ret = 'null';
                } else if( typeof(value) == "string") {
                    value = value.replaceAll("\n", "\\n");
                    ret = '"' + value + '"';
                }
                return ret;
            },
            clickTogle(e, key) {
                console.log("clickTogle(): " + key);

                if( this.togles[key] == 'undefined') {
                    this.togles[key] = true;
                } else {
                    this.togles[key] = !this.togles[key];
                }
            }
        }      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>
<style scoped>
i.far {
    color: purple;
}
div.end {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid gray;
}
div.end > div.name {
    flex: 0 0 auto;
    width: 200px;
}
div.ga {
    /* background: cyan; */
    flex: 0 0 auto;
}
div.end > div.value {
    flex: 0 1 auto;
    width: 100%;
    border-left: 1px solid gray;
    padding-left: 5px;
}
</style>