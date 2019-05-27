import IsProgress from './src/progress';

/* istanbul ignore next */
IsProgress.install = function(Vue) {
  Vue.component(IsProgress.name, IsProgress);
};

export default IsProgress;
