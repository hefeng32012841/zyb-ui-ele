<template>
    <div id="root">
      <div class="user-menu">
        <transition name="menu-fade">
          <ul :class="{folded: isFolded}">
            <li
              @mouseover="showSecondMenu(menu.linkId)"
              @mouseout="showSecondMenu(0)"
              v-for="(menu, index) in menuData"
              :key="index">
              <a
                href="javascript:;"
                @click.stop="toggleMenu(menu.link,menu.linkId)"
                class="toggleMenu"
                :class="{'hoverParent': showSecondMenuId == menu.linkId ||
                  (currMenuParentId  == menu.linkId && isFolded)}">
                <em class="cmn-icon cmn-icons " :class="{'active': menu.toggle,
                  'cmn-icons_nav-person': menu.linkId == 4,
                  'cmn-icons_nav-sc': menu.linkId == 5,
                  'cmn-icons_nav-train': menu.linkId == 6,
                  'cmn-icons_nav-teacher': menu.linkId == 7,
                  'cmn-icons_nav-setting': menu.linkId == 14,
                  'cmn-icons_nav-scheduling': menu.linkId == 23,
                  'cmn-icons_nav-qc': menu.linkId == 41,
                  'cmn-icons_nav-data': menu.linkId == 60,
                  'cmn-icons_nav-notice': menu.linkId == 72,
                  'cmn-icons_nav-dispose': menu.linkId == 82
                }"></em>
                <span v-show="!isFolded || showSecondMenuId == menu.linkId">{{menu.title}}</span>
              </a>
              <div class="triangle-box" v-if="menu.children.length && !isFolded">
                <triangle :toggleTop="menu.toggle" ></triangle>
              </div>
              <ul  class="subMenu" v-show="menu.toggle && !isFolded || showSecondMenuId == menu.linkId && isFolded">
                <li
                  v-for="(item, itemIndex) in menu.children"
                  :key="itemIndex"
                  @click.stop="chooseMenu(item.linkId,item.link)"
                  :class="{activeLi: currMenu == item.linkId}">
                  <a
                    href="javascript:;"
                    :class="{active:currMenu == item.linkId}">
                    <span>{{item.title}}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </div>
    </div>
</template>

<script>
import triangle from '@/components/layout/triangle';
import eventBus from '@/components/layout/eventBus';
export default{
  props: ['menuList'],
  data() {
    return {
      // 当前激活二级menu的ID
      currMenu: null,
      // 当前激活的二级菜单对应的一级菜单ID
      currMenuParentId: null,
      // 当前激活的一级菜单
      // currToggleMenu: null,
      menuData: null,
      // 菜单的展开收缩
      isFolded: false,
      // 折叠状态下，展示的二级菜单ID
      showSecondMenuId: false,
      // 折叠状态下，二级菜单是否展示选中背景
      showSecondMenuBgId: false
    };
  },
  components: {
    triangle
  },
  created() {
    eventBus.$on('foldFn', this.foldFn);
  },
  watch: {
    menuList(curVal) {
      this.menuData = curVal;
      let secondLevelMenu = [];
      curVal.forEach(item => {
        secondLevelMenu = [...secondLevelMenu, ...item.children];
      });
      const pathnameStr = location.pathname;
      // const urlHashArr = location.href.split('/');
      // url中有可能在hash后跟查询参数（注意：此处并不是location.search）
      // const urlHash = urlHashArr[urlHashArr.length - 1].split('?')[0];
      secondLevelMenu.forEach(item => {
        if (item.link.indexOf(pathnameStr) !== -1) {
          this.currMenu = item.linkId;
          this.currMenuParentId = item.parentId;
          sessionStorage.setItem('hasBtn', JSON.stringify(item.children));
          eventBus.$emit('hasBtn', item.children);
          return false;
        }
      });
      this.menuData.forEach((item) => {
        this.$set(item, 'toggle', false);
        if (this.currMenuParentId === +item.linkId) {
          item.toggle = true;
        }
      });
      let str = JSON.stringify(this.menuData);
      sessionStorage.setItem('menuData', str);
    }
  },
  methods: {
    toggleMenu(menuLink, menuId) {
      // 折叠状态直接退出函数
      if (this.isFolded) {
        return;
      }

      if (menuLink) {
        location.href = location.origin + menuLink;
      }
      else {
        this.menuData.forEach((item) => {
          if (item.linkId === menuId) {
            item.toggle = !item.toggle;
          }
        });
      }
      let str = JSON.stringify(this.menuData);
      sessionStorage.setItem('menuData', str);
    },
    chooseMenu(menuId, link) {
      this.currMenu = menuId;
      sessionStorage.setItem('currMenu', menuId);
      location.href = location.origin + link;
    },

    /* 菜单的展开收缩
    *
    */
    foldFn(fold) {
      this.isFolded = fold;

      // 展开折叠菜单，初始换
      if (fold) {
        this.showSecondMenuBgId = this.currMenuParentId;
      }
      else {
        this.menuData.forEach((item) => {
          if (+item.linkId === this.currMenuParentId) {
            item.toggle = true;
          }
          else {
            item.toggle = false;
          }
        });
      }

    },

    /* 收缩状态下，展开二级菜单
    *  @params {String} 二级菜单所属的一级菜单ID
    */
    showSecondMenu(id) {
      if (this.isFolded) {
        this.showSecondMenuId = id;
      }
    }
  }
};
</script>


