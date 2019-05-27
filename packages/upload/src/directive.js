/**
 * Created by caojingjing on 2019/5/22.
 */
import 'isyscore-ui/src/utils/upload/jquery-3.3.1.min'
import 'isyscore-ui/src/utils/upload/webuploader'
import { getMimeTypes } from 'isyscore-ui/src/utils/mimetypes';


const uploadDirective = {};

uploadDirective.install = Vue => {
    Vue.directive('upload', {
        bind: function (el, binding) {
            let $el = el, opts = binding.value;
            if (!WebUploader.Uploader.support()) {
                alert('您的浏览器不支持上传功能！');
                throw new Error('WebUploader does not support the browser you are using.');
            }
            // //调整file控件位置
            var resetInput = function () {
                setTimeout(() => {
                    let input = $el.getElementsByTagName('input')[0],
                        parent = input.parentNode,
                        keepclick = false;
                    $el.style.position = 'relative';
                    input.style.position = 'absolute';
                    input.style.cursor = 'pointer';
                    input.style.opacity = '0';
                    input.style.left = '0';
                    input.style.top = '0';
                    // 隐藏父级
                    parent.style.display = 'none';
                    $el.appendChild(input);
                    $el.domInserted = true;
                    //避免频繁点击操作
                    // input.click(function (e) {
                    //     if (keepclick) {
                    //         e.stopPropagation();
                    //         return false;
                    //     }
                    //     keepclick = true;
                    //     setTimeout(function () {
                    //         keepclick = false
                    //     }, 1000);
                    // });
                })
            };
            //如果对象已存在，则添加按钮，不再重新初始化
            if (opts.WebUploader) {
                opts.WebUploader.addButton({id: $el});
                resetInput();
                return;
            }
            //默认配置
            let config = {
                pick: {
                    id: $el,
                    multiple: true,
                    capture: 'camera',
                    configkey: 'default_img'
                },
                // 只允许选择图片文件。
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                },
                server: '192.168.9.9:8081/api/v1/retail/shelves/upload',
                auto: true,
                disableGlobalDnd: true,
                prepareNextFile: true,
                threads: 5,
                fileNumLimit: 5,
                // fileSingleSizeLimit: 10 * 1024 * 1024,
                duplicate: true,
                thumb: {
                    width: 96,
                    height: 96,
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 80,
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,
                    // 是否允许裁剪。
                    crop: true,
                    // 为空的话则保留原有图片格式。
                    // 否则强制转换成指定的类型。
                    type: 'image/jpeg'
                },
                compress: {
                    width: 800,
                    height: 800,
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 80,
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,
                    // 是否允许裁剪。
                    crop: false,
                    // 是否保留头部meta信息。
                    preserveHeaders: true,
                    // 如果发现压缩后文件大小比原来还大，则使用原来图片
                    // 此属性可能会影响图片自动纠正功能
                    noCompressIfLarger: false,
                    // 单位字节，如果图片大小小于此值，不会采用压缩。
                    compressSize: 200 * 1024
                }
            };
            //先将config中object键值提出来，以免后面的extend将其覆盖，因为该函数无法实现递归覆盖
            opts.options = opts.options || {};
            Object.keys(config).forEach(key => {
                if (opts.options[key]) config[key] = Object.assign(config[key], opts.options[key]);
            })
            Object.keys(opts.options).forEach(key => {
                if (!config[key]) config[key] = opts.options[key];
            });

            //设置mimeTypes参数
            if (config.accept.extensions && !config.accept.mimeTypes) {
                config.accept.mimeTypes = getMimeTypes(config.accept.extensions)
            }
            //上传插件对象由 this.WebUploader 获得
            opts.WebUploader = WebUploader.create(config);
            //遍历并绑定上传事件
            Object.keys(opts.events).forEach((key, value) => {
                opts.WebUploader.on(key, function () {
                    var _this = this, _arguments = arguments;
                    opts.events[key].apply(_this, _arguments)
                })
            });
            resetInput();
        },
        update: function (el, binding) {

        },
        unbind: function (el, binding) {
            if (el.domInserted) {
                let opts = binding.value;
                opts.WebUploader.destroy();
            }
        }
    });
};

export default uploadDirective;
