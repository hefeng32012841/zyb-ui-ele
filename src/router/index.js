import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import zybGirds from '@/components/zybGirds/zybGirds.vue'
import zybColor from '@/components/zybColor/zybColor.vue'
import zybFont from '@/components/zybFont/zybFont.vue'
import zybIcons from '@/components/zybIcons/zybIcons.vue'
import zybButton from '@/components/zybButton/zybButton.vue'
import zybDroButton from '@/components/zybDroButton/zybDroButton.vue'
import zybTable from '@/components/zybTable/zybTable.vue'
import zybCard from '@/components/zybCard/zybCard.vue'
import zybSwipe from '@/components/zybSwipe/zybSwipe.vue'
import zybCheckbox from '@/components/zybCheckbox/zybCheckbox.vue'
import zybRadio from '@/components/zybRadio/zybRadio.vue'
import zybInput from '@/components/zybInput/zybInput.vue'
import zybSearch from '@/components/zybSearch/zybSearch.vue'
import zybNumber from '@/components/zybNumber/zybNumber.vue'
import zybSwitch from '@/components/zybSwitch/zybSwitch.vue'
import zybSlide from '@/components/zybSlide/zybSlide.vue'
import zybDatepicker from '@/components/zybDatepicker/zybDatepicker.vue'
import zybTimePicker from '@/components/zybTimePicker/zybTimePicker.vue'
import zybSelect from '@/components/zybSelect/zybSelect.vue'
import zybCascader from '@/components/zybCascader/zybCascader.vue'
import zybUpload from '@/components/zybUpload/zybUpload.vue'
import zybAlert from '@/components/zybAlert/zybAlert.vue'
import zybTimeLine from '@/components/zybTimeLine/zybTimeLine.vue'
import zybTooltip from '@/components/zybTooltip/zybTooltip.vue'
import zybProgress from '@/components/zybProgress/zybProgress.vue'
import zybTree from '@/components/zybTree/zybTree.vue'
import zybCollapse from '@/components/zybCollapse/zybCollapse.vue'
import zybScrollbar from '@/components/zybScrollbar/zybScrollbar.vue'
import zybDivider from '@/components/zybDivider/zybDivider.vue'
import zybTitle from '@/components/zybTitle/zybTitle.vue'
import zybModel from '@/components/zybModel/zybModel.vue'
import zybNotification from '@/components/zybNotification/zybNotification.vue'
import zybSpin from '@/components/zybSpin/zybSpin.vue'
import zybPreview from '@/components/zybPreview/zybPreview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/zybGirds',
      name: 'zybGirds',
      component: zybGirds
    },
    {
      path: '/zybColor',
      name: 'zybColor',
      component: zybColor
    },
    {
      path: '/zybFont',
      name: 'zybFont',
      component: zybFont
    },
    {
      path: '/zybIcons',
      name: 'zybIcons',
      component: zybIcons
    },
    {
      path: '/zybButton',
      name: 'zybButton',
      component: zybButton
    },
    {
      path: '/zybDroButton',
      name: 'zybDroButton',
      component: zybDroButton
    },
    {
      path: '/zybTable',
      name: 'zybTable',
      component: zybTable
    },
    {
      path: '/zybCard',
      name: 'zybCard',
      component: zybCard
    },
    {
      path: '/zybSwipe',
      name: 'zybSwipe',
      component: zybSwipe
    },
    {
      path: '/zybCheckbox',
      name: 'zybCheckbox',
      component: zybCheckbox
    },
    {
      path: '/zybRadio',
      name: 'zybRadio',
      component: zybRadio
    },
    {
      path: '/zybInput',
      name: 'zybInput',
      component: zybInput
    },
    {
      path: '/zybSearch',
      name: 'zybSearch',
      component: zybSearch
    },
    {
      path: '/zybNumber',
      name: 'zybNumber',
      component: zybNumber
    },
    {
      path: '/zybSwitch',
      name: 'zybSwitch',
      component: zybSwitch
    },
    {
      path: '/zybSlide',
      name: 'zybSlide',
      component: zybSlide
    },
    {
      path: '/zybDatepicker',
      name: 'zybDatepicker',
      component: zybDatepicker
    },
    {
      path: '/zybTimePicker',
      name: 'zybTimePicker',
      component: zybTimePicker
    },
    {
      path: '/zybSelect',
      name: 'zybSelect',
      component: zybSelect
    },
    {
      path: '/zybCascader',
      name: 'zybCascader',
      component: zybCascader
    },
    {
      path: '/zybUpload',
      name: 'zybUpload',
      component: zybUpload
    },
    {
      path: '/zybAlert',
      name: 'zybAlert',
      component: zybAlert
    },
    {
      path: '/zybTimeLine',
      name: 'zybTimeLine',
      component: zybTimeLine
    },
    {
      path: '/zybTooltip',
      name: 'zybTooltip',
      component: zybTooltip
    },
    {
      path: '/zybProgress',
      name: 'zybProgress',
      component: zybProgress
    },
    {
      path: '/zybTree',
      name: 'zybTree',
      component: zybTree
    },
    {
      path: '/zybCollapse',
      name: 'zybCollapse',
      component: zybCollapse
    },
    {
      path: '/zybScrollbar',
      name: 'zybScrollbar',
      component: zybScrollbar
    },
    {
      path: '/zybDivider',
      name: 'zybDivider',
      component: zybDivider
    },
    {
      path: '/zybTitle',
      name: 'zybTitle',
      component: zybTitle
    },
    {
      path: '/zybModel',
      name: 'zybModel',
      component: zybModel
    },
    {
      path: '/zybNotification',
      name: 'zybNotification',
      component: zybNotification
    },
    {
      path: '/zybSpin',
      name: 'zybSpin',
      component: zybSpin
    },
    {
      path: '/zybPreview',
      name: 'zybPreview',
      component: zybPreview
    }
  ]
});