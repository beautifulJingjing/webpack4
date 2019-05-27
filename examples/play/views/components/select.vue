<template>
    <div>
        <span class="demo-title">基础用法:</span>
        <div class="demo-block large-line">
            <is-select v-model="value" placeholder="请选择">
                <is-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </is-option>
            </is-select>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        }
    }
</script>

<style>

</style>
