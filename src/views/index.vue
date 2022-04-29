<template>
  <div class="index">
    <router-link to="rotate1">竖屏遮罩</router-link>
    <router-link to="media">媒体查询</router-link>
     <router-link to="rotate2">横屏锁定</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
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
a {
  color: #42b983;
  margin: 0 30px;
}
</style>
