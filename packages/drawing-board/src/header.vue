<template>
    <div class="isc-drawing-board__header">
        <ul>
            <li class="isc-drawing-board__header-img">
                <is-upload
                        ref="image"
                        :accept="{mimeTypes: 'image/*'}"
                        :multiple="false"
                        @upload-before-send="uploadImageBeforeSend"
                        @upload-success="uploadImageSuccess"
                >
                    <div class="img-path"></div>
                </is-upload>
            </li>
            <li class="isc-drawing-board__header-video">
                <is-upload
                        ref="upload"
                        :accept="{mimeTypes: 'video/*'}"
                        :multiple="false"
                        @upload-before-send="uploadVideoBeforeSend"
                        @upload-success="uploadVideoSuccess"
                >
                    <div class="img-path"></div>
                </is-upload>
            </li>
            <li class="isc-drawing-board__header-text">
                <is-color-picker v-model="header.color" is-popper show-alpha>
                    <div slot="trigger">A</div>
                </is-color-picker>
            </li>
            <li class="isc-drawing-board__header-font">
                <is-select v-model="header.font" placeholder="字号">
                    <is-option
                            v-for="item in fontList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </is-option>
                </is-select>
            </li>
            <li class="isc-drawing-board__header-font">
                <is-select v-model="header.family" placeholder="字体">
                    <is-option
                            v-for="item in familyList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </is-option>
                </is-select>
            </li>
            <li class="isc-drawing-board__header-text">
                <is-color-picker v-model="header.background" is-popper show-alpha></is-color-picker>
            </li>
        </ul>
    </div>
</template>

<script>
    import {removeClass, addClass, hasClass} from '../../../src/utils/dom';
    import IsUpload from 'isyscore-ui/packages/upload/index'


    export default {
        name: 'IsDrawingBoard',
        methods: {
            uploadImageBeforeSend(object, data, header) {
                data.type = 0;
            },
            uploadImageSuccess(file, response) {
                if (response.code === 0) {
                    this.$emit('image-change', response.data.url)
                }
                else {
                    alert('上传失败')
                }
            },
            uploadVideoBeforeSend(object, data, header) {
                data.type = 0;
            },
            uploadVideoSuccess(file, response) {
                if (response.code === 0) {
                    this.$emit('video-change', response.data.url)
                }
                else {
                    alert('上传失败')
                }
            }
        },
        data() {
            return {
                fontList: [],
                familyList: [
                    {
                        value: 'Lantinghei SC',
                        label: '兰亭黑-简'
                    },
                    {
                        value: 'Hanzipen SC',
                        label: '翩翩体-简'
                    },
                    {
                        value: 'Hannotate SC',
                        label: '手札体-简'
                    },
                    {
                        value: 'Weibei SC',
                        label: '魏碑-简'
                    },
                    {
                        value: 'Xingkai SC',
                        label: '行楷-简'
                    },
                    {
                        value: 'Yuanti SC',
                        label: '圆体-简'
                    },
                    {
                        value: 'SimSun',
                        label: '宋体'
                    },
                    {
                        value: 'SimHei',
                        label: '黑体'
                    },
                    {
                        value: 'Microsoft Yahei',
                        label: '微软雅黑'
                    },
                    {
                        value: 'Microsoft JhengHei',
                        label: '微软正黑体'
                    },
                    {
                        value: 'KaiTi',
                        label: '楷体'
                    },
                    {
                        value: 'NSimSun',
                        label: '新宋体'
                    },
                    {
                        value: 'FangSong',
                        label: '仿宋'
                    },
                    {
                        value: 'STHeiti',
                        label: '华文黑体'
                    },
                    {
                        value: 'STKaiti',
                        label: '华文楷体'
                    },
                    {
                        value: 'STSong',
                        label: '华文宋体'
                    }
                ],
                header: {
                    color: "#000000",
                    font: '',
                    family: '',
                    background: '#000000'
                }
            };
        },
        created() {
            let fontList = [7, 20];
            for(let i = fontList[0]; i < fontList[1]; i++) {
                this.fontList.push({
                    value: i * 2,
                    label: i * 2 + ''
                })
            }
            this.$emit('color-change', this.header.color)
        },
        watch: {
            'header.color'(val){
                this.$emit('color-change', val)
            },
            'header.font'(val){
                this.$emit('font-change', val)
            },
            'header.family'(val){
                this.$emit('family-change', val)
            },
            'header.background'(val){
                this.$emit('background-change', val)
            }
        }
    }
</script>