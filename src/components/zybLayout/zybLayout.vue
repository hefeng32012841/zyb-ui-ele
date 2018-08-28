<template>
  <div>
    <manManagementHead :userName="userName" :imgSrc="imgSrc"></manManagementHead>
    <div id="layout-content" :class="{'isFoldBox': isFold}">
      <div id="layout-left" :class="{'isFold': isFold}">
        <manManagementMenu v-bind:menuList="menuList"></manManagementMenu>
      </div>
      <div id="layout-right">
        <div id="layout-grid">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "./eventBus.js";
import { zybMenu } from "./menu.js";
import manManagementHead from "./manManagementHead.vue";
import manManagementMenu from "./manManagementMenu.vue";

export default {
  data() {
    return {
      menuList: [],
      userName: "用户1",
      imgSrc: "",
      isFold: false
    };
  },
  mounted() {
    this.initMenu();
  },
  components: {
    manManagementHead,
    manManagementMenu
  },
  beforeMount() {
    this.menuList = [...zybMenu];
    eventBus.$on("initMenu", this.initMenu);
    eventBus.$on("changeMenuActiveParent", this.changeMenuActiveParent);
    eventBus.$on("changeMenuActiveChild", this.changeMenuActiveChild);
  },
  methods: {
    initMenu() {
      let _hash = window.location.hash.split("?")[0].split("/")[1];
      console.log(_hash);
      let indexP = 0,
        indexC = 0;
      zybMenu.forEach((v, i) => {
        v.children.forEach((cv, ci) => {
          if (cv.link == _hash) {
            indexP = i;
            indexC = ci;
            return;
          }
        });
      });
      this.changeMenuActiveParent(indexP);
      this.changeMenuActiveChild({ indexP, indexC });
    },
    changeMenuActiveParent(index) {
      this.menuList[index].fold = !this.menuList[index].fold;
    },
    changeMenuActiveChild({ indexP = 0, indexC = 0 }) {
      this.menuList[indexP].children[indexC].fold = true;
      this.resetMenu(indexP, indexC);
    },
    // 可传false
    resetMenu(stayParentId, stayChildId) {
      this.menuList.forEach((p_v, p_i) => {
        if (stayParentId != p_i) {
          p_v.fold = false;
        }

        const { children = [] } = p_v;
        children.length &&
          children.forEach((c_v, c_i) => {
            if (stayChildId != c_i) {
              c_v.fold = false;
            }
          });
      });
    }
  }
};
</script>

<style lang='less'>
html,
body {
  height: 100%;
  width: 100%;
  background: #f2f2f2;
}
body {
  padding-top: 50px;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.root {
  position: absolute;
  top: 123px;
  left: 190px;
  bottom: 0px;
  right: 30px;
  background-color: #fff;
  overflow-y: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px;
}
#layout-content {
  width: 100%;
  padding-left: 160px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #f2f2f2;

  &.isFoldBox {
    padding-left: 50px;
  }
}
#layout-left {
  background-color: #fefefe;
  width: 160px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-right: 1px solid #f0f1f5;
  position: fixed;
  left: 0;
  bottom: 0px;
  height: 100%;
  overflow: scroll;
  z-index: 900;

  &.isFold {
    width: 50px;
    overflow: initial;
  }

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
}

#layout-right {
  padding: 20px;
  z-index: 800;
}
#layout-grid {
  min-height: ~"calc(100vh - 110px)";
  border-radius: 2px;
  box-sizing: border-box;
}
</style>
