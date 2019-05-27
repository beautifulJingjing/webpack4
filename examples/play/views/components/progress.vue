<template>
    <div>
        <span class="demo-title">线形进度条 — 百分比外显:</span>
        <div class="demo-block large-line">
            <div>
                <is-progress :percentage="0"></is-progress>
                <is-progress :percentage="70"></is-progress>
                <is-progress :percentage="80" color="#8e71c7"></is-progress>
                <is-progress :percentage="100" status="success"></is-progress>
                <is-progress :percentage="50" status="exception"></is-progress>
            </div>
        </div>


        <span class="demo-title">环形进度条</span>
        <div class="demo-block large-line">
            <div>
                <is-progress type="circle" :percentage="0"></is-progress>
                <is-progress type="circle" :percentage="25"></is-progress>
                <is-progress type="circle" :percentage="80" color="#8e71c7"></is-progress>
                <is-progress type="circle" :percentage="100" status="success"></is-progress>
                <is-progress type="circle" :percentage="50" status="exception"></is-progress>
                <is-progress type="circle" :percentage="100" status="text">Done</is-progress>
            </div>
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

<style rel="stylesheet/scss" lang="scss" scoped>
    .demo-block .isc-progress--line {
        margin-bottom: 15px;
        width: 350px;
    }
</style>
