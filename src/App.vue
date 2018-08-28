<template>
  <zybLayout>
    <router-view/>
  </zybLayout>
</template>

<script>
import zybLayout from '@/components/zybLayout/zybLayout.vue'

export default {
  name: 'App',
  components: {
    zybLayout
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
