import IsDrawingBoard from './src/main';

/* istanbul ignore next */
IsDrawingBoard.install = function(Vue) {
  Vue.component(IsDrawingBoard.name, IsDrawingBoard);
};

export default IsDrawingBoard;
