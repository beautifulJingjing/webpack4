import IsTag from './src/tag';

/* istanbul ignore next */
IsTag.install = function(Vue) {
  Vue.component(IsTag.name, IsTag);
};

export default IsTag;
