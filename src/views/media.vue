<template>
  <div class="media">
    <div class="banner-pc">
      <div class="menu">
        <router-link to="/">HOME</router-link>
        <router-link to="news">NEWS</router-link>
        <router-link to="characters" active-class="active-menu"
          >CHARACTERS</router-link
        >
      </div>
      <img src="../assets/img/logo.png" alt="" class="logo" />
    </div>
    <div class="banner-mob">
      <div class="menu" @click="$router.push('/')">
      </div>
      <img src="../assets/img/logo.png" alt="" class="logo" />
    </div>
    <div class="character-title">
      <span>CHARACTER</span>
    </div>
    <div class="character-list" v-if="characterList.length > 0">
      <div
        class="character-item"
        v-for="item in characterList"
        :key="item.id"
      >
        <img :src="require(`../assets/img/${item.img}`)" alt="" />
        <span class="name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchCharacterList } from "../service/api";
export default {
  name: "MediaPage",
  data() {
    return {
      characterList: [],
      loading: false,
    };
  },
  methods: {
    // 获取角色信息
    getCharacterList() {
      this.loading = true;
      fetchCharacterList()
        .then((res) => {
          this.characterList = JSON.parse(res)
        })
        .finally(() => {
          this.loading = false;
        });
    },
    reSize() {
      let cw,
        size = 1600;
      cw = document.documentElement.clientWidth;
      cw &&
        (document.documentElement.style.fontSize = (cw / size) * 100 + "px");
    },
    initPage() {
      this.getCharacterList();
      this.reSize();
      var ev = "orientationchange" in window ? "orientationchange" : "resize";
      window.addEventListener &&
        window.addEventListener(ev, this.reSize, false);
      document.addEventListener &&
        document.addEventListener("DOMContentLoaded", this.reSize, false);
    },
  },
  created() {
    this.initPage();
  },
  beforeRouteLeave(to, from, next) {
    document.documentElement.style.fontSize = "14px";
    var ev = "orientationchange" in window ? "orientationchange" : "resize";
    window.removeEventListener &&
      window.removeEventListener(ev, this.reSize, false);
    document.removeEventListener &&
      document.removeEventListener("DOMContentLoaded", this.reSize, false);
    next();
  },
};
</script>
<style lang="less" scoped>
.media {
  width: 100vw;
  min-height: 100vh;
  background: #151b1e;
  font-size: 20px;
  line-height: 20px;
  .banner-pc {
    background: url(../assets/img/bg.png) top center no-repeat;
    background-size: cover;
    padding: 20px 40px;
    .menu {
      background: rgba(255, 255, 255, 0.1);
      padding: 20px;
      border-radius: 5px;
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 8px;
        height: 100%;
        background-color: #f5bc30;
        border-radius: 5px 0 0 5px;
      }
      &:after {
        left: unset;
        right: 0;
        border-radius: 0 5px 5px 0;
      }
      a {
        margin: 20px;
        font-weight: 500;
        cursor: pointer;
        color: #fff;
        &:hover {
          color: #f5bc30;
        }
      }
      .active-menu {
        color: #f5bc30;
      }
    }
    .logo {
      margin: 30px 0 0 160px;
    }
  }
  .character-list {
    min-height: 100%;
  }
  .character-title {
    height: 80px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 800;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    span {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      padding: 10px 50px;
      background: rgba(255, 255, 255, 0.1);
      clip-path: polygon(
        8% 0,
        92% 0,
        100% 50%,
        100% 50%,
        92% 100%,
        8% 100%,
        0 50%,
        0 50%
      );
    }
  }
  .character-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px auto 0;
    max-width: 1400px;
    .character-item {
      margin: 30px;
      position: relative;
      img {
        width: 380px;
      }
      span {
        display: none;
        position: absolute;
        width: 100%;
        padding: 0.3rem 1rem 0.8rem 0.7rem;
        background: rgba(0, 0, 0, 0.7);
        bottom: 0;
        color: #fff;
        font-size: 0.48rem;
      }
    }
  }
  .banner-mob {
    display: none;
    .menu {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}

@media screen and (max-width: 1024px) {
  .media {
    .banner-pc {
      display: none;
    }
    .banner-mob {
      display: block;
      background-color: #000;
      padding: 0.1rem 0 0.1rem 1rem;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 100%;
        background-color: #f5bc30;
        left: 0;
        top: 0;
      }
      .logo {
        width: 4rem;
      }
      .menu {
        background: #f5bc30;
        position: absolute;
        top: 0;
        right: 0;
        width: 1.6rem;
        height: 100%;
        &:before {
          content: "";
          position: absolute;
          width: 50%;
          height: 0.1rem;
          border-top: 0.08rem solid #fff;
          border-bottom: 0.08rem solid #fff;
          top: 30%;
          left: 25%;
        }
        &:after {
          content: "";
          position: absolute;
          width: 50%;
          height: 0.08rem;
          background-color: #fff;
          top: 60%;
          left: 25%;
        }
      }
    }
      .character-title {
    border-top: none;
    span {
    background: rgba(0, 0, 0, 0.7);
    font-size: 0.4rem;
  }
  }

   .character-list {
     .character-item {
       img {
    width: 6.05rem;
  }
  span {
    display: block;
  }
     }
   }

  }




}
@media screen and (max-width: 750px) {
  .character-title span {
    font-size: 0.6rem;
  }
  .character-list .character-item img {
    width: 8.06rem;
  }
}
</style>
