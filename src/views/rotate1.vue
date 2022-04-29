<template>
<div class="rotate1">
     <div class="phone-mask">
      <div class="icon">请横屏访问该页面</div>

    </div>
          <router-link to='/'>返回</router-link>
</div>

</template>
<script>
export default {
  name: 'Rotate-Mask'
}
</script>
<style lang="less" scoped>
.phone-mask {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.phone-mask .icon {
  font-size: 14px;
  color: #fff;
}
.phone-mask .icon::before {
  content: "";
  display: block;
  width: 60px;
  height: 100px;
  background: url("../assets/img/scape.png") no-repeat center;
  background-size: contain;
  margin: 0 auto;
  animation: rotateMask 1s infinite;
}

@keyframes rotateMask {
  0% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(0);
  }
  to {
    transform: rotate(-90deg);
  }
}
@media screen and (orientation: landscape) {
  .phone-mask {
    display: none;
  }
}
</style>
