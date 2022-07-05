
<template>
  <div class="abc">
  safd sdfadsfs {{ tale}}
    <img src="@/assets/img/hsyj-kai.png" />
    <home />
    <vue-fun />
  </div>
</template>

<script>
import Home from "@/home.vue";
import VueFun from "@/vueFun.js";
export default {
    name:'app',
  components: {VueFun, Home},
  data(){
      return{
        tale:'小白'
      }
    }
}
</script>


<style lang="less">
div{
  background: url("./assets/img/hsyj-kai.png");
  color: @abcd;
}

</style>
