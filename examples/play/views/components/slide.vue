<template>
    <div class="slide">
        <div v-for="(item, index) in menuList" :key="index" class="slide-item">
            <router-link :to="item.path">{{item.title}}</router-link>
        </div>
    </div>
</template>

<script>
    import slideConfig from '../../slide.config';

    export default {
        data() {
            return {
                menuList: slideConfig
            };
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .slide{
        width:200px;
        flex: 0 0 200px;
        .slide-item{
            margin-bottom: 10px;
            a {
                display: block;
                height: 40px;
                color: #444;
                line-height: 40px;
                font-size: 14px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-weight: 400;
                &.router-link-active{
                    color: #409eff;
                }
                &:hover{
                    color: #409eff;
                }
            }
        }
    }
</style>
