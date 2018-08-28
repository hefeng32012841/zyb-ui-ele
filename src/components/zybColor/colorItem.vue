<template>
  <div class="color-item" title="点击复制">
    <i :style="{backgroundColor: colorValue}"></i>
    <span>{{ colorName }}</span>
    <p>{{ colorValue }}</p>
  </div>
</template>

<script>
export default {
  name: "colorItem",
  props: {
    colorName: String,
    colorValue: String
  }
};
</script>

<style scoped lang="less">
.color-item {
  cursor: pointer;
  min-width: 100px;
  display: inline-block;
  i {
    display: block;
    width: 40px;
    height: 40px;
    margin: 10px 0;
    border-radius: 50%;
  }
  span {
    font-size: 14px;
    color: @zyb-font-reminder;
  }
  p {
    line-height: 2;
  }
}
</style>
