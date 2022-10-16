<template>
    <div id="home">
            <router-link to="/show" exact><button>Begin</button></router-link>
    </div>
</template>
<script>
import BlogHeader from '../components/BlogHeader.vue'
export default {
    name:'Home',
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
    BlogHeader,
   },
   methods:{
   },
}
</script>
<style scoped>
    a {
        text-decoration: none;
    }
    button {
        display: block;
        margin: 0 auto;
        margin-top: 250px;
        font-size: 36px;
        height: 160px;
        width: 250px;
        background-color: rgba(255,255,255,.3);
        border: 0px;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
    }
    button:hover {
        background-color: rgba(255,255,255,.5);
    }
</style>
