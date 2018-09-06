<template>
  <div class="zyb-alert-page">
    <p class="title">Alert 警告提示</p>
    <p class="overall">概述</p>
    <p class="description">轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p>
    <div class="content" v-highlight>
      <h2>默认样式</h2>
      <div>
        <el-button :plain="true" @click="open1('info')">普通提示</el-button>
        <el-button :plain="true" @click="open1('warning')">警告提示</el-button>
        <el-button :plain="true" @click="open1('success')">成功提示</el-button>
        <el-button :plain="true" @click="open1('error')">失败提示</el-button>
      </div>
      <div class="highlight">
        <pre>
          <code class="html javascript">
&lttemplate&gt
  &ltel-button :plain="true" @click="open1('info')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open1('warning')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open1('success')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open1('error')"&gt打开消息提示&lt/el-button&gt
&lt/template&gt

&ltscript&gt
export default {
  methods: {
    open1(type) {
      this.$message({
        type: type,
        duration: 3000,
        message: '这是一条消息提示'
      });
    }
  }
}
&lt/script&gt
          </code>
        </pre>
      </div>

      <h2>暗黑样式</h2>
      <div>
        <el-button :plain="true" @click="open2('info')">普通提示</el-button>
        <el-button :plain="true" @click="open2('warning')">警告提示</el-button>
        <el-button :plain="true" @click="open2('success')">成功提示</el-button>
        <el-button :plain="true" @click="open2('error')">失败提示</el-button>
      </div>
      <div class="highlight">
        <pre>
          <code class="html javascript">
&lttemplate&gt
  &ltel-button :plain="true" @click="open2('info')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open2('warning')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open2('success')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open2('error')"&gt打开消息提示&lt/el-button&gt
&lt/template&gt

&ltscript&gt
export default {
  methods: {
    open2(type) {
      this.$message({
        type: type,
        duration: 3000,
        message: '这是一条消息提示',
        customClass: 'el-message-dark'
      });
    }
  }
}
&lt/script&gt
          </code>
        </pre>
      </div>
      <h2>纯白样式</h2>
      <div>
        <el-button :plain="true" @click="open3('info')">普通提示</el-button>
        <el-button :plain="true" @click="open3('warning')">警告提示</el-button>
        <el-button :plain="true" @click="open3('success')">成功提示</el-button>
        <el-button :plain="true" @click="open3('error')">失败提示</el-button>
      </div>
      <div class="highlight">
        <pre>
          <code class="html javascript">
&lttemplate&gt
  &ltel-button :plain="true" @click="open3('info')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open3('warning')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open3('success')"&gt打开消息提示&lt/el-button&gt
  &ltel-button :plain="true" @click="open3('error')"&gt打开消息提示&lt/el-button&gt
&lt/template&gt

&ltscript&gt
export default {
  methods: {
    open3(type) {
      this.$message({
        type: type,
        duration: 3000,
        message: '这是一条消息提示',
        customClass: 'el-message-light'
      });
    }
  }
}
&lt/script&gt
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zybAlert',
  // 每次加载组件自动渲染代码样式
  directives: {
    highlight: (el) => {
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block)=>{
        hljs.highlightBlock(block)
      });
    }
  },
  methods: {
    open1(type) {
      this.$message({
        type: type,
        duration: 3000,
        message: '这是一条消息提示',
      });
    },
    open2(type) {
      this.$message({
        type: type,
        duration: 3000,
        message: '这是一条消息提示',
        customClass: 'el-message-dark'
      });
    },
    open3(type) {
      this.$message({
        type: type,
        duration: 3000,
        message: '这是一条消息提示',
        customClass: 'el-message-light'
      });
    }
  }
}
</script>

<style lang="less" scoped>
.zyb-alert-page {
  font-family:PingFang-Regular;
  padding: 40px;
  h2 {
    padding: 20px  0 20px 0;
    font-size: 18px;
  }
  .title {
    font-size:28px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:24px;
  }
  .overall {
    font-size:20px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:18px;
    margin: 40px 0 0 0;
  }
  .description {
    font-size:12px;
    font-weight:400;
    color:rgba(85,85,85,1);
    line-height:12px;
    margin: 16px 0 0 0;
  }
  .content {
    margin: 36px 0 0 0;
    padding: 20px 40px 40px 40px;
    background: #FFF;
    border-radius: 3px;
  }
  code {
    font-family: DejaVuSansMono;
    line-height: 1.5;
    padding: 18px 24px;
    font-size: 13px;
  }
}
</style>
<style lang="less">
  @import "./zybAlert.less";
</style>
<style>
  @import "./highlight/styles/default.css";
</style>
