<template>
    <div>
        <div class="dn-block">
            <div class="togle"><i class="fas" :class="{'fa-chevron-down':block.togle, 'fa-chevron-right':!block.togle}" v-if="block.children.length > 0" @click="clickTogle($event, block)"></i></div>
            <div class="desc"><input class="form-control" type="text" v-model="block.desc"/></div>
            <div class="author"><input class="form-control" type="text" v-model="block.author"/></div>
            <div class="date"><input class="form-control" type="text" v-model="block.date" readonly/></div>
            <div class="menu" @mouseover="mouseoverMenu($event, block)" @mouseleave="mouseleaveMenu($event, block)">
                <div class="sub-menu">
                    <i class="fas fa-plus" @click="clickChildPlus($event, block.children)" v-if="level != 3"></i>
                    <i class="fas fa-minus" @click="clickChildMinus($event, block)"></i>
                </div>
                <!-- <div class="action"><i class="fas fa-bars"></i></div> -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DevNotionBlock',
        components: {
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                // sampleData: ''
            };
        },
        props: {
            level: {type: Number},
            block: {type: Object},
            block_array: {type: Array},
        },
        methods: {  // 컴포넌트 내에서 사용할 메소드 정의
            clickTogle(e, block) {
                block.togle = ! block.togle;
            },
            mouseoverMenu(e, block) {
                block.menu = true;
            },
            mouseleaveMenu(e, block) {
                block.menu = false;
            },
            clickChildPlus(e, array) {
                const currentDateTime = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '');
                array.unshift(
                    {
                        date: currentDateTime, 
                        author:'', 
                        desc:'', 
                        togle:false, 
                        menu:false, 
                        children: []
                    }
                );
                this.block.togle = true;
            },
            clickChildMinus(e, block) {
                console.log("[DELETE BLOCK] " + block.date);
                // 배열을 재할당하면 에러 발생
                // this.block_array = this.block_array.filter((b) => b.cuuid != block.cuuid);
                let findIndex = -1;
                for(let i = 0; i < this.block_array.length; i++) {
                    if( this.block_array[i].cuuid == this.block.cuuid ) {
                        findIndex = i;
                        break;
                    }
                }
                console.log("findIndex=" + findIndex);
                this.block_array.splice(findIndex, 1);
            }
        }
    }
</script>

<style scoped>
div.dn-block {
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: flex-start;
    padding: 3px 10px;
}
div.dn-block > div.togle {
    flex: 0 0 auto;
    width: 26px;
    cursor: pointer;
    text-align: center;
}
div.dn-block > div.togle > i {
    padding: 8px;
}
div.dn-block > div.togle > i:hover {
    background: lightgray;
}
div.dn-block > div.date {
    flex: 0 0 auto;
    margin-right: 5px;
}
div.dn-block > div.date > input {
    width: 145px;
}

div.dn-block > div.author {
    flex: 0 0 auto;
    margin-right: 5px;
}
div.dn-block > div.author > input {
    width: 73px;
}

div.dn-block > div.desc {
    flex: 0 1 auto;
    width: 100%;
    margin-right: 5px;
}
div.dn-block > div.desc > input {
    width: 100%;
}
div.dn-block > div.menu {
    flex: 0 1 auto;
    /* width: 108px; */
    display: inline-flex;
    justify-content: flex-end;
}
div.dn-block > div.menu > div.sub-menu {
    width: 52px;
}
div.dn-block > div.menu > div.sub-menu > i {
    margin-left: 2px;
    margin-right: 2px;
    cursor: pointer;
    padding: 5px;
}
div.dn-block > div.menu > div.sub-menu > i:hover {
    background: lightgray;
}
div.dn-block > div.menu > div.action {
    flex: 0 0 auto;
}

</style>
