<template>
  <div class="color-item"
  :data-clipboard-text="colorDef"
  @click="copy"
  title="点击复制">
    <i :style="{backgroundColor: colorValue}"></i>
    <span>{{ colorName }}</span>
    <p>{{ colorValue }}</p>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  name: "colorItem",
  props: {
    colorDef: String,
    colorName: String,
    colorValue: String
  },
  methods: {
    copy() {
      const clipboard = new Clipboard('.color-item');
      clipboard.on('success', e => {
        console.log(this)
        this.$message({
          message: '复制成功',
          type: 'success'
        });
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        this.$message({
          message: '该浏览器不支持自动复制',
          type: 'success'
        });
        clipboard.destroy()
      })
    }
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
