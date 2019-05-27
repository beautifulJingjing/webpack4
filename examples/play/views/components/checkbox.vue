<template>
    <div>
        <span class="demo-title">基础用法:</span>
        <div class="demo-block large-line">
            <is-checkbox v-model="checked">备选项</is-checkbox>
        </div>

        <span class="demo-title">禁用状态:</span>
        <div class="demo-block large-line">
            <is-checkbox v-model="checked" disabled>备选项</is-checkbox>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                checked: true
            }
        }
    }
</script>

<style>

</style>
