<template>
  <div id="app">
    <!-- <add-blog/>
    <show-blog/>
    <home> -->
    <blog-header />
    <router-view />
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import ShowBlog from "./components/ShowBlog.vue";
import BlogHeader from "./components/BlogHeader.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    AddBlog,
    ShowBlog,
    BlogHeader,
    Home,
  },
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  width: 100%;
  /* background: #666; */
  background: url(@/assets/zaizai.png) fixed repeat-y center;
  
  background-size: cover;
  /* overflow: hidden; */
}
</style>
