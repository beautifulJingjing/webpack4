import IsOption from '../select/src/option';

/* istanbul ignore next */
IsOption.install = function(Vue) {
  Vue.component(IsOption.name, IsOption);
};

export default IsOption;
