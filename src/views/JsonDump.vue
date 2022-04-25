<template>
    <div class="jd">
        <div class="jd-menu">
            <div class="jd-logo"><i class="fas fa-cog"></i></div>
            
            <div class="jd-title">Json Dump</div>
            
            <div class="jd-submenu1">
                <!-- <i class="far" :class="{'fa-caret-square-right':submenu1.status=='fold', 'fa-caret-square-down':submenu1.status=='unfold'}"
                    @click="clickTogle"></i> -->
                레벨 
                <i class="fas fa-minus" @click="clickMinus"></i>
                <div>
                <span>{{submenu1.level}}</span>
                </div>
                <i class="fas fa-plus" @click="clickPlus"></i>
                표시
            </div>
        </div>
        <json-dump-item :args="args" :level="level" :maxlevel="maxlevel" :submenu1="submenu1"/>
    </div>
</template>
<script>
    import JsonDumpItem from "./JsonDumpItem.vue"

    export default {
        name: 'JsonDump',
        components: {
            JsonDumpItem
        },
        props: {
            level: {type: Number, default: 1},
            args: {type: Object}
        },
        data() {
            return {  
                submenu1: {
                    status: 'fold',
                    level: 1
                },
                maxlevel: 1
            };
        },
        created() {
            this.searchMaxLevel(this.args, 1);
        },
        watch: {
            args() {
                this.searchMaxLevel(this.args, 1);
            }
        },
        methods: {
            searchMaxLevel(obj, level) {
                if(level > this.maxlevel) {
                    this.maxlevel = level;
                }
                Object.keys(obj).forEach(key => {
                    // console.log(level + " | " + key + ", " + typeof(obj[key]) + ', ' + (obj[key] instanceof Date));

                    if(  obj[key] != null && typeof(obj[key]) == 'object' && !(obj[key] instanceof Date) && obj[key] !== 'undefined' ) {
                        this.searchMaxLevel(obj[key], level+1);
                    }
                });

                return 1;
            },
            clickTogle() {
                console.log("this.submenu1.status=" + this.submenu1.status);
                if(this.submenu1.status == 'fold') {
                    this.submenu1.status = 'unfold';
                } else {
                    this.submenu1.status = 'fold';
                }
                console.log("this.submenu1.status=" + this.submenu1.status);
            },
            clickMinus() {
                if( this.submenu1.level > 1) {
                    this.submenu1.level -= 1;
                }
            },
            clickPlus() {
                if( this.submenu1.level < this.maxlevel) {
                    this.submenu1.level += 1;
                }
            }
        }
    }
</script>

<style scoped>
.jd-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 8px 5px;
}
.jd-logo {
    margin-right: 10px;
}
.jd-title {
    margin-right: 5px;
}
.jd-submenu1 {
    border: 1px dotted gray;
    padding-left: 15px;
    border-radius: 5px;    
}
.jd-submenu1 > i:nth-child(1):hover {
    cursor: pointer;
}
.jd-submenu1 > .fa-minus {
    margin: 0px 5px;
    color: purple;
}
.jd-submenu1 > .fa-minus:hover {
    cursor: pointer;
}
.jd-submenu1 > div {
    display: inline-flex;
    width: 20px;
    justify-content: center;
}
.jd-submenu1 > .fa-plus {
    margin: 0px 0px 0px 5px;
    color: purple;
}
.jd-submenu1 > .fa-plus:hover {
    cursor: pointer;
}
</style>