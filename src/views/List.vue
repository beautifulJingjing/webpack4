<template>
    <div class="list">
        {{message}}
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button } from 'element-ui';
    Vue.use(Button);

    export default {
        name: 'List',
        data() {
            return{
                message: 'chenyingjie'
            };
        },
        create() {

        }
    }
</script>

<style lang="less">
   .list{
       margin-bottom: 20px;
   }
</style>
