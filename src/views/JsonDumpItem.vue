<template>

    <div :class="{'level-1':level == 1, 'level-2':level == 2, 'level-3':level == 3, 'level-4':level == 4, }" v-for="(key, index) in Object.keys(args)" :key="index">
        <template v-if="typeof(args[key]) == 'object' && Array.isArray(args[key])">
            <!-- array -->
            <i class="far" :class="{'fa-caret-square-right':!togles[level+'-'+index], 'fa-caret-square-down':togles[level+'-'+index] }" @click="clickTogle($event, level+'-'+index)">&nbsp;{{key}}</i>: Array[{{args[key].length}}]
            <template v-if="togles[level+'-'+index] && args[key]">
                <json-dump-item :args="args[key]" :level="level + 1"/>
            </template>
        </template>
        <template v-else-if="typeof(args[key]) == 'object' && Array.isArray(args[key]) == false">
            <!-- object -->
            <i class="far" :class="{'fa-caret-square-right':!togles[level+'-'+index], 'fa-caret-square-down':togles[level+'-'+index] }" @click="clickTogle($event, level+'-'+index)">&nbsp;{{key}}</i>: Object
            <template v-if="togles[level+'-'+index] && args[key]">
                <json-dump-item :args="args[key]" :level="level + 1"/>
            </template>
        </template>
        <template v-else>
            <!-- other -->
            <div class="end">
                <div class="name">{{key}}</div>: <div class="value">{{checkValue(args[key])}}</div>
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
            args: {type: Object}
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {  
                togles: {},              
            };
        },
        methods: {
            checkValue(value) {
                let ret = value;
                if( typeof(value) == "string") {
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
.level-1, .level-2, .level-3, .level-4, .level-5 {
    margin-left: 20px;
}
/* .name {
    display: inline-block;
    width: 200px;
}
.value {
    display: inline-block;
    width: 500px;
} */
i.far {
    color: purple;
}

div.end {
    display: flex;
    justify-content: flex-start;
}
div.end > div.name {
    flex: 0 0 auto;
    width: 200px;
}
div.end > div.value {
    flex: 0 1 auto;
    width: 100%;
}
</style>