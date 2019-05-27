import IsColorPicker from './src/main';

/* istanbul ignore next */
IsColorPicker.install = function(Vue) {
  Vue.component(IsColorPicker.name, IsColorPicker);
};

export default IsColorPicker;
