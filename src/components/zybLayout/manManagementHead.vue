<template>
  <div class="top-bar">
    <div class="logo">
      <div class="logo-box" :class="{'unfoldBox': !isFolded}">
        <img src="../../images/top-bar/logo_big.svg" class="big-logo" v-if="isFolded">
        <img src="../../images/top-bar/logo_sc_small.png" class="small-logo" v-else>
      </div>
      <!-- 没有icon暂时忽略折叠 -->
      <!-- <div class="pick-icon" :class="{'unfold': isFolded}" @click="foldFn"></div> -->
      <!-- <div
        class="right"
        @mouseover="mouseOver"
        @mouseout="mouseOut">
        <img :src="imgSrc || '@/images/avatar.png'" alt="avatar">
        <span>{{userName}}</span>
        <div
          class="cover"
          v-show="coverShow"
          @click="logout">
          <a href="javascript:;" >退出</a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import eventBus from '@/components/zybLayout/eventBus';
export default{
  props: ['userName', 'imgSrc'],
  data() {
    return {
      coverShow: false,
      triangleToggle: true,
      isFolded: true
    };
  },
  methods: {
    mouseOver() {
      this.coverShow = true;
      this.triangleToggle = false;
    },
    mouseOut() {
      this.coverShow = false;
      this.triangleToggle = true;
    },
    foldFn() {
      this.isFolded = !this.isFolded;
      eventBus.$emit('foldFn', !this.isFolded);
    },
    logout() {

    }
  }
};
</script>

<style scoped lang="less">
  .top-bar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    z-index: 1000;
    background-color: #fff;
    border-bottom: 1px solid #F0F1F5;
    box-sizing: border-box;
  }
  .logo{
    height: 49px;
    width:100%;
    background-color: #ffffff;
    padding: 0 40px 0 0px;
    position: absolute;
    top:0;
    left:0;
    z-index: 999;

    .logo-box{
      height: 50px;
      width: 160px;
      background-color: #42C57A;
      display: inline-block;
      position: relative;
      margin-right: 20px;
      img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .big-logo{
        width: 90px;
        height: 32px;
      }

      .small-logo{
        width: 48px;
        height: 48px;
      }
    }

    .unfoldBox{
      width: 50px;
    }

    .pick-icon{
      background: url('../../images/top-bar/ic_topbar_unfold_normal.svg') no-repeat;
      display: inline-block;
      height: 28px;
      width: 28px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background-position: center;

      &:hover{
        background-image: url('../../images/top-bar/ic_topbar_unfold_hover.svg');
      }
    }

    .unfold{
      background-image: url('../../images/top-bar/ic_topbar_fold_normal.svg');
      &:hover{
        background-image: url('../../images/top-bar/ic_topbar_fold_hover.svg');
      }
    }

  .right{
    position: relative;
    float: right;
    border-radius: 6px;
    font-size: 0;
    text-align: center;
    min-width: 80px;
    height: 50px;

    .triangle-box{
      display: inline-block;
      height: 8px;
      margin-left: 10px;
      width: 8px;
      vertical-align: middle;
    }

    span{
      color: #333333;
      line-height: 50px;
      vertical-align: middle;
      font-size:12px;
    }

    img{
      height:24px;
      width: 24px;
      vertical-align: middle;
      margin:0 6px;
      border-radius: 50%;
    }
  }
  }

  .crumb{
    position: absolute;
    bottom:-50px;
    left:400px;
    height: 40px;

  }

  .cover{
    position: absolute;
    right:-10px;
    top:50px;
    height:30px;
    width:100%;
    font-size: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background: #fff;
    line-height:30px;

    &:hover{
       background: #4cc760;
      a{
        color: #fff;
      }

    }
  }
</style>
