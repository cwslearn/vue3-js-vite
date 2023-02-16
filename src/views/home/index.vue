<template>
  <div class="box-home">
    <div class="box-home-video">video</div>
    <div class="box-home-type">
      <div class="box-home-type-head">
        type1
      </div>
      <div class="box-home-type-content">
        <div v-for="item in arrlist" :key="item" class="box-home-type-content-detail">
          <img :src="imgsrc" />
          <div class="box-home-type-content-detail-text">
            <div>福果</div>
            <div>描述。。。。。</div>
            <div>199</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-home-type">type2</div>
    <div class="box-home-type">type3</div>
    <div class="box-home-type">type4</div>
    <div class="box-home-type">type5</div>
  </div>
</template>
<script setup>
import { fuguo } from '@assets/imgs/index.js';
let imgsrc = fuguo;
const arrlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>
<style scoped lang="scss">
.box-home {
  &-video {
    height: 400px;
  }

  &-type {
    box-sizing: border-box;
    height: 700px;

    &-head {
      height: 80px;
    }

    &-content {
      height: auto;
      display: flex;
      flex-wrap: wrap;

      &-detail {
        box-sizing: border-box;
        width: calc(20% - 20px);
        height: 300px;
        margin: 10px;
        padding: 20px;
        padding-bottom: 0;
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;

        &:hover {
          cursor: pointer;
          box-shadow: 2px 2px 2px 2px rgb(237, 229, 229);
        }

        img {
          width: 100%;
          object-fit: contain;
        }

        &-text {
          margin-top: 10px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          div {
            height: 30%;
          }
        }
      }
    }
  }
}
</style>