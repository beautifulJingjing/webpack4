import IsStep from '../steps/src/step';

/* istanbul ignore next */
IsStep.install = function(Vue) {
  Vue.component(IsStep.name, IsStep);
};

export default IsStep;
