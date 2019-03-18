<template>
    <div class="demo">
        <h2>{{message}}</h2>
        <img src="../assets/logo.png" alt="">
        <div class="img"></div>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button } from 'element-ui';
    Vue.use(Button);

    export default {
        name: 'App',
        data() {
            return {
                message: 'Hello!caojingjing'
            }
        },
        created() {

        }
    }
</script>

<style lang="less">
    .demo {
        text-align: center;

    img {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        display: block;
    }
    .img{
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background: url('../assets/logo.png') no-repeat;
        background-size:100% auto;
    }

    }
</style>
