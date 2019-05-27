/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Step from '../packages/step/index.js';
import Steps from '../packages/steps/index.js';
import Card from '../packages/card/index.js';
import ColorPicker from '../packages/color-picker/index.js';
import Input from '../packages/input/index.js';
import Checkbox from '../packages/checkbox/index.js';
import TableTree from '../packages/table-tree/index.js';
import DrawingBoard from '../packages/drawing-board/index.js';
import Upload from '../packages/upload/index.js';
import Loading from '../packages/loading/index.js';
import Progress from '../packages/progress/index.js';
import Select from '../packages/select/index.js';
import Option from '../packages/option/index.js';
import OptionGroup from '../packages/option-group/index.js';
import Tag from '../packages/tag/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
// import locale from 'element-ui/src/locale';
// import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Button,
  ButtonGroup,
  Step,
  Steps,
  Card,
  ColorPicker,
  Input,
  Checkbox,
  TableTree,
  DrawingBoard,
  Upload,
  Progress,
  Select,
  Option,
  OptionGroup,
  Tag,
  Scrollbar,
  // CollapseTransition
];

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  let extra = 'IsUpload'
  components.forEach(component => {
    component[extra] ? Vue.component(component[extra].name, component[extra]) : Vue.component(component.name, component);
  });

  Vue.use(Upload.directive);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // Vue.prototype.$loading = Loading.service;
  // Vue.prototype.$msgbox = MessageBox;
  // Vue.prototype.$alert = MessageBox.alert;
  // Vue.prototype.$confirm = MessageBox.confirm;
  // Vue.prototype.$prompt = MessageBox.prompt;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  // CollapseTransition,
  // Loading,
  Button,
  ButtonGroup,
  Step,
  Steps,
  Card,
  ColorPicker,
  Input,
  Checkbox,
  TableTree,
  DrawingBoard,
  Upload,
  Progress,
  Select,
  Option,
  OptionGroup,
  Tag,
  Scrollbar
};
