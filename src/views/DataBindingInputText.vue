<template>
    <div>
        <input type="text" v-model="valueModel" /><br>
        {{valueModel}}
        <hr>
        <input type="text" v-bind:value="args.value1" @input="inputHangul($event, 'args.value1')"/><br>
        args.value1: {{args.value1}}<br>

        <input type="text" v-bind:value="args.child.value2" @input="inputHangul($event, 'args.child.value2')"/><br>
        args.child.value2{{args.child.value2}}<br>

        <input type="text" v-bind:value="args.child.arr[0].value3" @input="inputHangul($event, 'args.child.arr[0].value3')"/><br>
        args.child.arr[0].name:{{args.child.arr[0].value3}}<br>
        {{msg}}
    </div>
</template>
<script>
    import { inputHangul } from '@/assets/js/inputHangul.js';

    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                valueModel: 'South Korea',
                valueBind: 'value Bind',
                args: {
                    value1: "args.value1",
                    child: {
                        value2: 'args.child.value2',
                        arr: [
                            {value3: 'args.child.arr[0].value3'}
                        ]
                    }
                },
                msg: ''
            };
        },
        methods: {
            inputHangul: inputHangul
        }
    }
</script>
