<template>
  <div id="app">
    <div class="flex-container">
      <div class="header">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <div class="center">
        <div class="sidebar">
          Sidebar
        </div>
        <div class="content">
          <router-view />
        </div>
      </div>
      <div class="footer">Footer</div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.header
  background-color bisque
  height 35px

.footer
  height 35px
  background-color: beige

.center
  display flex
  flex-grow 1
  flex-direction row

.sidebar
  background-color darksalmon
  width 300px

.content
  flex-grow 1
  background-color aliceblue

.flex-container
  min-height 100vh
  display flex
  flex-direction  column

// .grid-container
  // grid-template-columns 300px 1fr
  // grid-template-rows 35px 1fr 50px
  // grid-template-areas
  //   "header  header"
  //   "sidebar main"
  //   "sidebar footer";
</style>
