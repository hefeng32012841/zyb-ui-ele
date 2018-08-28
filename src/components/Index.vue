<template>
  <div class="welcome-page">
    <p class="title">PC后台控件库使用规范</p>
    <span @click="enter">点击进入</span>
  </div>
</template>

<script>
import eventBus from "./zybLayout/eventBus.js";
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    enter() {
      let indexP = 0;
      let indexC = 1; 
      this.$router.push("/zybColor");
      eventBus.$emit("changeMenuActiveChild", { indexP, indexC});
    }
  }
};
</script>

<style scoped lang="less">
.welcome-page {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  background-image: linear-gradient(44deg, #009a5d 0%, #26c563 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .title {
    font-size: 48px;
    position: relative;
    &::after {
      content: "V1.0.0";
      font-size: 14px;
      position: absolute;
      top: -20px;
      right: 0;
    }
  }
  span {
    text-decoration: underline;
    position: absolute;
    margin-top: 100px;
    cursor: pointer;
  }
}
</style>
