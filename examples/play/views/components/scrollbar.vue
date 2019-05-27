<template>
    <div>
        <span class="demo-title">基础用法:</span>
        <div class="demo-block large-line">
            <is-scrollbar
                    tag="div"
                    class="demo"
                    wrap-class="dome-dropdown__wrap"
            >
                <div class="dome-dropdown__list"></div>
                <div class="dome-dropdown__list"></div>
            </is-scrollbar>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            }
        }
    }
</script>

<style>
    .demo{
        width:400px;
    }
.dome-dropdown__wrap{
    height: 200px;
}
    .dome-dropdown__list{
        height: 200px;
        width: 600px;
        background-image: url('http://sci.oss-cn-hangzhou.aliyuncs.com/79c0e9ce79d14cc48ef1fa080e11991c.jpg');
        background-size: 100% 100%;
    }
</style>