<style scoped lang="less">
  @nav-bg-color: #f8f8f8;
  @main-bg-color: #f2f2f2;
  @container-border-color: #e5e5e5;
  @fruit-color: #42C57A;
  @password-color: #fb7f2d;
  @cmn-color_font: #323233;
  #root{
    background: #fff;
  }
  #root div{
    border:none;
  }

  .el-menu-item-group__title{
    padding-top:0px!important;
  }

  .user-menu {
    ul {
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

        .triangle-box{
          position: absolute;
          top: 0px;
          right: 15px;
          height: 8px;
          width: 8px;
        }

        .toggleMenu{
          text-indent: 16px;
          text-decoration: none;
          color: @cmn-color_font;
          display: inline-block;
          width: 100%;
          height: 48px;

          &:hover{
            background: #F7F8FB;
          }

           em{
            color: #8A8F94;
            font-size: 16px;
            vertical-align: middle;
            margin-right: 4px;
           }

           span{
            vertical-align: middle;
           }

        }

        .hoverParent{
          background-color: #F7F8FB;
        }
        .subMenu{
          margin: 0;
          li {
            height: 32px;
            a {
              margin-left: 36px;
              span{
                font-size:12px;
                color: #525354;
              }
            }

            &:hover {
               background: #F7F8FB;
             }

            .active{
               color:  @fruit-color;

               span{
                font-weight: bold;
                color:  @fruit-color;
               }
               &::before{
                 content: '';
                 position: absolute;
                 top: 0;
                 left: 0px;
                 height: 40px;
                 width: 3px;
                 background-color: @fruit-color;
               }
            }
          }

          .activeLi{
            background-color:  #F7F8FB;
          }
        }

        .toggle{
          display: none;
        }

        .cmn-icon {
          color: @container-border-color;
        }
      }
    }
    .folded{
      z-index: 1000;
      .toggleMenu{
        span{
          position: absolute;
          left: 50px;
          width: 144px;
          background: #F7F8FB;
          line-height: 47px;

          &:hover{
            background-color: #F0F1F5;
          }
        }
      }

      .subMenu{
        position: absolute;
        top: 47px;
        left: 50px;
        width: 144px;
        text-align: left;
        background: rgba(247,248,251,1);

        .activeLi{
          background-color: #F0F1F5;
        }

        li{
          &:hover{
            background-color: #F0F1F5;
          }
        }

        a{
          margin-left: 16px;

          &:before{
            display: none;
          }
        }
      }
    }
  }
  .menu-fade-enter-active, .menu-fade-leave-active {
    transition: opacity .5s;
  }
  .menu-fade-enter, .menu-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    width: 50px;
  }
</style>
