<template>
  <div class="zyb-alert-page">
    <p class="title">Alert 警告提示</p>
    <p class="overall">概述</p>
    <p class="description">轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p>
    <div class="content">
      <el-button :plain="true" @click="open">点击显示普通提示</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zybAlert',
  data() {
    return {};
  },
  methods: {
    open() {
      this.$message({
        type: 'info',
        duration: 0,
        message: 'test'
      });
    }
  }
}
</script>

<style lang="less" scoped>
.zyb-alert-page {
  padding: 40px;
  .title {
    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:24px;
  }
  .overall {
    font-size:20px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:18px;
    margin: 40px 0 0 0;
  }
  .description {
    font-size:12px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(85,85,85,1);
    line-height:12px;
    margin: 16px 0 0 0;
  }
  .content {
    margin: 36px 0 0 0;
    padding: 40px;
    background: #FFF;
  }

}
</style>
<style>
.el-message {
  min-width: 500px;
}
</style>
