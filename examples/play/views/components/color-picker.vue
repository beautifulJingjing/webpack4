<template>
    <div>
        <span class="demo-title">基础用法:</span>
        <div class="demo-block large-line" style="height:228px;">
            <is-color-picker v-model="color1"></is-color-picker>
        </div>

        <span class="demo-title">弹窗用法:</span>
        <div class="demo-block large-line">
            <is-color-picker v-model="color1" is-popper></is-color-picker>
        </div>

        <span class="demo-title">支持透明度:</span>
        <div class="demo-block large-line">
            <is-color-picker v-model="color2" is-popper show-alpha></is-color-picker>
        </div>

        <span class="demo-title">预定义颜色:</span>
        <div class="demo-block large-line">
            <is-color-picker v-model="color3" is-popper show-alpha :predefine="predefineColors"></is-color-picker>
        </div>

        <span class="demo-title">头部自定义:</span>
        <div class="demo-block large-line">
            <is-color-picker v-model="color4" is-popper show-alpha :predefine="predefineColors">
                <div slot="trigger" class="trigger-title">A</div>
            </is-color-picker>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                color1: '#409EFF',
                color2: '#409EFF',
                color3: 'rgba(255, 69, 0, 0.68)',
                color4: '#000000',
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ]
            }
        },
        methods: {

        }
    }
</script>

<style>
    .trigger-title{
        border:1px solid #d4d4d4;
        width:32px;
        height:32px;
        line-height:32px;
        text-align: center;
        cursor: pointer;
    }
</style>
