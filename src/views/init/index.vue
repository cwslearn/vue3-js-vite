<template>
    <div class="box-container">
        <div class="box-head">
            <a-row>
                <a-col :flex="3" :align="center">
                    <div class="box-head-nav box-head-logo">源心水草</div>
                </a-col>
                <a-col :flex="6">
                    <div class="box-head-nav box-head-menu" v-for="menu in menuList" :key="menu.path">{{ menu.name }}</div>
                </a-col>
                <a-col :flex="3">
                    <div class="box-head-cart">
                        <div class="box-head-nav cart">购物车</div>
                        <div class="box-head-nav login">登录</div>
                    </div>
                </a-col>
            </a-row>
        </div>
        <div class="box-content">
            <RouterView />
        </div>
        <div class="box-footer">footer</div>
</div>
</template>
<script setup>
import { reactive } from 'vue';
import { RouterView } from 'vue-router'
const menuList = reactive([
    {
        name: '首页',
        path: 'home'
    },
    {
        name: '全部商品',
        path: 'shop'
    },
    {
        name: '造景',
        path: 'perfect'
    }

])
const handleClickMini = () => {
    AMessage.info('hello world')
}
</script>
<style scoped lang="scss">
.box-container {
    background-color: rgba(229, 229, 229, 0.3);

    .box-head {


        height: 40px;
        background-color: #333;

        .arco-row {
            height: 100%;
            max-width: 1220px;
            margin: 0 auto;

            .arco-col {
                height: 100%;
                display: flex;

                div {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    color: rgba(255, 255, 255, 0.8);
                }

                // .box-head-logo {
                //     padding-left: 10px;
                // }

                .box-head-menu {
                    padding: 0 15px;
                }

                .box-head-cart {
                    width: 100%;
                    // padding-right: 20px;
                    display: flex;
                    justify-content: flex-end;

                    div {
                        margin-right: 10px;
                    }
                }

                .box-head-nav {
                    &:hover {
                        cursor: pointer;
                        color: #fff;
                    }
                }
            }
        }
    }

    .box-content {
        max-width: 1220px;
        margin: 0 auto;
        min-height: calc(100vh - 140px);
    }

    .box-footer {
        height: 100px;
    }

}
</style>