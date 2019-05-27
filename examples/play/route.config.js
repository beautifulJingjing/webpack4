/**
 * Created by caojingjing on 2019/5/14.
 */
import slideConfig from './slide.config';

const load = function() {
    let route = [];
    slideConfig.length && slideConfig.map(item => {
        route.push({
            path: item.path,
            name: item.name,
            component: () => require.ensure([], () => require(`./views/components/${item.components}.vue`))
        })
    });
    return route;
};

let route = load().concat([
    {
        path: '/',
        redirect: '/button'
    },
    {
        path: '*',
        redirect: '/'
    }
]);
export default route;