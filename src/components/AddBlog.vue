<template>
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="!submmited">
            <label>博客标题</label>
            <input type="text" v-model="blog.title"
            required/>
           
            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label key="Vue.js">Vue.js</label>
                <input type="checkbox" value="Vue.js" v-model="blog.categories">
                <label>React.js</label>
                <input type="checkbox" value="React.js" v-model="blog.categories">
                <label>Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                
                </div>
                <label>作者：</label>
                <select v-model="blog.author">
                    <option v-for="(p,index) in authors" :key="index">{{p}}</option>
                </select>
                <button @click.prevent="post">添加博客</button>
            
            </form>
            <div v-if='submmited'>
                <h3>您的博客发布成功！</h3>
            </div>
            <div id="preview">
                <h3>博客总览</h3>
                <p>主题：</p>
                <p>{{blog.title}}</p>
                <p>内容：</p>
                <p>{{blog.content}}</p>
                <p>分类：</p>
                <ul>
                    <li v-for="category in blog.categories" :key="category">
                        {{category}}
                    </li>
                </ul>
                <p>作者：{{blog.author}}</p>
                
            </div>

        
    </div>
</template>
<script>
export default {
    name: 'add-blog',
   data() {
      return {
        blog:{
            title:'',
            content:'',
            categories:[],
            author:'',
        },
        authors:['Noni','yiyi','Lsir'],
        submmited:false,
      }
   },
   methods:{
    post:function(){
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
            // post的内容
            title:this.blog.title,
            body:this.blog.content,
            userId:1,
        })
        
        // .then方法：post成功后会返回内容
        .then(function(data){
            console.log(data);
            this.submmited = true;
        })
    }
   }
}
</script>
<style scoped>
    #add-blog * {
        box-sizing: border-box;
    }
    #add-blog {
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    label {
        display: block;
        margin: 20px 0 10px;
    }
    input[type='text'],textarea,select {
        display: block;
        width: 100%;
        padding: 8px;
    }
    textarea {
        height: 200px;
    }
    #checkboxes label {
        display: inline-block;
        margin-top: 0;
    }
    #checkboxes input {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
    }
    button {
        display: block;
        margin-top: 20px;
        background: #85B8CB;
        color: white;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }
    button:hover {
        background: #a5dbee;
    }
    button:active {
        background: #6c96a6;
    }
    #preview {
        padding: 10px 20px;
        border: 1px dotted #d1ddd8;
        margin: 20px 0;
    }
    h3 {
        margin-top: 10px;
    }
</style>
