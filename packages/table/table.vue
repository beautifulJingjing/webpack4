<template>
    <div class="yh-table">
        <div class="yh-table__header-wrapper">
            <table-header></table-header>
        </div>
        <div class="yh-table__body-wrapper">

        </div>
    </div>
</template>

<script>

    import TableHeader from './table-header';

    export default {
        name: 'YhTable',
        components: {
            TableHeader
        }
    }
</script>

<style lang="less">
    .yh-table{
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        flex: 1;
        width: 100%;
        max-width: 100%;
        font-size: 14px;
        color: #606266;
        .yh-table__header-wrapper{
            overflow: hidden;
        }
    }

</style>
