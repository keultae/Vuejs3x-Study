<template>
    <h2>{{title}}</h2>
    <h3>age: {{age}} {{typeof(age)}}</h3>
    <h3>isShow: {{isShow}} {{typeof(isShow)}}</h3>
    <h3>idList: {{idList}} {{typeof(idList)}}, 첫번쨰={{idList[0]}}</h3>
    <h3>idObj: {{idObj}} {{typeof(idObj)}}, id={{idObj.id}}</h3>
    
    <h3>propA: {{propA}} type:{{typeof(propA)}}</h3>
    <h3>propB: {{propB}} type:{{typeof(propB)}}</h3>
    <h3>propC: {{propC}} type:{{typeof(propC)}}</h3>
    <h3>propD: {{propD}} type:{{typeof(propD)}}</h3>
    <h3>propE: {{propE}} type:{{typeof(propE)}}</h3>
    <h3>propF: {{propF}} type:{{typeof(propF)}}</h3>
    <h3>propG: {{propG}} type:{{typeof(propG)}}</h3>
</template>
<script>
    export default {
        props: {
            title: {
              type: String,
              default: "페이지 제목입니다.",
              required: true
            },
            age: {
                type: Number,
                default: 0,
                validator: function(value) {
                    var ret = false;
                    if(value >= 10 && value <= 60) {
                        ret = value * 10;
                    }
                    return ret;
                }
            },
            isShow: {
                type: Boolean,
                default: false
            },
            idList: {
                type: Array,
                default: function() {
                    return []
                }
            },
            idObj: {
                type: Object,
                default: function() {
                    return {}
                }
            },

            propA: Number,  // Number 타입 체크
            propB: [String, Number],    // 여러 타입 허용
            propC: {    // 문자형이고 부모 컴포넌트로부터 반드시 데이터가 필수로 전달되어야 함
                type: String,
                required: true
            },
            propD: {    // 기본 값(100)을 갖는 숫자형
                type: Number,
                default: 100
            },
            propE: {    // 기본 값을 갖는 객체 타입
                type: Object,
                // 객체나 배열의 기본 값을 항상 팩토리 함수로부터 반환되어야 합니다.
                default: function() {
                    return { message: 'hello' }
                }
            },
            propF: {    // 커스텀 유횽성 검사 함수
                type: String,
                // 값이 아래 세 문자열 중 하나와 일치해야 합니다.
                validator: function(value) {
                    return ['success', 'warning', 'danger'].indexOf(value) != -1;
                }
            },
            propG: {    // 기본값을 갖는 함수
                type: Function,
                // 객체나 배열과 달리 아래 표현은 팩토리 함수가 아닙니다. 기본 값으로 사용되는 함수입니다.
                default: function() {
                    return 'Default function'
                }
            }
        }
    }
</script>