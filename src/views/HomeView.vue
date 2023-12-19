<template>
  <div class="wuhuan">
    <div class="one item"></div>
    <div class="two item"></div>
    <div class="three item"></div>
    <div class="four item"></div>
    <div class="five item"></div>
  </div>
</template>

<script setup lang="ts">
// css实现奥运五环（立体）
// https://blog.csdn.net/m0_37922443/article/details/119731536
</script>

<style lang="scss" scoped>
.wuhuan {
  padding: 20px;
  position: relative;
  .item {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .item::after {
    content: "";
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    left: -8px;
    z-index: 1;
  }
  .one {
    border: 8px solid blue;
    position: relative;
  }
  .one::after {
    border: 8px solid blue;
    border-bottom-color: transparent;
  }
  .two {
    border: 8px solid black;
    position: absolute;
    top: 20px;
    left: 140px;
  }
  .two::after {
    border: 8px solid black;
    border-left-color: transparent; /*利用边框色为透明，实现该部分被遮挡效果*/
    z-index: 1;
  }
  .three {
    border: 8px solid red;
    position: absolute;
    top: 20px;
    left: 260px;
  }
  .three::after {
    border: 8px solid red;
    border-left-color: transparent; /*利用边框色为透明，实现该部分被遮挡效果*/
    z-index: 2;
  }
  .four {
    border: 8px solid orange;
    position: absolute;
    top: 70px;
    left: 80px;
  }
  .five {
    border: 8px solid green;
    position: absolute;
    top: 70px;
    left: 200px;
  }
  .five::after {
    border: 8px solid green;
    border-top-color: transparent;
  }
}
</style>
