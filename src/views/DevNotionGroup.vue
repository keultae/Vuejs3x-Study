<template>
    <div class="dn-group">
        <div class="dn-group-title">
            <i class="fas fa-bars"></i>
            <input type="text" class="form-control" v-model="group.name" placeholder="click 후 그룹명을 입력하세요."/>
            <i class="fas fa-plus" @click="clickBlockPlus"></i>
            <i class="fas fa-minus" @click="clickGroupMinus"></i>
        </div>
        <div class="dn-level1" v-for="(level1_block, level1) in group.children" :key="level1">
            <dev-notion-block :level="1" :block="level1_block" :block_array="group.children"/>

            <template v-if="level1_block.togle">
            <div class="dn-level2" v-for="(level2_block, level2) in level1_block.children" :key="level2">
                <dev-notion-block :level="2" :block="level2_block" :block_array="level1_block.children"/>

                <template v-if="level2_block.togle">
                <div class="dn-level3" v-for="(level3_block, level3) in level2_block.children" :key="level3">
                    <dev-notion-block :level="3" :block="level3_block" :block_array="level2_block.children"/>
                </div>
                </template>
            </div>
            </template>
        </div>
    </div>
</template>
<script>
    import DevNotionBlock from './DevNotionBlock.vue'
    import {crc32UUID} from '@/assets/js/crc32.js'

    export default {
        name: 'DevNotionGroup',
        components: {
            DevNotionBlock
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                // sampleData: ''
            };
        },
        props: {
            group: {type: Object},
            group_array: {type: Array},
        },
        methods: {  // 컴포넌트 내에서 사용할 메소드 정의
            clickBlockPlus() {
                const currentDateTime = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '');
                this.group.children.unshift(
                    {
                        cuuid: crc32UUID(),
                        date: currentDateTime, 
                        author:'', 
                        desc:'', 
                        togle:false, 
                        menu:false, 
                        children: [
                            // {
                            //     cuuid: crc32UUID(),
                            //     date: currentDateTime, 
                            //     author:'', 
                            //     desc:'', 
                            //     togle:false, 
                            //     menu:false, 
                            //     children: [
                            //         {
                            //             cuuid: crc32UUID(),
                            //             date: currentDateTime, 
                            //             author:'', 
                            //             desc:'', 
                            //             togle:false, 
                            //             menu:false, 
                            //             children: [
                                            
                            //             ]
                            //         },                                    
                            //     ]
                            // },
                            // {
                            //     cuuid: crc32UUID(),
                            //     date: currentDateTime, 
                            //     author:'', 
                            //     desc:'', 
                            //     togle:false, 
                            //     menu:false, 
                            //     children: [
                                    
                            //     ]
                            // },
                        ]
                    }
                );
            },
            clickGroupMinus() {
                console.log("[DELETE GROUP] " + this.group.cuuid);
                let findIndex = -1;
                for(let i = 0; i < this.group_array.length; i++) {
                    if( this.group_array[i].cuuid == this.group.cuuid ) {
                        findIndex = i;
                        break;
                    }
                }
                console.log("findIndex=" + findIndex);
                this.group_array.splice(findIndex, 1);
            }
        }
    }
</script>

<style scoped>
.dn-group {
    margin: 0px 10px;
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
    display: inline-block;
    width: 300px;
}
.dn-group-title > i {
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    padding: 5px;
}
.dn-group-title > i:hover {
    background: lightgray;
}

div.dn-level1 {
}
div.dn-level2 {
    margin-left: 20px;
}
div.dn-level3 {
    margin-left: 20px;
}

</style>
