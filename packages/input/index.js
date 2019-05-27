import IsInput from './src/input';

/* istanbul ignore next */
IsInput.install = function(Vue) {
  Vue.component(IsInput.name, IsInput);
};

export default IsInput;
