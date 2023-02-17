<template>
  <div class="box-home">
    <div class="box-home-video">video</div>
    <template v-for="item in list">
      <a-divider :margin="10"></a-divider>
      <div class="box-home-type">
        <div class="box-home-type-head">
          <a-row :gutter="24">
            <a-col :span="12">
              <div>{{ item.title }}</div>
            </a-col>
            <a-col :span="12">
              <div class="box-home-type-head-more">更多</div>
            </a-col>
          </a-row>

        </div>
        <div class="box-home-type-content">
          <a-row :gutter="[24, 12]">
            <a-col :span="6" v-for="item in arrlist" :key="item">
              <div class="box-home-type-content-detail">
                <img :src="imgsrc" />
                <div class="box-home-type-content-detail-text">
                  <div>福果</div>
                  <div>描述。。。。。</div>
                  <div>199</div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </template>
</div>
</template>
<script setup>
import { fuguo } from '@assets/imgs/index.js';
import { reactive } from 'vue';
let imgsrc = fuguo;
const arrlist = [1, 2, 3, 4, 5, 6, 7, 8]
let list = reactive([
  {
    title: '火红色'
  },
  {
    title: '进口版'
  },
  {
    title: '迷你款'
  },
  {
    title: '大福贵'
  },
  {
    title: '独特区'
  },

])
</script>
<style scoped lang="scss">
.box-home {
  &-video {
    height: 400px;
  }

  &-type {
    box-sizing: border-box;
    min-height: 700px;

    &-head {
      font-size: 20px;
      color: #333;
      padding: 5px 0 15px 0;

      &-more {
        text-align: right;
        // padding-right: 10px;
      }
    }

    &-content {
      height: auto;
      display: flex;
      flex-wrap: wrap;

      &-detail {
        box-sizing: border-box;
        // width: calc(20% - 20px);
        // height: 300px;
        margin-bottom: 20px;
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
            margin: 5px 0;
          }
        }
      }
    }
  }
}
</style>