<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>首页</router-link>
                <router-link to="/show" exact>博客</router-link>
                <!-- <router-link to="/add" exact>写博客</router-link> -->
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'blog-header',
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style scoped>
ul {
    list-style: none;
    text-align: center;
    margin: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
    opacity: 1;
}
a {
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
nav {
    width: 100%;
    background-color: #6c96a6;
    opacity: 0;
    padding: 30px 0;
    /* margin-bottom: 40px; */

    transition: all .3s ease-in-out;
}
nav:hover{
   opacity: .9;

}
.router-link-active {
    background: #85B8CB;
    
}
</style>
