<template>
    <div class="isc-table-tree-node">
        <div v-if="node.childNodes.length" class="isc-table-tree-node__children">
            <div class="isc-table-tree-node__header level" :class="'level-' + node.level" ref="header">
                <is-checkbox
                        v-model="node.checked"
                        v-if="showCheckbox"
                        :indeterminate="node.indeterminate"
                        :disabled="!!node.disabled"
                        @change="handleCheckChange"
                        @click.native.stop>
                    {{node[props.label]}}
                </is-checkbox>
                <span v-else class="isc-table-tree-node__label">{{node.label}}</span>
            </div>
            <div class="isc-table-tree-node__inner" :class="{'is-inline': !!node.inline}">
                <!--在此进行递归循环-->
                <is-table-tree-item
                        v-for="(child, index) in node.childNodes"
                        :key="index"
                        :props="props"
                        :showCheckbox="showCheckbox"
                        :levelData="levelData"
                        :node="child"
                ></is-table-tree-item>
            </div>
        </div>
        <div v-else class="isc-table-tree-node__content is-leaf" ref="leaf">
            <is-checkbox
                    v-model="node.checked"
                    v-if="showCheckbox"
                    :disabled="!!node.disabled"
                    @change="handleCheckChange"
                    @click.native.stop
            >{{node.label}}</is-checkbox>

            <span v-else class="isc-table-tree-node__label">{{node.label}}</span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import IsCheckbox from 'isyscore-ui/packages/checkbox';
    import IsTableTreeItem from './table-tree-item';

    export default {
        name: 'IsTableTreeItem',
        props: {
            node: {
                default() {
                    return {};
                }
            },
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
            },
            levelData: {
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                tree: null,
                oldChecked: null,
                oldIndeterminate: null,
            };
        },
        methods: {
            handleSelectChange(checked, indeterminate) {
                if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
                    this.tree.$emit('check-change', this.node.data, checked, indeterminate);
                }
                this.oldChecked = checked;
                this.indeterminate = indeterminate;
            },
            handleCheckChange(value, ev) {
                this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
                this.$nextTick(() => {
                    const store = this.tree.store;
                    this.tree.$emit('check', this.node.data, {
                        checkedNodes: store.getCheckedNodes(),
                        checkedKeys: store.getCheckedKeys(),
                        halfCheckedNodes: store.getHalfCheckedNodes(),
                        halfCheckedKeys: store.getHalfCheckedKeys(),
                    });
                });
            },
        },
        watch: {
            'node.indeterminate'(val) {
                this.handleSelectChange(this.node.checked, val);
            },

            'node.checked'(val) {
                this.handleSelectChange(val, this.node.indeterminate);
            },
        },
        created() {
            const parent = this.$parent;

            if (parent.isTree) {
                this.tree = parent;
            } else {
                this.tree = parent.tree;
            }
            const tree = this.tree;
            if (!tree) {
                console.warn('Can not find node\'s tree.');
            }
        },
        mounted() {
            let header = this.$refs.header;
            let level = this.node.level;
            if (header) {
                this.levelData[level] = this.levelData[level] || [];
                this.levelData[level].push(header.clientWidth);
                this.levelData[level].sort((a, b) => b - a);
            }
        },
        components: {
            IsTableTreeItem
        }
    };
</script>
