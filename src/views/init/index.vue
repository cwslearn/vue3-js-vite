<template>
    <div class="box-container">
        <div class="box-head">head</div>
        <div class="box-content">
            <RouterView />
        </div>
        <div class="box-footer">footer</div>
        <!-- <a-button type="primary" @click="handleClickMini">mini</a-button>
        <HelloWorld />
        <icons-home-copy class="" /> -->
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
const handleClickMini = () => {
    AMessage.info('hello world')
}
</script>
<style scoped lang="scss">
.box-container {
    width: 100vw;

    .box-head {
        height: 40px;
        background-color: #383838;
    }

    .box-content {
        background-color: #f5f5f5;
        max-width: 1220px;
        margin: 0 auto;
        min-height: calc(100vh - 140px);
    }

    .box-footer {
        height: 100px;
    }

}
</style>