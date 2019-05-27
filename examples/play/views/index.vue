<template>
    <div class="play-container">
        <main-slide></main-slide>
        <router-view class="container"></router-view>
    </div>
</template>

<script>
    import MainSlide from './components/slide'
    export default {
        components: {
            MainSlide
        }
    }
</script>

<style lang="scss">
.play-container{
    display: flex;
    width: 1140px;
    padding: 0;
    margin: 40px auto;
    .container{
        flex: 1;
    }
}
</style>
