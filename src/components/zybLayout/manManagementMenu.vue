<template>
  <div id="root">
    <transition name="menu-fade">
      <ul class="menu-list">
        <li
          v-for="(menu, index) in menuList"
          :key="index"
          @click.stop="toggleMenu(index)"
          :class="menu.fold ? 'fold' : 'unfold'">
          <a href="javascript:;" class="toggleMenu">
            <span>{{menu.title}}</span>
          </a>
          <ul class="subMenu" v-show="menu.fold">
            <li
              v-for="(item, itemIndex) in menu.children"
              :key="itemIndex"
              @click.stop="chooseMenu(index, itemIndex, item.link)"
              :class="{ activeLi: item.fold }">
              <a href="javascript:;">
                <span>{{item.title}}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import eventBus from "./eventBus";
export default {
  props: ["menuList"],
  data() {
    return {};
  },
  methods: {
    toggleMenu(index) {
      eventBus.$emit("changeMenuActiveParent", index);
    },
    chooseMenu(indexP, indexC, link) {
      eventBus.$emit("changeMenuActiveChild", { indexP, indexC });
      this.$router.push(`/${link}`);

    },
    showSecondMenu(id) {}
  }
};
</script>


<style scoped lang="less">
@nav-bg-color: #f8f8f8;
@main-bg-color: #f2f2f2;
@container-border-color: #e5e5e5;
@fruit-color: #42c57a;
@password-color: #fb7f2d;
@cmn-color_font: #323233;
#root {
  background: #fff;
}

.el-menu-item-group__title {
  padding-top: 0px !important;
}

.menu-list {
  list-style: none;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 20px;

  li {
    display: block;
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: @cmn-color_font;
    position: relative;
    a {
      margin-left: 18px;
    }
    &.fold:before {
      content: "";
      width: 0;
      height: 0;
      border: 4px solid;
      position: absolute;
      top: 20px;
      right: 15px;
      border-color: #83868f transparent transparent transparent;
      transition: transform 0.4s;
    }

    &.unfold:before {
      content: "";
      width: 0;
      height: 0;
      border: 4px solid;
      position: absolute;
      top: 15px;
      right: 15px;
      border-color: transparent transparent #83868f transparent;
      transition: transform 0.4s;
    }
  }

  .subMenu {
    li {
      cursor: pointer;
      height: 32px;
      a {
        font-size: 12px;
        color: inherit;
        margin-left: 18px;
      }
      &:hover {
        background: #f7f8fb;
      }
      &.activeLi {
        background-color: #f7f8fb;
        color: @fruit-color;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0px;
          height: 40px;
          width: 3px;
          background-color: @fruit-color;
        }
      }
    }
  }
}
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.5s;
}
.menu-fade-enter, .menu-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 50px;
}
</style>
