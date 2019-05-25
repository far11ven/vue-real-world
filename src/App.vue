
<template>
  <div id="app">
    <AppHeader />
    <Home />
    <router-view />
    <AppFooter />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<script>
import Home from './components/home/Home'
import AppHeader from './components/header/Header'
import AppFooter from './components/footer/Footer'

export default {
  name: 'App',
  components: {
    'home': Home,
    AppHeader,
    AppFooter
  }
}

</script>
