<template>
    <div>
        <span class="demo-title">基础用法:</span>
        <div class="demo-block large-line">
            <is-drawing-board ref="board"></is-drawing-board>
        </div>

        <span class="demo-title">显示校准线:</span>
        <div class="demo-block large-line">
            <is-drawing-board ref="board" show-line></is-drawing-board>
            <div class="line-button">
                <is-button @click="exportContent">导出画板</is-button>
            </div>
            <div class="block">
                <div v-html="content" style="width:300px; height:134px;border:1px solid #ebebeb"></div>
                <div v-html="content" style="width:600px; height:268px;border:1px solid #ebebeb"></div>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                content: ''
            }
        },
        methods: {
            exportContent() {
                this.content = this.$refs.board.getContent();
                console.warn(this.content)
            }
        },
    }
</script>

<style lang="scss">
.block .isc-drawing-board__content{
    width:100%;
    height:100%;
    min-height: auto;
}
</style>
