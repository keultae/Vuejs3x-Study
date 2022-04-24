import axios from "axios";

export default {
  methods: {
    async $api(url, method, data, thenFun, finaFun) {

      return (await axios({
        method: method,
        url,
        data
      }).then( res => {
        console.log("then() " + JSON.stringify(res))
        thenFun(res);
      })
      .catch(e => {
        console.log("catch() " + e);
      })
      .finally( () => {
        console.log("finally() ");
        finaFun();
      })
      ).data;
    }
  }
}