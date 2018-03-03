<template>
  <div id="app">
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css">
@import 'assets/css/reset.css';
#app {
  color: #2c3e50;
}
</style>
