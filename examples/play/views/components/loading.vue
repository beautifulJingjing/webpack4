<template>
    <div>
        <span class="demo-title">区域加载:</span>
        <div class="demo-block large-line">
            <div style="height:100px;width:100%;background: #ccc" v-loading="loading"></div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                loading: true
            }
        }
    }
</script>

<style>

</style>
