import directive from './src/directive';
import IsUpload from './src/main';

export default {
    install(Vue) {
        Vue.use(directive);
        Vue.component(IsUpload.name, IsUpload);
    },
    IsUpload,
    directive
};
