import IsTableTree from './src/table-tree';

/* istanbul ignore next */
IsTableTree.install = function(Vue) {
  Vue.component(IsTableTree.name, IsTableTree);
};

export default IsTableTree;
