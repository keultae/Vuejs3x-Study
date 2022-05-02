<template>
    <div>
      <h1>Easy Cron</h1>
      <hr>
      <div class="row">
        <div class="col-3">
          <h1>분(Minutes)</h1>
          <div><input type="radio" value="all" v-model="minutes_selected"> All</div>
          <div><input type="radio" value="selected" v-model="minutes_selected"> Selected</div>

          <div class="minute-1 minutes">
            <div><input type="checkbox" :value="0" v-model="minutes"> 0</div>
            <div><input type="checkbox" :value="1" v-model="minutes"> 1</div>
            <div><input type="checkbox" :value="2" v-model="minutes"> 2</div>
            <div><input type="checkbox" :value="3" v-model="minutes"> 3</div>
            <div><input type="checkbox" :value="4" v-model="minutes"> 4</div>
            <div><input type="checkbox" :value="5" v-model="minutes"> 5</div>
            <div><input type="checkbox" :value="6" v-model="minutes"> 6</div>
            <div><input type="checkbox" :value="7" v-model="minutes"> 7</div>
            <div><input type="checkbox" :value="8" v-model="minutes"> 8</div>
            <div><input type="checkbox" :value="9" v-model="minutes"> 9</div>
            <div><input type="checkbox" :value="10" v-model="minutes"> 10</div>
            <div><input type="checkbox" :value="11" v-model="minutes"> 11</div>
          </div>
          <div class="minute-2 minutes">
            <div><input type="checkbox" :value="12" v-model="minutes"> 12</div>
            <div><input type="checkbox" :value="13" v-model="minutes"> 13</div>
            <div><input type="checkbox" :value="14" v-model="minutes"> 14</div>
            <div><input type="checkbox" :value="15" v-model="minutes"> 15</div>
            <div><input type="checkbox" :value="16" v-model="minutes"> 16</div>
            <div><input type="checkbox" :value="17" v-model="minutes"> 17</div>
            <div><input type="checkbox" :value="18" v-model="minutes"> 18</div>
            <div><input type="checkbox" :value="19" v-model="minutes"> 19</div>
            <div><input type="checkbox" :value="20" v-model="minutes"> 20</div>
            <div><input type="checkbox" :value="21" v-model="minutes"> 21</div>
            <div><input type="checkbox" :value="22" v-model="minutes"> 22</div>
            <div><input type="checkbox" :value="23" v-model="minutes"> 23</div>
          </div>

          <div class="minute-3 minutes">
            <div><input type="checkbox" :value="24" v-model="minutes"> 24</div>
            <div><input type="checkbox" :value="25" v-model="minutes"> 25</div>
            <div><input type="checkbox" :value="26" v-model="minutes"> 26</div>
            <div><input type="checkbox" :value="27" v-model="minutes"> 27</div>
            <div><input type="checkbox" :value="28" v-model="minutes"> 28</div>
            <div><input type="checkbox" :value="29" v-model="minutes"> 29</div>
            <div><input type="checkbox" :value="30" v-model="minutes"> 30</div>
            <div><input type="checkbox" :value="31" v-model="minutes"> 31</div>
            <div><input type="checkbox" :value="32" v-model="minutes"> 32</div>
            <div><input type="checkbox" :value="33" v-model="minutes"> 33</div>
            <div><input type="checkbox" :value="34" v-model="minutes"> 34</div>
            <div><input type="checkbox" :value="35" v-model="minutes"> 35</div>
          </div>

          <div class="minute-4 minutes">
            <div><input type="checkbox" :value="36" v-model="minutes"> 36</div>
            <div><input type="checkbox" :value="37" v-model="minutes"> 37</div>
            <div><input type="checkbox" :value="38" v-model="minutes"> 38</div>
            <div><input type="checkbox" :value="39" v-model="minutes"> 39</div>
            <div><input type="checkbox" :value="40" v-model="minutes"> 40</div>
            <div><input type="checkbox" :value="41" v-model="minutes"> 41</div>
            <div><input type="checkbox" :value="42" v-model="minutes"> 42</div>
            <div><input type="checkbox" :value="43" v-model="minutes"> 43</div>
            <div><input type="checkbox" :value="44" v-model="minutes"> 44</div>
            <div><input type="checkbox" :value="45" v-model="minutes"> 45</div>
            <div><input type="checkbox" :value="46" v-model="minutes"> 46</div>
            <div><input type="checkbox" :value="47" v-model="minutes"> 47</div>
          </div>

          <div class="minute-5 minutes">
            <div><input type="checkbox" :value="48" v-model="minutes"> 48</div>
            <div><input type="checkbox" :value="49" v-model="minutes"> 49</div>
            <div><input type="checkbox" :value="50" v-model="minutes"> 50</div>
            <div><input type="checkbox" :value="51" v-model="minutes"> 51</div>
            <div><input type="checkbox" :value="52" v-model="minutes"> 52</div>
            <div><input type="checkbox" :value="53" v-model="minutes"> 53</div>
            <div><input type="checkbox" :value="54" v-model="minutes"> 54</div>
            <div><input type="checkbox" :value="55" v-model="minutes"> 55</div>
            <div><input type="checkbox" :value="56" v-model="minutes"> 56</div>
            <div><input type="checkbox" :value="57" v-model="minutes"> 57</div>
            <div><input type="checkbox" :value="58" v-model="minutes"> 58</div>
            <div><input type="checkbox" :value="59" v-model="minutes"> 59</div>
          </div>

        </div>

        <div class="col-3">
          <h1>시간(Hours)</h1>
          <div><input type="radio" value="all" v-model="hours_selected"> All</div>
          <div><input type="radio" value="selected" v-model="hours_selected"> Selected</div>

          <div class="hour-1 hours">
            <div><input type="checkbox" :value="0" v-model="hours"> 0</div>
            <div><input type="checkbox" :value="1" v-model="hours"> 1</div>
            <div><input type="checkbox" :value="2" v-model="hours"> 2</div>
            <div><input type="checkbox" :value="3" v-model="hours"> 3</div>
            <div><input type="checkbox" :value="4" v-model="hours"> 4</div>
            <div><input type="checkbox" :value="5" v-model="hours"> 5</div>
            <div><input type="checkbox" :value="6" v-model="hours"> 6</div>
            <div><input type="checkbox" :value="7" v-model="hours"> 7</div>
            <div><input type="checkbox" :value="8" v-model="hours"> 8</div>
            <div><input type="checkbox" :value="9" v-model="hours"> 9</div>
            <div><input type="checkbox" :value="10" v-model="hours"> 10</div>
            <div><input type="checkbox" :value="11" v-model="hours"> 11</div>
          </div>
          <div class="hour-2 hours">
            <div><input type="checkbox" :value="12" v-model="hours"> 12</div>
            <div><input type="checkbox" :value="13" v-model="hours"> 13</div>
            <div><input type="checkbox" :value="14" v-model="hours"> 14</div>
            <div><input type="checkbox" :value="15" v-model="hours"> 15</div>
            <div><input type="checkbox" :value="16" v-model="hours"> 16</div>
            <div><input type="checkbox" :value="17" v-model="hours"> 17</div>
            <div><input type="checkbox" :value="18" v-model="hours"> 18</div>
            <div><input type="checkbox" :value="19" v-model="hours"> 19</div>
            <div><input type="checkbox" :value="20" v-model="hours"> 20</div>
            <div><input type="checkbox" :value="21" v-model="hours"> 21</div>
            <div><input type="checkbox" :value="22" v-model="hours"> 22</div>
            <div><input type="checkbox" :value="23" v-model="hours"> 23</div>
          </div>
        </div>

      </div>

      <hr>
      <div class="row">
        {{minutes}}
      </div>
    </div>
</template>
<script>
    export default {
        name: '',      //컴포넌트 이름
        components: {  //다른 컴포넌트 사용 시 컴포넌트를 import하고, 배열로 저장
        },
        data() {       //html과 자바스크립트 코드에서 사용할 데이터 변수 선언
            return {
                minutes_selected: '',
                minutes: [],
                hours_selected: '',
                hours: [],

            };
        },
        setup() {},      //컴포지션 API
        created() {},    //컴포넌트가 생성되면 실행
        mounted() {},    //template에 정의된 html 코드가 랜더링된 후 실행
        unmounted() {},  //unmount가 완료된 후 실행
        methods: {}      // 컴포넌트 내에서 사용할 메소드 정의
    }
</script>

<style scoped>
.minutes{
  display: inline-block;
  border: 1px solid gray;
  width: 45px;
  margin-right: 3px;
}
.hours{
  display: inline-block;
  border: 1px solid gray;
  width: 45px;
  margin-right: 3px;
}
</style>
