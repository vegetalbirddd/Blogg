<template>
    <div v-theme:column="'wide'" id="show-blog">
        <!-- <h1>博客总览</h1> -->
        <div style="text-align:center;vertical-align:middel;"><input type="text" v-model="search" placeholder="搜索" ></div>
        <div class="single-blog" v-for="(blog,index) in filtereBlogs" :key="index">
                <router-link :to="'/blog/' + blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
            <article>
                <!-- ...应该在字数超过100的时候才显示，如果字数低于100则不要出现... -->
                {{blog.body | snippet}}
            </article>
        </div>
    </div>
</template>
<script>
export default {
    name:'show-blog',
   data() {
      return {
            blogs:[],
            search:'',
      }
   },
   created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
    // this.$http.get('../static/posts.json')
      .then(function(data){
            //console.log(data);
            this.blogs = data.body.slice(0,10);
            // console.log(this.blogs);
      })
   },
   computed:{
        filtereBlogs:function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
   },
   filters:{
//     "to-uppercase":function(value){
//   return value.toUpperCase();
//     },
// 简写方式↓
    toUppercase(value){
     return value.toUpperCase();
    }
   },
   directives:{
    'rainbow':{
        bind(el){
            // el.style.color = '#' + Math.random().toString(16).slice(2,8)
            el.style.color = '#47626d'
        }
    }
   }
}
</script>
<style>
#show-blog {
    max-width: 800px;
    margin: 0 auto;
    background: url(@/assets/zaizai.png) fixed repeat-y center;
    
    background-size: cover;
}
.single-blog {
    padding: 20px;
    margin: 20px auto;
    width: 960px;
    box-sizing: border-box;
    background: rgba(255,255,255,.6);
    border-radius: 3px;
}
#show-blog a {
    text-decoration: none;
     
}
input[type="text"] {
    padding: 8px;
    width: 960px;
    outline: none;
    box-sizing: border-box;
    border: 0;
    border-radius: 3px;
}
</style>
