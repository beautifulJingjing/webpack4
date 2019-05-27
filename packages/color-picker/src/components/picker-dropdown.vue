<template>
    <transition name="isc-zoom-in-top">
        <div class="isc-color-dropdown" v-show="isPopper ? showPopper : true">
            <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
            <div class="isc-color-dropdown__main-wrapper">
                <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
                <sv-panel ref="sl" :color="color"></sv-panel>
            </div>
            <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
            <div class="isc-color-dropdown__btns">
                <span class="isc-color-dropdown__value">
                    <is-input
                          v-model="customInput"
                          @keyup.native.enter="handleConfirm"
                          @blur="handleConfirm"
                          :validate-event="false"
                          size="mini">
                    </is-input>
                </span>
                <div class="isc-color-dropdown__preview" :style="{background: customInput}"></div>
                <div>
                    <is-button
                            size="mini"
                            type="text"
                            @click="$emit('clear')">
                        <!--{{ t('el.colorpicker.clear') }}-->
                        清除
                    </is-button>
                    <is-button
                            size="mini"
                            @click="confirmValue">
                        <!--{{ t('el.colorpicker.confirm') }}-->
                        确认
                    </is-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import SvPanel from './sv-panel';
    import HueSlider from './hue-slider';
    import AlphaSlider from './alpha-slider';
    import Predefine from './predefine';
//    import Locale from 'element-ui/src/mixins/locale';
    import Popper from 'isyscore-ui/src/utils/vue-popper';
    import IsInput from 'isyscore-ui/packages/input';
    import IsButton from 'isyscore-ui/packages/button';

    export default {
        name: 'is-color-picker-dropdown',

        mixins: [Popper],

        components: {
            SvPanel,
            HueSlider,
            AlphaSlider,
            IsButton,
            Predefine
        },

        props: {
            color: {
                required: true
            },
            showAlpha: Boolean,
            predefine: Array,
            isPopper: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                customInput: ''
            };
        },

        computed: {
            currentColor() {
                const parent = this.$parent;
                return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
            }
        },

        methods: {
            confirmValue() {
                this.$emit('pick');
            },

            handleConfirm() {
                this.color.fromString(this.customInput);
            }
        },

        mounted() {
            this.$parent.popperElm = this.popperElm = this.$el;
            this.referenceElm = this.$parent.$el;
        },

        watch: {
            showPopper(val) {
                if (val === true) {
                    this.$nextTick(() => {
                        const {sl, hue, alpha} = this.$refs;
                        sl && sl.update();
                        hue && hue.update();
                        alpha && alpha.update();
                    });
                }
            },

            currentColor: {
                immediate: true,
                handler(val) {
                    this.customInput = val;
//                    this.$emit('pick');
                }
            }
        }
    };
</script>
