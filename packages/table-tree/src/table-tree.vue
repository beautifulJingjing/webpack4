<template>
    <div class="isc-table-tree">
        <is-table-tree-item
                v-for="(child, index) in root.childNodes" :key="index"
                :props="props"
                ref="children"
                :showCheckbox="showCheckbox"
                :node="child"
                :levelData="levelData"
        ></is-table-tree-item>
        <div v-if="isEmpty" class="isc-table-tree__empty">
            暂无数据
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import IsTableTreeItem from './table-tree-item';
    import TreeStore from './model/tree-store'

    export default {
        name: 'IsTableTree',
        props: {
            data: {
                type: Array
            },
            nodeKey: String,
            defaultCheckedKeys: Array,
            props: {
                default() {
                    return {
                        children: 'children',
                        label: 'label',
                        disabled: 'disabled',
                        inline: 'inline'
                    };
                }
            },
            showCheckbox: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                root: null,
                levelData: {}
            };
        },
        methods: {
            setChecked(node, value) {
                this.$set(node, 'checked', value);
            },
            find(keys, data) {
                let $this = this;

                function deal(data1) {
                    data1.forEach(item => {
                        if (keys.indexOf(item[$this.props.key]) > -1) {
                            $this.setChecked(item, true);
                        }
                        else {
                            $this.setChecked(item, false);
                        }
                        if (item.children) {
                            deal(item.children);
                        }
                    });
                }

                deal(data);
            },
            getCheckedNodes(leafOnly, includeHalfChecked) {
                return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
            },

            getCheckedKeys(leafOnly) {
                return this.store.getCheckedKeys(leafOnly);
            },
            setCheckedNodes(nodes, leafOnly) {
                if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
                this.store.setCheckedNodes(nodes, leafOnly);
            },

            setCheckedKeys(keys, leafOnly) {
                if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
                this.store.setCheckedKeys(keys, leafOnly);
            },
            getHalfCheckedNodes() {
                return this.store.getHalfCheckedNodes();
            },

            getHalfCheckedKeys() {
                return this.store.getHalfCheckedKeys();
            },
            clear() {
                const deal = data => {
                    this.$set(data, 'checked', false);
                    this.$set(data, 'indeterminate', false);
                    if (data.children) {
                        data.children.forEach(item => {
                            deal(item.children, item);
                        });
                    }
                };
                this.data.length && this.data.forEach(item => {
                    deal(item, this.data);
                });
            }
        },
        computed: {
            list() {
                const traverse = (node, parent) => {
                    this.$set(node, 'checked', false);
                    this.$set(node, 'indeterminate', false);
                    this.$set(node, 'level', parent ? (parent.level + 1) : 1);
                    this.$set(node, 'parent', parent ? parent : null);
                    if (node.children) {
                        node.children.forEach(each => {
                            traverse(each, node);
                        });
                    }
                };
                return this.data.map(item => {
                    traverse(item);
                    return item;
                });
            },
            isEmpty() {
                return !this.data.length;
            }
        },
        created() {
            this.isTree = true;
            this.store = new TreeStore({
                key: this.nodeKey,
                data: this.data,
                lazy: this.lazy,
                props: this.props,
                load: this.load,
                currentNodeKey: this.currentNodeKey,
                checkStrictly: this.checkStrictly,
                checkDescendants: this.checkDescendants,
                defaultCheckedKeys: this.defaultCheckedKeys,
                defaultExpandedKeys: this.defaultExpandedKeys,
                autoExpandParent: this.autoExpandParent,
                defaultExpandAll: this.defaultExpandAll,
                filterNodeMethod: this.filterNodeMethod
            });
            this.root = this.store.root;
        },
        mounted() {
            let children = this.$el.getElementsByClassName('level');
            Array.from(children).forEach(item => {
                let className = item.getAttribute('class').split(' ');
                let level = className[2].split('-')[1];
                if (this.levelData[level]) item.style.width = (this.levelData[level][0] - 40) + 'px';
            })
        },
        watch: {
            data(newVal) {
                this.store.setData(newVal);
            },
            defaultCheckedKeys(newVal) {
                this.store.setDefaultCheckedKey(newVal);
            },
        },
        components: {
            IsTableTreeItem
        }
    };
</script>
