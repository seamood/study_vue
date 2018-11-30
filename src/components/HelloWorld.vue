<template>
  <div class="hello">
    <div class="head">
      <a href="https://www.ldxxw.com.cn">返回网站首页</a>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div id="example-1">
      <button v-on:click="add">增加 1</button>
      <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>
    <ul>
      <li v-for=" n in 10 " :key="n">
        <a href="item.url" target="_blank">{{n}}</a>
      </li>
    </ul>
    <div>
      <input v-on:keyup.13="key">key13
    </div>
    <div>
      <input v-model.trim="message" placeholder="edit me">
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      counter: 0,
      msg: 'Welcome to Your Vue.js App',
      homeUrl: 'https://www.ldxxw.com.cn',
      message: 12
    }
  },
  methods: {
    add: function (event) {
      this.counter++
    },
    key: function (event) {
      alert('this is key 13')
    }
  }
}
// var app = new vue('#app',{

// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/less/index.less";
</style>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
} */
</style>
