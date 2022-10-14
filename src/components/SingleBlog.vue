<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
    <router-link to="/show" exact><p>back</p></router-link>
  </div>
</template>
<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function (data) {
        console.log(data);
        this.blog = data.body;
      });
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
a {
  text-decoration: none;
}
p {
  text-align: right;
  font-weight: 700;
  color: #47626d;
}
#single-blog {
  width: 960px;
  /* height: 100%; */
  margin: 40px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px dotted #aaa;
  border-radius: 3px;
}
h1 {
  color: #47626d;
}
</style>
