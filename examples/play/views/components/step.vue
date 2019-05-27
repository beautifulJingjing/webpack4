<template>
    <div>
        <span class="demo-title">简单步骤条:</span>
        <div class="demo-block large-line">
            <is-steps :active="addActive">
                <is-step title="选择模版"></is-step>
                <is-step title="屏幕前无人"></is-step>
                <is-step title="采集到人脸"></is-step>
            </is-steps>
            <div class="line-button">
                <is-button @click="next">下一步</is-button>
            </div>
        </div>

        <span class="demo-title">含状态步骤条:</span>
        <div class="demo-block large-line">
            <is-steps :active="addActive" finish-status="success">
                <is-step title="选择模版"></is-step>
                <is-step title="屏幕前无人"></is-step>
                <is-step title="采集到人脸"></is-step>
            </is-steps>
            <div class="line-button">
                <is-button @click="next">下一步</is-button>
            </div>
        </div>

        <span class="demo-title">居中步骤条:</span>
        <div class="demo-block large-line">
            <is-steps :active="2" align-center finish-status="success">
                <is-step title="选择模版"></is-step>
                <is-step title="屏幕前无人"></is-step>
                <is-step title="采集到人脸"></is-step>
            </is-steps>
        </div>
        <span class="demo-title">竖式步骤条:</span>
        <div class="demo-block large-line">
            <div style="height: 300px;">
                <is-steps :active="addActive3" direction="vertical">
                    <is-step title="选择模版"></is-step>
                    <is-step title="屏幕前无人"></is-step>
                    <is-step title="采集到人脸"></is-step>
                </is-steps>
            </div>
            <div class="line-button">
                <is-button @click="next3">下一步</is-button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                addActive: 0,
                addActive2: 0,
                addActive3: 0
            }
        },
        methods: {
            next() {
                this.addActive = this.addActive === 2 ? 0 : this.addActive + 1
            },
            next3() {
                this.addActive3= this.addActive3 === 2 ? 0 : this.addActive3 + 1
            }
        }
    }
</script>

<style>

</style>
