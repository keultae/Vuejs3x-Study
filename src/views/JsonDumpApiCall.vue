<template>
    <h1>Json Dump</h1>
    <hr>
    <div class="row">
        <div class="col-12">
            <div class="action">
                <input class="form-control" type="text" v-model="callId" placeholder="CallID를 입력하세요."/>
                <button class="btn btn-primary mdn-5px" type="button" @click="clickSearch" :disabled="search.working">조회</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="search">
                <span>{{search.start}}</span> ~ <span>{{search.end}}</span> = <span>{{search.elapsed}}</span> ms
            </div>
        </div>
    </div>

    <!-- <div class="row">
        <div class="col-6">
            IN
            <hr>
            <json-dump-item :args="{'scriptMap': args.scriptMap, 'evalScoreMap': args.evalScoreMap, 'sttVoList':args.sttVoList}" :level="1"/>
        </div>
        <div class="col-6">
            OUT
            <hr>
            <json-dump-item :args="{'systemResultList-0': args['systemResultList-0'], 'systemScoreList-0': args['systemScoreList-0'], 'systemViewDTO-0':args['systemViewDTO-0']}" :level="1"/>
        </div>
    </div> -->
    <div class="row">
        <div class="col-12">
            <json-dump :args="args"/>
        </div>
    </div>

    
</template>
<script>
    import JsonDump from "./JsonDump.vue"
    import axios from "axios";

    export default {
        name: 'JsonDumpApiCall',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
            JsonDump
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                togles: {},
                callId: '2022022812120910490',
                search: {
                    working: false,
                    start: '시작 시간',
                    end: '종료 시간',
                    elapsed: '소요 시간'
                },
                args: {},
            };
        },
        setup() {},      //컴포지션 API
        created() {
            // this.getCallid();
        },    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {
            async getCallid(callId) {
                // 조회 버튼 클릭시 비활성화해서, 결과를 받기 전까지는 누르지 못하게 한다.
                this.search.working = true;
                let start = new Date().getTime();
                this.search.start = new Date(start + 9*60*60*1000).toISOString().replace("T", " ").replace(/\..*/, '');
                this.search.end = '종료 시간';
                this.search.elapsed = '소요 시간';
                let end = 0;

                axios.get('/qa2/' + callId)
                .then(res => {
                    console.log("then() " + res);
                    this.args = res.data;
                })
                .catch(e => {
                    console.log('catch() ' + e);
                })
                .finally( () => {
                    console.log("finally()");
                    // 검색이 완료되면 버튼 활성화
                    this.search.working = false;
                    end = new Date().getTime();
                    this.search.end = new Date(end + 9*60*60*1000).toISOString().replace("T", " ").replace(/\..*/, '');
                    let elapsed = end - start;
                    this.search.elapsed = elapsed;
                });
            },
            clickSearch() {
                console.log("clickSearch() callId=" + this.callId);
                this.getCallid(this.callId);
                console.log("\tEND");
            }
        }
    }
</script>
<style scoped>
div.row {
    text-align: left;
    padding: 0px 10px;
}
div.row > div:nth-child(1) {
    border-right: 1px solid gray;
}
div.action {
    display: flex;
    justify-content: center;
    align-items: center;
}
div.action > input {
    flex: 0 0 auto;
    width: 200px;
}
div.action > button {
    flex: 0 0 auto;
    margin-left: 10px;
}

div.search {
    margin: 10px 10px;
    text-align: center;
}
div.search > span:nth-child(1), div.search > span:nth-child(2) {
    width: 160px;
    display: inline-block;
    border: 1px solid gray;
    border-radius: 5px;
}
div.search > span:nth-child(3) {
    width: 80px;
    display: inline-block;
    border: 1px solid gray;
    border-radius: 5px;
}
</style>