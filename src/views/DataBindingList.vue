<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{i+1}}, {{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                productList: [
                    {"name":"기계식 키보드", "price":25000, "category":"노트북/태블릿", "delivery_price":5000},
                    {"name":"기계식 키보드", "price":25000, "category":"노트북/태블릿", "delivery_price":5000},
                    {"name":"기계식 키보드", "price":25000, "category":"노트북/태블릿", "delivery_price":5000},
                    {"name":"기계식 키보드", "price":25000, "category":"노트북/태블릿", "delivery_price":5000}
                ]
            };
        }
    }
</script>
<style scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>
