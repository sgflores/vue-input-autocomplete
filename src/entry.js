import InputAutoComplete from './InputAutoComplete.vue';

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('input-auto-complete', InputAutoComplete);
}

const plugin = {
    install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin);
}

InputAutoComplete.install = install;

export default InputAutoComplete;