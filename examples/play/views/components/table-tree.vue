<template>
    <div>
        <span class="demo-title">基础用法:</span>
        <div class="demo-block large-line">
            <is-table-tree :data="data" :props="defaultProps"></is-table-tree>
        </div>

        <span class="demo-title">可选择:</span>
        <div class="demo-block large-line">
            <is-table-tree :data="data" :props="defaultProps" show-checkbox></is-table-tree>
        </div>

        <span class="demo-title">默认选中状态:</span>
        <div class="demo-block large-line">
            <is-table-tree
                    :data="data3"
                    :props="defaultProps"
                    node-key="id"
                    show-checkbox
                    :default-checked-keys="[5]">
            </is-table-tree>
        </div>

        <span class="demo-title">树节点选择:</span>
        <div class="demo-block large-line">
            <is-table-tree
                    :data="data3"
                    :props="defaultProps"
                    ref="tree"
                    node-key="id"
                    show-checkbox
                    :default-checked-keys="[5]">
            </is-table-tree>
            <is-button class="line-button" @click="getCheckedKeys">通过key获得</is-button>
            <is-button class="line-button" @click="setCheckedKeys">通过key设置</is-button>
            <is-button class="line-button" @click="clear">清空</is-button>
        </div>

        <span class="demo-title">禁用状态:</span>
        <div class="demo-block large-line" style="height:228px;">
            <is-table-tree
                    :data="data1"
                    :props="defaultProps"
                    node-key="id"
                    :default-checked-keys="[5, 7]"
                    show-checkbox>
            </is-table-tree>
        </div>

        <span class="demo-title">叶节点inline:</span>
        <div class="demo-block large-line">
            <is-table-tree
                    :data="data2"
                    :props="defaultProps2"
                    node-key="id"
                    :default-checked-keys="[6, 95]"
                    show-checkbox>
            </is-table-tree>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                defaultProps2: {
                    children: 'children',
                    label: 'label',
                },
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1',
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                data1: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级',
                        children: [{
                            id: 4,
                            label: '三级 3-1-1'
                        }, {
                            id: 5,
                            label: '三级 3-1-2',
                            disabled: true,
                            children: [{
                                id: 8,
                                label: '四级 3-1-1'
                            }, {
                                id: 9,
                                label: '四级 3-1-2',
                                disabled: true
                            }]
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled: true,
                        children: [{
                            id: 6,
                            label: '三级 3-2-1',
                            children: [{
                                id: 10,
                                label: '四级 3-1-1',
                                disabled: true
                            }]
                        }, {
                            id: 7,
                            label: '三级 3-2-2',
                            disabled: true
                        }]
                    }]
                }],
                data2: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1二级 2-1二级',
                        children: [{
                            id: 4,
                            label: '三级 3-1-1'
                        }, {
                            id: 5,
                            label: '三级 3-1-2',
                            disabled: true,
                            children: [{
                                id: 8,
                                label: '四级 3-1-1',
                            }, {
                                id: 9,
                                label: '三级 3-1-2四级 3-1-2',
                                disabled: true,
                                children: [{
                                    id: 94,
                                    label: '三级 3-1-1'
                                }, {
                                    id: 95,
                                    label: '三级 3-1-2',
                                    disabled: true,
                                    inline: true,
                                    children: [{
                                        id: 98,
                                        label: '四级 3-1-1',
                                    }, {
                                        id: 99,
                                        label: '四级 3-1-2',
                                        disabled: true,
                                    }]
                                }]
                            }]
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled: true,
                        children: [{
                            id: 6,
                            label: '三级 3-2-1',
                            children: [{
                                id: 10,
                                label: '四级 3-1-1四级 3-1-1四级 3-1-1四级',
                                disabled: true,
                                children: [{
                                    id: 94,
                                    label: '三级 3-1-1'
                                }, {
                                    id: 95,
                                    label: '三级 3-1-2',
                                    disabled: true,
                                    inline: true,
                                    children: [{
                                        id: 98,
                                        label: '四级 3-1-1',
                                    }, {
                                        id: 99,
                                        label: '四级 3-1-2',
                                        disabled: true,
                                    }]
                                }]
                            }]
                        }, {
                            id: 7,
                            label: '三级 3-2-2',
                            disabled: true
                        }]
                    }]
                }],
                data3: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1',
                        children: [{
                            id: 4,
                            label: '三级 3-1-1'
                        }, {
                            id: 5,
                            label: '三级 3-1-2',
                            children: [{
                                id: 8,
                                label: '四级 3-1-1'
                            }, {
                                id: 9,
                                label: '四级 3-1-2',
                            }]
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        children: [{
                            id: 6,
                            label: '三级 3-2-1',
                            children: [{
                                id: 10,
                                label: '四级 3-1-1',
                            }]
                        }, {
                            id: 7,
                            label: '三级 3-2-2',
                        }]
                    }]
                }]
            }
        },
        methods: {
            getCheckedKeys() {
                let value = this.$refs.tree.getCheckedKeys();
            },
            setCheckedKeys(val) {
                this.$refs.tree.setCheckedKeys([5, 7, 2, 6]);
            },
            clear() {
                this.$refs.tree.setCheckedKeys([]);
            }
        }
    }
</script>

<style>

</style>
