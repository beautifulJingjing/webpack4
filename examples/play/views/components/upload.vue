<template>
    <div>
        <span class="demo-title">指令形式-支持缩略图-单张上传:</span>
        <div class="demo-block large-line">
            <ul>
                <li v-for="item in imgList1">
                    <img :src="item.url" alt="">
                </li>
            </ul>
            <is-button v-upload="uploadConfig1">上传</is-button>
        </div>

        <span class="demo-title">显示进度条-多张上传:</span>
        <div class="demo-block large-line" style="display: flex">
            <ul>
                <li v-for="item in imgList2">
                    <img :src="item.url" alt="">
                    <is-progress type="circle" :percentage="item.progress" width="70" v-show="item.status === 0"></is-progress>
                </li>
            </ul>
            <div class="uploader-demo" v-upload="uploadConfig2">+</div>
        </div>

        <span class="demo-title">组件形式-手动上传:</span>
        <div class="demo-block large-line">
            <is-upload
                    ref="upload"
                    :accept="{mimeTypes: 'image/*'}"
                    :auto="false"
                    :multiple="false"
                    @file-queued="fileQueued"
                    @upload-before-send="uploadBeforeSend"
                    @upload-progress="uploadProgress"
                    @upload-success="uploadSuccess"
                    @upload-error="uploadError"
            >
                <is-button>选择图片</is-button>
                <is-button type="primary" @click="uploadStart">上传图片</is-button>
            </is-upload>
            <div v-for="item in imgList4" style="width:200px;">
                <span style="line-height: 30px;">{{item.name }}</span>
                <span v-text="{0: '等待上传', 1: '正在上传', 2: '上传成功', 3: '上传失败'}[item.status]"></span>
                <is-progress :percentage="item.progress" v-show="item.status < 2"></is-progress>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgList1: [],
                imgList2: [],
                imgList3: [],
                imgList4: [],
                uploadConfig1: {},
                uploadConfig2: {},
                uploadConfig3: {}
            }
        },
        created() {
            this.uploadConfig1 = {
                options: {
                    pick: {
                        multiple: false
                    },
                    accept: {
                        extensions: 'gif,jpg,jpeg,bmp,png',
                        mimeTypes: 'image/*'
                    },
                    fileNumLimit: 5
                },
                events: {
                    fileQueued: file => {
                        let imgList = this.imgList1;
                        // status: 0: wait 1:progress, 2:success, 3: fail
                        this.uploadConfig1.WebUploader.makeThumb(file, (error, dataSrc) => {
                            if (!error) {
                                imgList.push({
                                    id: file.id,
                                    status: 0,
                                    progress: 0,
                                    url: dataSrc,
                                    file
                                })
                            }
                        });

                    },
                    uploadBeforeSend: (object, data, header) => {
                        data.type = 0;
                    },
                    uploadProgress: (file, percentage) => {
                        this.imgList1.forEach(item => {
                            item.id === file.id && (item.progress = percentage * 100);
                        })
                    },
                    uploadSuccess: (file, response) => {
                        if (response.code === 0) {
                            this.setStatus(this.imgList1, file, 1);
                            this.imgList1.forEach(item => {
                                if (item.id === file.id) {
                                    item.url = response.data.url
                                    item.materialId = response.data.materialId
                                }
                            })
                        }
                        else {
                            this.setStatus(this.imgList1, file, 2);
                        }
                    },
                    uploadError: (file, reason) => {
                        this.setStatus(this.imgList1, file, 2);
                    }
                }
            }
            this.uploadConfig2 = {
                options: {
                    accept: {
                        extensions: 'gif,jpg,jpeg,bmp,png',
                        mimeTypes: 'image/*'
                    },
                    fileNumLimit: 5
                },
                events: {
                    fileQueued: file => {
                        let imgList = this.imgList2;
                        // status: 0: progress, 1:success, 2: fail
                        this.uploadConfig2.WebUploader.makeThumb(file, (error, dataSrc) => {
                            if (!error) {
                                imgList.push({
                                    id: file.id,
                                    status: 0,
                                    progress: 0,
                                    url: dataSrc,
                                    file
                                })
                            }
                        });

                    },
                    uploadBeforeSend: (object, data, header) => {
                        data.type = 0;
                    },
                    uploadProgress: (file, percentage) => {
                        this.imgList2.forEach(item => {
                            item.id === file.id && (item.progress = parseInt(percentage * 100, 10));
                        })
                    },
                    uploadSuccess: (file, response) => {
                        if (response.code === 0) {
                            this.setStatus(this.imgList2, file, 1);
                            this.imgList2.forEach(item => {
                                if (item.id === file.id) {
                                    item.url = response.data.url
                                    item.materialId = response.data.materialId
                                }
                            })
                        }
                        else {
                            this.setStatus(this.imgList2, file, 2);
                        }
                    },
                    uploadError: (file, reason) => {
                        this.setStatus(this.imgList2, file, 2);
                    }
                }
            }
            this.uploadConfig3 = {
                options: {
                    accept: {
                        extensions: 'gif,jpg,jpeg,bmp,png',
                        mimeTypes: 'image/*'
                    },
                    fileNumLimit: 5
                },
                events: {
                    fileQueued: file => {
                        let imgList = this.imgList3;
                        // status: 0: progress, 1:success, 2: fail
                        this.uploadConfig3.WebUploader.makeThumb(file, (error, dataSrc) => {
                            if (!error) {
                                imgList.push({
                                    id: file.id,
                                    status: 0,
                                    progress: 0,
                                    url: dataSrc,
                                    file
                                })
                            }
                        });

                    },
                    uploadBeforeSend: (object, data, header) => {
                        data.type = 0;
                    },
                    uploadProgress: (file, percentage) => {
                        this.imgList3.forEach(item => {
                            item.id === file.id && (item.progress = percentage * 100);
                        })
                    },
                    uploadSuccess: (file, response) => {
                        if (response.code === 0) {
                            this.setStatus(this.imgList3, file, 1);
                            this.imgList3.forEach(item => {
                                if (item.id === file.id) {
                                    item.url = response.data.url
                                    item.materialId = response.data.materialId
                                }
                            })
                        }
                        else {
                            this.setStatus(this.imgList3, file, 2);
                        }
                    },
                    uploadError: (file, reason) => {
                        this.setStatus(this.imgList3, file, 2);
                    }
                }
            }
        },
        methods: {
            setStatus(list, file, status) {
                list.forEach(item => {
                    item.id === file.id && (item.status = status);
                })
            },
            fileQueued(file) {
                this.imgList4.push({
                    id: file.id,
                    name: file.name,
                    status: 0,
                    progress: 0,
                    file
                })
            },
            uploadStart(file) {
                this.setStatus(this.imgList4, file, 1);
            },
            uploadBeforeSend(object, data, header) {
                data.type = 0;
            },
            uploadProgress (file, percentage) {
                this.imgList4.forEach(item => {
                    item.id === file.id && (item.progress = parseInt(percentage * 100, 10));
                })
            },
            uploadSuccess(file, response) {
                if (response.code === 0) {
                    this.setStatus(this.imgList4, file, 2);
                    this.imgList4.forEach(item => {
                        if (item.id === file.id) {
                            item.url = response.data.url
                            item.materialId = response.data.materialId
                        }
                    })
                }
                else {
                    this.setStatus(this.imgList4, file, 3);
                }
            },
            uploadError(file, reason) {
                this.setStatus(this.imgList4, file, 3);
            },
            uploadStart() {
                this.$refs.upload.WebUploader.upload();
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    ul {
        display: flex;
        margin-bottom: 10px;

        li {
            width: 90px;
            height: 90px;
            margin-right: 10px;
            display: flex;
            align-items: center;
            position: relative;
            img, video{
                width: 100%;
                height: 100%
            }
            .isc-progress--circle{
                position: absolute;
                top:0;
                left:0;
                width: 90px;
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, .8);
            }
        }
    }
    .uploader-demo{
        width: 90px;
        height: 90px;
        float:left;
        border:1px dashed #d9d9d9;
        font-size: 50px;
        text-align: center;
        line-height: 75px;
    }
</style>
