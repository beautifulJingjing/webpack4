<template>
    <div class="isc-drawing-board">
        <board-header
                @color-change="colorChange"
                @image-change="imageChange"
                @video-change="videoChange"
                @font-change="fontChange"
                @family-change="familyChange"
                @background-change="backgroundChange"
        ></board-header>
        <div
                class="isc-drawing-board__content"
                @mousedown="startCreate"
                @mousemove="mouseMove"
                @mouseup="stopCreate"
                @dblclick="dblclickCreate"
                @click="clickModule"
                @dragend="dragEnd"
                ref="container">
        </div>
    </div>
</template>

<script>
    import { removeClass, addClass, hasClass } from '../../../src/utils/dom';
    import BoardHeader from './header'

	export default {
	    name: 'IsDrawingBoard',
        components: {
            BoardHeader
        },
        props: {
            showLine: {
                type:Boolean,
                default: false
            }
        },
        methods: {
            // 功能函数
            isBlock(target) {
                return target.className && target.className.includes('isc-drawing-board__block')
            },
            isDot(target) {
                return target.className.includes('dot')
            },
            isDotline(target) {
                return target.className.includes('dot-line')
            },
            isContainer(target) {
                return target.className.includes('isc-drawing-board__content')
            },
            isActive(target) {
                return hasClass(target, 'is-active')
            },
            setActive(target, active) {
                active ? addClass(target, 'is-active') : removeClass(target, 'is-active');
            },
            findBlockPath(path) {
                return Array.from(path).filter(item => this.isBlock(item));
            },
            // 画板操作
            createDot(el) {
                // 创建8个点
                let frag = document.createDocumentFragment();
                let flag = [1, 2, 3, 4, 5, 6, 7, 8];
                let flag1 = [1, 2, 3, 4];
                flag.forEach(item => {
                    let dot = document.createElement('div');
                    dot.setAttribute("class", 'dot dot' + item);
                    dot.setAttribute("id", 'dot-' + item);
                    // 上左
                    frag.appendChild(dot);
                })
                flag1.forEach(item => {
                    let dotline = document.createElement('div');
                    dotline.setAttribute("class", 'dot-line dot-line' + item);
                    // 上左
                    frag.appendChild(dotline);
                })
                // 基准线
                this.showLine && flag1.forEach(item => {
                    let dotline = document.createElement('div');
                    dotline.setAttribute("class", 'base-line base-line' + item);
                    // 上左
                    frag.appendChild(dotline);
                })
                el.appendChild(frag)
            },
            createTextArea(el) {
                let text = document.createElement('textarea');
                text.style.color = '#000';
                el.style.padding = '10px';
                el.appendChild(text);
                text.focus();
                text.addEventListener('focus', val => {
                    this.isFocus = true;
                    if (!this.isActive(el)) text.blur();
                });
                text.addEventListener('blur', val => {
                    this.isFocus = false;
                });
            },
            updateBaseLine(el) {
                let line1 = el.getElementsByClassName('base-line1')[0];
                let line2 = el.getElementsByClassName('base-line2')[0];
                let line3 = el.getElementsByClassName('base-line3')[0];
                let line4 = el.getElementsByClassName('base-line4')[0];
                let left = el.style.left;
                let right = this.container.width - Number(el.style.width.split('px')[0]) - Number(el.style.left.split('px')[0]);
                let top = el.style.top;
                let bottom = this.container.height - Number(el.style.height.split('px')[0]) - Number(el.style.top.split('px')[0]);
                line1.style.left = '-' + left;
                line1.style.right = '-' + right + 'px';
                line2.style.top = '-' + top;
                line2.style.bottom = '-' + bottom + 'px';
                line3.style.left = '-' + left;
                line3.style.right = '-' + right + 'px';
                line4.style.top = '-' + top;
                line4.style.bottom = '-' + bottom + 'px';
            },
            // 点击事件
            clickModule(val) {
                if (this.isMouseOver) {
                    this.isMouseOver = false;
                    return;
                }
                let target = val.target;
                // 点击block自己
                if (this.isBlock(target) && !this.freeBlock) {
                    if (this.isActive(target)) return;
                    // 清除之前的选中节点
                    let parent = target.parentNode;
                    let biling = parent.childNodes;
                    biling.forEach(data => this.setActive(data, false));
                    this.setActive(target, true);
                    this.currentClick = target;
                }
                else {
                    // 冒泡兼容性
                    let path = val.path || (val.composedPath && val.composedPath());
                    let block = this.findBlockPath(path)[0];
                    if (block) {
                        // 清除之前的选中节点
                        let parent = block.parentNode;
                        let biling = parent.childNodes;
                        biling.forEach(data => this.setActive(data, false));
                        this.setActive(block, true);
                        this.currentClick = block;
                    }
                    else {
                        let blocks = this.$el.getElementsByClassName('isc-drawing-board__block');
                        Array.from(blocks).forEach(block => {
                            this.setActive(block, false);
                        });
                        this.currentClick = null;
                    }

                }
                this.freeBlock = false;
            },
            // mouse事件
            startCreate(val) {
                let target = val.target;
                // 画图
                if (this.isContainer(target)) {
                    this.startPoint = {
                        x: val.x,
                        y: val.y,
                        offsetY: val.offsetY,
                        offsetX: val.offsetX
                    }
                }
                // 放大缩小
                else if (this.isDot(target)) {
                    let parent = target.parentNode;
//                    this.currentBlock.id = parent.id;
                    // 记录点的位置
                    this.startPoint = {
                        x: val.x,
                        y: val.y,
                        dot: target,
                        parent,
                        width: Number(parent.style.width.split('px')[0]),
                        height: Number(parent.style.height.split('px')[0]),
                        offsetY: Number(parent.style.top.split('px')[0]),
                        offsetX: Number(parent.style.left.split('px')[0])
                    }
                }
                // 拖拽
                else {
                    let nodeName = val.target.nodeName;
                    if (nodeName === 'TEXTAREA') return;
                    // 冒泡兼容性
                    let path = val.path || (val.composedPath && val.composedPath());
                    let block = this.findBlockPath(path)[0];
                    if (!block || !this.isActive(block)) return;
                    // 记录鼠标初始位置和元素初始位置,top/leftz-index
                    this.zIndex ++;
                    this.startPoint = {
                        x: val.x,
                        y: val.y,
                        target: block,
                        offsetY: block.offsetTop,
                        offsetX: block.offsetLeft
                    }
                }
            },
            mouseMove(val) {
                if (!this.startPoint) return;
                this.isMouseOver = true;
                let width = val.x - this.startPoint.x;
                let height = val.y - this.startPoint.y;
                let absWidth = Math.abs(width), absHeight =  Math.abs(height);
                // 拖拽
                if (this.startPoint.target) {
                    let top = this.startPoint.offsetY + height;
                    let left = this.startPoint.offsetX + width;

                    let blockWidth = this.startPoint.target.style.width.split('px')[0];
                    let blockHeight = this.startPoint.target.style.height.split('px')[0];
                    this.startPoint.target.style.zIndex = this.zIndex;
                    if (top >= 0 && top <= this.container.height - blockHeight) {
                        this.startPoint.target.style.top = top + 'px';
                    }
                    if (left >= 0 && left <= this.container.width - blockWidth) {
                        this.startPoint.target.style.left = left + 'px';
                    }
                    this.showLine && this.updateBaseLine(this.startPoint.target);
                }
                // 放大缩小
                else if (this.startPoint.dot) {
                    let block = this.startPoint.parent;
                    let preLeft = this.startPoint.offsetX; // 元素最初的top/left
                    let preTop = this.startPoint.offsetY;
                    let toTop = preTop + height, toLeft = preLeft + width;
                    let rate = this.startPoint.width / this.startPoint.height; // 记住宽高比
                    // 向左上方放大
                    if (this.startPoint.dot.id === 'dot-1') {
                        let blockWidth = this.startPoint.width - width;
                        let blockHeight = blockWidth / rate;
                        let top = preTop + width / rate;
                        if (blockHeight <= 4 || blockWidth <= 4) return;
                        if (top >= 0 && toLeft >= 0) {
                            block.style.top = top + 'px';
                            block.style.height = blockHeight + 'px';
                            block.style.left = toLeft + 'px';
                            block.style.width = blockWidth + 'px';
                        }
                    }
                    // 向右上方放大
                    else if (this.startPoint.dot.id === 'dot-2') {
                        let blockWidth = this.startPoint.width + width;
                        let blockHeight = this.startPoint.height - height;
                        let width = blockHeight * rate
                        if (blockHeight <= 4 || width <= 4) return;
                        if (toTop >= 0 && preLeft <= this.container.width - width) {
                            block.style.top = toTop + 'px';
                            block.style.height = blockHeight + 'px';
                            block.style.width = width + 'px';
                        }
                    }
                    // 向右下方放大
                    else if (this.startPoint.dot.id === 'dot-3') {
                        let blockWidth = this.startPoint.width + width;
                        let blockHeight = this.startPoint.height + width / rate;
                        if (blockHeight <= 4 || blockWidth <= 4) return;
                        if (preLeft <= this.container.width - blockWidth && preTop <= this.container.height - blockHeight) {
                            block.style.width = blockWidth + 'px';
                            block.style.height = blockHeight + 'px';
                        }
                    }
                    // 向左下方放大
                    else if (this.startPoint.dot.id === 'dot-4') {
                        let blockWidth = this.startPoint.width - width;
                        let blockHeight = this.startPoint.height - width / rate;
                        if (blockHeight <= 4 || blockWidth <= 4) return;
                        if (toLeft >= 0 && toLeft <= this.container.width - blockWidth && preTop <= this.container.height - blockHeight) {
                            block.style.left = toLeft + 'px';
                            block.style.width = blockWidth + 'px';
                            block.style.height = blockHeight + 'px';
                        }
                    }
                    // 向上扩展高
                    else if (this.startPoint.dot.id === 'dot-5') {
                        let blockHeight = this.startPoint.height - height;
                        if (blockHeight <= 4 ) return;
                        if (toTop >= 0) {
                            block.style.top = toTop + 'px';
                            block.style.height = blockHeight + 'px';
                        }
                    }
                    // 向右扩展宽
                    else if (this.startPoint.dot.id === 'dot-6') {
                        let blockWidth = this.startPoint.width + width;
                        if (blockWidth <= 4 ) return;
                        if (preLeft <= this.container.width - blockWidth) {
                            block.style.width = blockWidth + 'px';
                        }
                    }
                    // 向下扩展高
                    else if (this.startPoint.dot.id === 'dot-7') {
                        let blockHeight = this.startPoint.height + height;
                        if (blockHeight <= 4 ) return;
                        if (preTop <= this.container.height - blockHeight) {
                            block.style.height = blockHeight + 'px';
                        }
                    }
                    // 向左扩展宽
                    else if (this.startPoint.dot.id === 'dot-8') {
                        let blockWidth = this.startPoint.width - width;
                        if (blockWidth <= 4 ) return;
                        if (toLeft >= 0) {
                            block.style.left = toLeft + 'px';
                            block.style.width = blockWidth + 'px';
                        }
                    }
                    this.showLine && this.updateBaseLine(this.startPoint.parent);
                }
                 // 起点在block上,但是此时block并没有选中
//                else if (this.startPoint.free) {
//                    if (absWidth < 4 && absHeight < 4) return;
//                    this.freeBlock = true;
//                    console.warn('over', this.freeBlock)
//                }
                 // 绘图
                else {
                    if (absWidth < 5 && absHeight < 5) return;
                    if (this.hasCreatedDiv) {
                        let preLeft = this.startPoint.offsetX;
                        let preTop = this.startPoint.offsetY;
                        let block =  this.currentBlock;
                        let top, left;

                        // 向右上方画框, 默认是向右下方画框
                        if (width > 0 && height < 0) {
                            block.style.top = preTop - absHeight + 'px';
                        }
                        // 向左下方画框
                        else if (width < 0 && height > 0) {
                            left = preLeft - absWidth;
                            block.style.left = preLeft - absWidth + 'px';
                        }
                        // 向左上方画框
                        else if (width < 0 && height < 0) {
                            top = preTop - absHeight;
                            left = preLeft - absWidth;
                            block.style.left = preLeft - absWidth + 'px';
                            block.style.top = preTop - absHeight + 'px';

                        }
                        block.style.width = absWidth + 'px';
                        block.style.height = absHeight + 'px';
                    }
                    else {
                        let block = document.createElement('div');
                        this.currentBlock = block;
                        let container = this.$refs.container;
                        this.createDot(block);
                        block.setAttribute("class", 'isc-drawing-board__block');
                        block.style.top = this.startPoint.offsetY + 'px';
                        block.style.left = this.startPoint.offsetX + 'px';
                        block.style.boxSizing = 'border-box';
                        container.appendChild(block);
                        this.hasCreatedDiv = true;
                    }
                }
            },
            stopCreate(val) {
                if (!this.startPoint) return;
                let width = val.x - this.startPoint.x;
                let height = val.y - this.startPoint.y;
                // 判断是否要响应的拖动操作:画图结束、拖动结束、放大缩小结束
                if (!this.freeBlock && this.isMouseOver) {
                    if (!this.startPoint.target && !this.startPoint.dot){
                        let block =  this.startPoint.parent;
                        // 画图结束
                        if (block && !block.childNodes.length) {
                            this.createDot(block);
                            this.currentEdit = block;
                        }
                    }
                    this.currentModule = null;
                    this.hasCreatedDiv = false;
                    this.domId++;
                }
                this.startPoint = undefined;
            },
            // 双击事件
            dblclickCreate(val) {
                let target = val.target;
                if (!this.isBlock(target)) return;
                if (!this.isActive(target)) return;
                this.createTextArea(target);
            },
            getContent() {
                // 转换px为百分比
                let outerContent = this.changeStyle(this.container.el);
                // 过滤线条、点元素
                let filterContent = this.filterContent(outerContent);
                return filterContent;
            },
            clearContent() {
                this.currentModule = null;
                this.$refs.container.innerHTML = '';
            },
            // 拖拽事件
            dragEnd(val) {
                this.stopCreate(val);
            },
            // 内容填充
            colorChange(val) {
                if (!this.currentClick) return;
                let text = this.currentClick.getElementsByTagName('textarea')[0];
                if (!text) return;
                text.style.color = val;
            },
            imageChange(val) {
                if (!this.currentClick) return;
                this.currentClick.style.backgroundImage = 'url(' + val + ')';
            },
            videoChange(val) {
                if (!this.currentClick) return;
                let video = this.currentClick.getElementsByTagName('textarea')[0];
                if (!video) {
                    video = document.createElement('video');
                    video.style.width = '100%';
                    this.currentClick.appendChild(video);
                }
                video.setAttribute('src', val);
            },
            fontChange(val) {
                if (!this.currentClick) return;
                let text = this.currentClick.getElementsByTagName('textarea')[0];
                if (!text) return;
                let width = Number(this.currentClick.style.width.split('px')[0]);
//                let value = 'calc(100% * ' + val / width + ')';
                text.style.fontSize = val + 'px';
            },
            familyChange(val) {
                if (!this.currentClick) return;
                let text = this.currentClick.getElementsByTagName('textarea')[0];
                if (!text) return;
                text.style.fontFamily = val;
            },
            backgroundChange(val) {
                if (!this.currentClick) return;
                this.currentClick.style.backgroundColor = val;
                this.currentClick.style.backgroundRepeat = 'no-repeat';
                this.currentClick.style.backgroundSize = '100% auto'
            },
            // 输出操作
            filterContent(val) {
                let dot = /\<div class="dot.*?\<\/div\>/g;
                let line = /\<div class="base-line.*?\<\/div\>/g;
                return val.replace(dot, '').replace(line, '').replace('is-active', '');
            },
            changeStyle(el) {
//                let style = /style=".*?"/g;
//                var strReg = val.match(style);
                let parent = el.cloneNode(true);
                let children = parent.getElementsByClassName('isc-drawing-board__block');

                Array.from(children).forEach(item => {
                    let width = Number(item.style.width.split('px')[0]);
                    let height = Number(item.style.height.split('px')[0]);
                    let left = Number(item.style.left.split('px')[0]);
                    let top = Number(item.style.top.split('px')[0]);

                    item.style.width = width / this.container.width * 100 + '%';
                    item.style.height = height / this.container.height * 100 + '%';
                    item.style.left = left / this.container.width * 100 + '%';
                    item.style.top = top / this.container.height * 100 + '%';
                    // 替换textarea标签
                    this.changeTextArea(item);
                });
                return parent.outerHTML
            },
            changeTextArea(el) {
                let text = el.getElementsByTagName('textarea')[0];
                if (text) {
                    let value = text.value;
                    let span = document.createElement('span');
                    span.innerText = value;
                    span.style.color = text.style.color;
                    span.style.fontSize = text.style.fontSize;
                    span.style.fontFamily = text.style.fontFamily;
                    el.appendChild(span);
                    el.removeChild(text);
                }
            }
        },
		data() {
            return {
                hasCreatedDiv: false,
                domId: 0,
                zIndex: 0,
                isMouseOver: false, // 标志是否有拖动操作
                currentEdit: null, // 当前正在操作的block
                currentBlock: {},
                currentModule: null, // 选中的素材块,等待画图.
                currentClick: null // 激活状态下的block,删除用
			};
		},
        mounted() {
            this.container = {
                el: this.$refs.container,
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight
            };
            // 全局绑定mouse事件,监听mouseup事件是否在画框外面进行
            document.addEventListener('mouseup', val => {
                let target = val.target;
                if (!this.isContainer(target) && !this.isBlock(target) && !this.isDot(target)) {
                    this.stopCreate(val);
                }
            }, true);
            //删除画框
            document.addEventListener('keydown', e => {
                let keyNum = window.event ? e.keyCode :e.which;
                if (this.isFocus) return;
                if(keyNum == 46 || keyNum == 8){
                    if (this.currentClick !== null && this.container.el) {
                        this.container.el.removeChild(this.currentClick);
                        this.currentClick = null;
                    }
                }
            }, true);
        },
        beforeDestroy() {
            document.addEventListener('mouseup', val => {
                let target = val.target;
                if (!this.isContainer(target) && !this.isBlock(target) && !this.isDot(target)) {
                    this.stopCreate(val);
                }
            }, true);
            //删除画框
            document.removeEventListener('keydown', e => {
                let keyNum = window.event ? e.keyCode :e.which;
                if (this.isFocus) return;
                if(keyNum == 46 || keyNum == 8){
                    if (this.currentClick !== null && this.$refs.container) {
                        this.$refs.container.removeChild(this.currentClick);
                        this.currentClick = null;
                    }
                }
            }, true);
        },
	}
</script>