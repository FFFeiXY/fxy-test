<template>
<div class="rotate2">
  <p> 改变屏幕尺寸以横屏浏览页面</p>

  <router-link to="/" >返回</router-link>
</div>

</template>
<script>
export default {
  name: 'Rotate-Auto',
  methods: {
    reSize() {
    let cw,ch,size=750
    if (document.documentElement.clientWidth >= document.documentElement.clientHeight) {
      cw = document.documentElement.clientHeight
      ch = document.documentElement.clientWidth
      if (cw / ch > 750 / 1600) {
        cw = 750 * ch / 1600
      }
      document.querySelector('body').style.transform = 'rotate(0deg)'
    } else {
      cw = document.documentElement.clientWidth
      ch = document.documentElement.clientHeight
      if (cw / ch > 750 / 1600) {
        cw = 750 * ch / 1600
      }
      document.querySelector('body').style.transform = 'rotate(90deg)'

    }
    cw && (document.documentElement.style.fontSize = cw / size * 100 + "px")
  },
  },
  created() {
    this.reSize()
    var ev = "orientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener && window.addEventListener(ev, this.reSize, false);
    document.addEventListener && document.addEventListener("DOMContentLoaded", this.reSize, false);
  },
  beforeRouteLeave (to, from, next) {
    document.documentElement.style.fontSize = "14px"
    var ev = "orientationchange" in window ? "orientationchange" : "resize";
      window.removeEventListener && window.removeEventListener(ev, this.reSize, false);
    document.removeEventListener && document.removeEventListener("DOMContentLoaded", this.reSize, false);
    next()
  }
}
</script>
<style lang="less" scoped>
  .rotate2{
    width: 16rem;
    height: 7.5rem;
    background-color: #f5bc30;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
  .rotate2 img{
    width: 3rem;
  }
</style>
